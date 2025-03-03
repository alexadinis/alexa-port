import type { EmblaOptionsType } from "embla-carousel";
import type { PropsWithChildren } from "react";

export type ClassNameProps = PropsWithChildren<{ className?: string }>;

export interface SliderIntroSection {
  title: string;
  description?: string;
  cta?: {
    label: string;
    url: string;
  };
  width?: string | number; // Now accepts "400px" or 400
}

export interface OnSlideChangeProps {
  currentIndex: number;
  slidesLength: number;
}
export interface SliderProps extends ClassNameProps {
  cardsPerView?: number[];
  options?: EmblaOptionsType;
  showNavigation?: boolean;
  gap?: number;
  navigationSize?: "xs" | "sm" | "md";
  introSection?: SliderIntroSection;
  centerItems?: boolean;
  onSlideChange?: (values: OnSlideChangeProps) => void;
  autoSize?: boolean;
}
