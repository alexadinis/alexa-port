import assert from "node:assert/strict";
import test from "node:test";
import { PROJECTS } from "../data/projects.ts";
import {
  acceptsMarkdown,
  markdownResponseHeaders,
  parseMarkdownResource,
  renderMarkdown,
} from "./representation.ts";

test("requires an explicit acceptable Markdown media type", () => {
  assert.equal(acceptsMarkdown(null), false);
  assert.equal(acceptsMarkdown("*/*"), false);
  assert.equal(acceptsMarkdown("text/html"), false);
  assert.equal(acceptsMarkdown("text/markdown"), true);
  assert.equal(acceptsMarkdown("text/html, text/markdown; q=0.8"), true);
  assert.equal(acceptsMarkdown("text/markdown; q=0"), false);
});

test("Markdown responses declare representation, language, cache and variance", () => {
  const headers = markdownResponseHeaders("pt");

  assert.equal(headers.get("Content-Type"), "text/markdown; charset=utf-8");
  assert.equal(headers.get("Content-Language"), "pt-PT");
  assert.equal(headers.get("Cache-Control"), "public, max-age=0, s-maxage=86400");
  assert.equal(headers.get("Vary"), "Accept");
});

test("recognizes only localized home, index and project URLs", () => {
  assert.deepEqual(parseMarkdownResource("/pt"), {
    kind: "home",
    language: "pt",
  });
  assert.deepEqual(parseMarkdownResource("/en/projects"), {
    kind: "projects",
    language: "en",
  });
  assert.deepEqual(parseMarkdownResource("/pt/projetos/kfc-portugal"), {
    kind: "project",
    language: "pt",
    slug: "kfc-portugal",
  });
  assert.equal(parseMarkdownResource("/en/projects/not-a-project"), null);
  assert.equal(parseMarkdownResource("/pt/privacy"), null);
});

test("homepage Markdown is localized and links every project", () => {
  const resource = parseMarkdownResource("/pt");
  assert.ok(resource);
  const markdown = renderMarkdown(resource);

  assert.match(markdown, /^# Alexandra Barbosa/m);
  assert.match(markdown, /## Serviços/);
  assert.match(markdown, /hello@alexandrabarbosa\.pt/);
  assert.equal(
    [...markdown.matchAll(/\/pt\/projetos\//g)].length,
    9,
  );
});

test("project Markdown preserves facts, responsibilities, credits and links", () => {
  const resource = parseMarkdownResource("/en/projects/kfc-portugal");
  assert.ok(resource);
  const markdown = renderMarkdown(resource);

  assert.match(markdown, /^# KFC Portugal/m);
  assert.match(markdown, /40% increase in engagement/);
  assert.match(markdown, /268K followers organically/);
  assert.match(markdown, /## Responsibilities/);
  assert.match(markdown, /Social Media Management/);
  assert.match(markdown, /## Credits/);
  assert.match(markdown, /Michael Altomani/);
  assert.match(markdown, /## Links/);
});

test("every project has complete Markdown in Portuguese and English", () => {
  for (const language of ["pt", "en"] as const) {
    const collection = language === "pt" ? "projetos" : "projects";

    for (const project of PROJECTS) {
      const resource = parseMarkdownResource(
        `/${language}/${collection}/${project.slug}`,
      );
      assert.ok(resource, `${language}/${project.slug} should resolve`);

      const markdown = renderMarkdown(resource);
      assert.match(markdown, new RegExp(`^# ${project.title}`, "m"));
      assert.match(
        markdown,
        new RegExp(
          `## ${language === "pt" ? "Sobre o projeto" : "About the project"}`,
        ),
      );
      assert.match(
        markdown,
        new RegExp(
          `## ${language === "pt" ? "Responsabilidades" : "Responsibilities"}`,
        ),
      );
      assert.match(
        markdown,
        new RegExp(`/${language}/${collection}/${project.slug}`),
      );
    }
  }
});
