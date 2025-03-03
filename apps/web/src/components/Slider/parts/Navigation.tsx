import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

const navButtonVariants = tv({
  base: "absolute top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-300 hover:shadow-[0_0_64px_rgba(3,7,18,1)] group-hover:opacity-50 sm:flex",
  variants: {
    direction: {
      prev: "left-4",
      next: "right-4",
    },
    disabled: {
      true: "cursor-default opacity-0 group-hover:opacity-0",
      false: "hover:!opacity-90",
    },
    size: {
      xs: "h-7 w-7 text-sm",
      sm: "h-8 w-8 text-lg",
      md: "h-11 w-11 text-2xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface NavButtonProps extends VariantProps<typeof navButtonVariants> {
  onClick: () => void;
}

export const NavButton = ({
  direction,
  onClick,
  disabled,
  size,
}: NavButtonProps) => (
  <button
    className={navButtonVariants({ direction, disabled, size })}
    disabled={disabled}
    onClick={onClick}
    type="button"
  >
    {direction === "prev" ? (
      <CaretLeft weight="regular" />
    ) : (
      <CaretRight weight="regular" />
    )}
  </button>
);
