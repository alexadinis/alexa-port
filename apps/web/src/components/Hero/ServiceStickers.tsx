"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "../Language/LanguageProvider";

interface Sticker {
  key: string;
  pt: string;
  en: string;
  tone: string;
  /** Starting spot, as a fraction of the hero box. */
  x: number;
  y: number;
  rotate: number;
  /** The pinned one never floats and cannot be dragged. */
  pinned?: boolean;
}

const STICKERS: Sticker[] = [
  {
    key: "strategy",
    pt: "estratégia",
    en: "strategy",
    tone: "bg-green text-white",
    x: 0.05,
    y: 0.11,
    rotate: -6,
  },
  {
    key: "content",
    pt: "conteúdo",
    en: "content",
    tone: "bg-pink text-black",
    x: 0.82,
    y: 0.14,
    rotate: 6,
  },
  {
    key: "design",
    pt: "design",
    en: "design",
    tone: "bg-blue text-white",
    x: 0.03,
    y: 0.47,
    rotate: 3,
  },
  {
    key: "community",
    pt: "gestão de redes",
    en: "community",
    tone: "bg-black text-white",
    x: 0.79,
    y: 0.5,
    rotate: -3,
  },
  {
    key: "copywriting",
    pt: "copywriting",
    en: "copywriting",
    tone: "bg-red text-white",
    x: 0.11,
    y: 0.82,
    rotate: 3,
  },
  {
    key: "years",
    pt: "7 anos disto",
    en: "7 years of this",
    tone: "bg-black text-yellow",
    x: 0.76,
    y: 0.83,
    rotate: -6,
    pinned: true,
  },
];

/** Speed the loose stickers never drop below, so they always drift. */
const DRIFT = 20;
/** Ceiling on a throw, so a fast flick cannot fire one across the page. */
const MAX_THROW = 1800;
/** Share of its speed a sticker keeps per second once let go. */
const FRICTION = 0.3;
const BOUNCE = 0.72;
/** How hard the copy in the middle pushes a sticker back out. */
const REPULSION = 320;

