/**
 * Mobile-only status line. On desktop the same facts live in the About
 * table, so the hero does not repeat them there. The copy reads the same
 * in both languages, so this stays a server component.
 */
export default function Eyebrow() {
  return (
    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-black/55 md:hidden">
      <span aria-hidden className="size-2 shrink-0 rounded-full bg-green" />
      Porto, Portugal · Freelance
    </p>
  );
}
