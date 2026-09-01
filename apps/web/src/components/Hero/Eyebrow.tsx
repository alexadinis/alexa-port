/**
 * Status line above the headline. The copy reads the same in both
 * languages, so this stays a server component.
 */
export default function Eyebrow() {
  return (
    <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.1em] text-black/55 uppercase md:text-xs md:tracking-[0.12em]">
      <span aria-hidden className="bg-green size-2 shrink-0 rounded-full" />
      Porto, Portugal
      <span aria-hidden className="opacity-40">
        /
      </span>
      Freelance
    </p>
  );
}