interface Body {
  el: HTMLLIElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  baseAngle: number;
  spin: number;
  width: number;
  height: number;
  placed: boolean;
  pointerId: number | null;
  grabX: number;
  grabY: number;
  lastX: number;
  lastY: number;
  lastAt: number;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

/**
 * The services, scattered around the headline. Everything except "7 anos
 * disto" drifts around the hero, can be dragged, and keeps the speed of the
 * throw when released — bouncing off the edges of the section and sliding
 * back out of the middle whenever it wanders over the copy.
 *
 * Phones get none of this: the hero there is already tight to the fold, and
 * a draggable toy competes with the page scroll. The whole component
 * renders nothing below `sm`, so no bodies and no animation frame.
 */
export default function ServiceStickers() {
  const { language } = useLanguage();
  const [isWideEnough, setIsWideEnough] = useState(false);
  const bodiesRef = useRef(new Map<string, Body>());
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 640px)");
    const update = () => setIsWideEnough(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const registerBody = useCallback(
    (sticker: Sticker) => (el: HTMLLIElement | null) => {
      const bodies = bodiesRef.current;

      if (!el) {
        bodies.delete(sticker.key);
        return;
      }
      if (bodies.has(sticker.key)) return;

      bodies.set(sticker.key, {
        el,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        angle: sticker.rotate,
        baseAngle: sticker.rotate,
        spin: 0,
        width: 0,
        height: 0,
        placed: false,
        pointerId: null,
        grabX: 0,
        grabY: 0,
        lastX: 0,
        lastY: 0,
        lastAt: 0,
      });
    },
    [],
  );

  useEffect(() => {
    if (!isWideEnough) return;

    const bodies = [...bodiesRef.current.values()];
    const field = bodies[0]?.el.parentElement;
    if (!field) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let bounds = { width: 0, height: 0 };
    let copy: DOMRect | null = null;

    const paint = (body: Body) => {
      body.el.style.transform = `translate3d(${body.x}px, ${body.y}px, 0) rotate(${body.angle}deg)`;
    };

    // The markup positions the stickers in percentages so they land in the
    // right place with no JavaScript. Measure that layout once, then switch
    // them to transforms, which is all the loop touches from here on.
    const measure = () => {
      const fieldRect = field.getBoundingClientRect();
      const copyEl = field.parentElement?.querySelector("[data-hero-copy]");

      bounds = { width: fieldRect.width, height: fieldRect.height };
      copy = null;

      if (copyEl) {
        const rect = copyEl.getBoundingClientRect();
        copy = new DOMRect(
          rect.left - fieldRect.left,
          rect.top - fieldRect.top,
          rect.width,
          rect.height,
        );
      }

      for (const body of bodies) {
        const rect = body.el.getBoundingClientRect();

        body.width = rect.width;
        body.height = rect.height;

        if (!body.placed) {
          body.x = rect.left - fieldRect.left;
          body.y = rect.top - fieldRect.top;
          body.el.style.left = "0px";
          body.el.style.top = "0px";
          body.placed = true;
          paint(body);
          continue;
        }

        body.x = clamp(body.x, 0, Math.max(0, bounds.width - body.width));
        body.y = clamp(body.y, 0, Math.max(0, bounds.height - body.height));
        paint(body);
      }
    };

    measure();

    if (prefersReducedMotion) {
      const observer = new ResizeObserver(measure);
      observer.observe(field);
      return () => observer.disconnect();
    }

    // Sends a sticker that has drifted over the headline or the buttons back
    // out the shortest way, instead of letting it park on top of the copy.
    const pushOutOfCopy = (body: Body, dt: number) => {
      if (!copy) return;

      const cx = body.x + body.width / 2;
      const cy = body.y + body.height / 2;

      if (
        cx < copy.left ||
        cx > copy.right ||
        cy < copy.top ||
        cy > copy.bottom
      ) {
        return;
      }

      const toLeft = cx - copy.left;
      const toRight = copy.right - cx;
      const toTop = cy - copy.top;
      const toBottom = copy.bottom - cy;
      const shortest = Math.min(toLeft, toRight, toTop, toBottom);

      if (shortest === toLeft) body.vx -= REPULSION * dt;
      else if (shortest === toRight) body.vx += REPULSION * dt;
      else if (shortest === toTop) body.vy -= REPULSION * dt;
      else body.vy += REPULSION * dt;
    };

    let previous = performance.now();

    const step = (now: number) => {
      const dt = Math.min((now - previous) / 1000, 0.05);
      previous = now;

      const decay = Math.pow(FRICTION, dt);

      for (const body of bodies) {
        if (body.pointerId !== null) continue;

        body.vx = body.vx * decay + (Math.random() - 0.5) * 24 * dt;
        body.vy = body.vy * decay + (Math.random() - 0.5) * 24 * dt;

        pushOutOfCopy(body, dt);

        const speed = Math.hypot(body.vx, body.vy);
        if (speed < DRIFT) {
          const heading = speed === 0 ? Math.random() * Math.PI * 2 : 0;
          const scale = speed === 0 ? 0 : DRIFT / speed;

          body.vx = speed === 0 ? Math.cos(heading) * DRIFT : body.vx * scale;
          body.vy = speed === 0 ? Math.sin(heading) * DRIFT : body.vy * scale;
        }

        body.x += body.vx * dt;
        body.y += body.vy * dt;
        body.angle += body.spin * dt;
        body.spin *= decay;

        // Once it has slowed down, ease back to the tilt it was drawn at —
        // the short way round — so a thrown sticker never settles upside
        // down or at some angle nobody chose.
        if (Math.hypot(body.vx, body.vy) < 90) {
          const delta =
            (((body.baseAngle - body.angle + 180) % 360) + 360) % 360 - 180;
          body.angle += delta * Math.min(1, 2.2 * dt);
        }

        const maxX = Math.max(0, bounds.width - body.width);
        const maxY = Math.max(0, bounds.height - body.height);

        if (body.x < 0 || body.x > maxX) {
          body.x = clamp(body.x, 0, maxX);
          body.vx = -body.vx * BOUNCE;
        }
        if (body.y < 0 || body.y > maxY) {
          body.y = clamp(body.y, 0, maxY);
          body.vy = -body.vy * BOUNCE;
        }

        paint(body);
      }

      frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);

    const onPointerDown = (event: PointerEvent) => {
      const el = (event.target as HTMLElement).closest("li");
      const body = bodies.find((candidate) => candidate.el === el);
      if (!body) return;

      event.preventDefault();
      body.pointerId = event.pointerId;
      body.grabX = event.clientX - body.x;
      body.grabY = event.clientY - body.y;
      body.lastX = event.clientX;
      body.lastY = event.clientY;
      body.lastAt = event.timeStamp;
      body.vx = 0;
      body.vy = 0;
      body.spin = 0;
      body.el.style.zIndex = "2";
      body.el.style.cursor = "grabbing";
    };

    const onPointerMove = (event: PointerEvent) => {
      const body = bodies.find(
        (candidate) => candidate.pointerId === event.pointerId,
      );
      if (!body) return;

      const maxX = Math.max(0, bounds.width - body.width);
      const maxY = Math.max(0, bounds.height - body.height);

      body.x = clamp(event.clientX - body.grabX, 0, maxX);
      body.y = clamp(event.clientY - body.grabY, 0, maxY);
      paint(body);

      // Keep the last sample only; the throw should follow the flick at the
      // moment of release, not the average of the whole drag.
      const elapsed = event.timeStamp - body.lastAt;
      if (elapsed > 8) {
        body.vx = ((event.clientX - body.lastX) / elapsed) * 1000;
        body.vy = ((event.clientY - body.lastY) / elapsed) * 1000;
        body.lastX = event.clientX;
        body.lastY = event.clientY;
        body.lastAt = event.timeStamp;
      }
    };

    const onPointerUp = (event: PointerEvent) => {
      const body = bodies.find(
        (candidate) => candidate.pointerId === event.pointerId,
      );
      if (!body) return;

      // A pointer that stops before release is a place, not a throw.
      if (event.timeStamp - body.lastAt > 120) {
        body.vx = 0;
        body.vy = 0;
      }

      const speed = Math.hypot(body.vx, body.vy);
      if (speed > MAX_THROW) {
        body.vx = (body.vx / speed) * MAX_THROW;
        body.vy = (body.vy / speed) * MAX_THROW;
      }

      body.spin = clamp(body.vx * 0.08, -120, 120);
      body.pointerId = null;
      body.el.style.zIndex = "";
      body.el.style.cursor = "";
    };

    for (const body of bodies) {
      body.el.addEventListener("pointerdown", onPointerDown);
    }

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    const observer = new ResizeObserver(measure);
    observer.observe(field);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      observer.disconnect();

      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);

      for (const body of bodies) {
        body.el.removeEventListener("pointerdown", onPointerDown);
      }
    };
  }, [isWideEnough, language]);

  if (!isWideEnough) return null;

  // The field is inset from the top so a drifting sticker never slides under
  // the fixed navbar, and off the side edges so none of them ends up flush
  // against the viewport.
  return (
    <ul className="pointer-events-none absolute top-20 right-3 bottom-4 left-3 z-[1] m-0 hidden list-none p-0 select-none sm:block">
      {STICKERS.map((sticker) => (
        <li
          key={sticker.key}
          ref={sticker.pinned ? undefined : registerBody(sticker)}
          style={{
            left: `${sticker.x * 100}%`,
            top: `${sticker.y * 100}%`,
            transform: `rotate(${sticker.rotate}deg)`,
            touchAction: sticker.pinned ? undefined : "none",
          }}
          className={`absolute flex items-center rounded-full px-6 py-3 text-[17px] font-semibold whitespace-nowrap ${sticker.tone} ${
            sticker.pinned ? "" : "pointer-events-auto cursor-grab"
          }`}
        >
          {language === "pt" ? sticker.pt : sticker.en}
        </li>
      ))}
    </ul>
  );
}
