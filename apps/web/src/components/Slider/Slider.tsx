import useEmblaCarousel from "embla-carousel-react";

import { Children, useCallback, useEffect, useState } from "react";

import s from "./Slider.module.css";
import { SliderProps } from "./Slider.types";
import { NavButton } from "./parts/Navigation";
import { cn } from "../../utils/utils";

function Slider({
  children,
  className,
  cardsPerView = [1, 2, 3, 4, 6, 7, 8],
  options,
  showNavigation = true,
  navigationSize = "md",
  gap = 16,
  centerItems = false,
  onSlideChange,
  autoSize = false,
}: SliderProps) {
  const containerClass = "container";

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    dragFree: false,
    containScroll: "trimSnaps",
    watchSlides: true,
    ...options,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const recalculateSlides = () => {
      const viewport = emblaApi.rootNode();
      const introSlide = viewport.querySelector('[data-intro="true"]');
      const container = emblaApi.containerNode();

      if (introSlide) {
        const introWidth = introSlide.getBoundingClientRect().width;
        const viewportWidth = viewport.getBoundingClientRect().width;
        const remainingPercentage =
          ((viewportWidth - introWidth) / viewportWidth) * 100;

        container.style.setProperty(
          "--remaining-percentage",
          `${remainingPercentage}`
        );
      }
    };

    recalculateSlides();
    window.addEventListener("resize", recalculateSlides);

    return () => window.removeEventListener("resize", recalculateSlides);
  }, [emblaApi]);

  // Add slide visibility tracking
  useEffect(() => {
    if (!emblaApi) return;

    const onScroll = () => {
      const containerRect = emblaApi.rootNode().getBoundingClientRect();

      emblaApi.slideNodes().forEach((slide) => {
        const slideRect = slide.getBoundingClientRect();
        const isInView =
          slideRect.left >= containerRect.left - slideRect.width / 2 &&
          slideRect.right <= containerRect.right + slideRect.width / 2;

        let opacity = "0.25";
        if (isInView) {
          opacity = "1";
        } else if (window.innerWidth >= 1536) {
          opacity = "0";
        }
        slide.style.opacity = opacity;
      });
    };

    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);
    onScroll();

    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", onScroll);
    };
  }, [emblaApi]);

  // Handle responsive breakpoints
  useEffect(() => {
    if (!emblaApi) return;

    const handleResize = () => {
      emblaApi.reInit();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [emblaApi]);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
    onSlideChange?.({
      currentIndex: emblaApi.selectedScrollSnap(),
      slidesLength: emblaApi.slideNodes().length,
    });
  }, [emblaApi, onSlideChange]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const slides = [
    ...(Children.map(children, (child) => (
      <div className={cn(s.embla__slide, "embla-slide")}>
        <div className={s.embla__slide__inner}>{child}</div>
      </div>
    )) || []),
  ];

  const slideStyles = autoSize
    ? {
        "--slide-size": "auto",
        "--slide-size-sm": "auto",
        "--slide-size-md": "auto",
        "--slide-size-lg": "auto",
        "--slide-size-xl": "auto",
        "--slide-size-2xl": "auto",
        "--slide-size-3xl": "auto",
      }
    : {
        "--slide-size": `${100 / (cardsPerView?.[0] || 1)}%`,
        "--slide-size-sm": `${100 / (cardsPerView?.[1] || 2)}%`,
        "--slide-size-md": `${100 / (cardsPerView?.[2] || 3)}%`,
        "--slide-size-lg": `${100 / (cardsPerView?.[3] || 4)}%`,
        "--slide-size-xl": `${100 / (cardsPerView?.[4] || 6)}%`,
        "--slide-size-2xl": `${100 / (cardsPerView?.[5] || 7)}%`,
        "--slide-size-3xl": `${100 / (cardsPerView?.[6] || 8)}%`,
      };

  return (
    <>
      <div className="w-full overflow-hidden py-2.5">
        <div className={cn(containerClass, "relative")}>
          <div
            className={cn(s.embla, className, "group")}
            style={
              {
                "--slide-spacing": `${gap}px`,
                ...slideStyles,
              } as React.CSSProperties
            }
          >
            <div className={cn(s.embla__viewport, "")} ref={emblaRef}>
              <div
                className={cn(
                  s.embla__container,
                  "flex touch-pan-y",
                  centerItems &&
                    !nextBtnEnabled &&
                    !prevBtnEnabled &&
                    "justify-center"
                )}
              >
                {slides}
              </div>
            </div>

            {showNavigation ? (
              <div className={s.embla__controls}>
                <NavButton
                  direction="prev"
                  disabled={!prevBtnEnabled}
                  onClick={scrollPrev}
                  size={navigationSize}
                />
                <NavButton
                  direction="next"
                  disabled={!nextBtnEnabled}
                  onClick={scrollNext}
                  size={navigationSize}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
