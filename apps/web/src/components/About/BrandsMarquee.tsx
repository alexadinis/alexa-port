"use client";

import { Paytone_One } from "next/font/google";
import {
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import ContactBurst from "../../icons/ContactBurst";
import { useLanguage } from "../Language/LanguageProvider";

const paytoneOne = Paytone_One({ subsets: ["latin"], weight: ["400"] });

const BRANDS = [
  { name: "KFC Portugal", href: "https://www.kfc.pt/" },
  { name: "Endesa PT", href: "https://www.endesa.pt/" },
  { name: "Cockburn's", href: "https://www.cockburns.com/" },
  { name: "L&R Ópticas", href: "https://www.instagram.com/lropticas/" },
  {
    name: "PsicoMorfose",
    href: "https://www.instagram.com/psicomorfose.pt/",
  },
  { name: "TorreShopping", href: "https://torreshopping.pt/" },
  {
    name: "Penafiel Racing Fest",
    href: "https://www.instagram.com/penafielracingfest/",
  },
  {
    name: "Authentic Classic Pilates",
    href: "https://authenticclassicalpilates.pt/",
  },
  {
    name: "Funerária Santa Marta",
    href: "https://www.funerariasantamarta.pt/",
  },
  { name: "Munchie", href: "https://www.instagram.com/munchiebk/" },
  {
    name: "Alvorada cakes",
    href: "https://www.instagram.com/alvoradacakes/",
  },
  {
    name: "Food Corner",
    href: "https://www.instagram.com/foodcorner_porto/",
  },
  { name: "Maza", href: "https://www.instagram.com/maza.pasta.bar/" },
  {
    name: "Forneria Invicta",
    href: "https://www.instagram.com/forneriainvicta/",
  },
  {
    name: "Samarras Peixoto",
    href: "https://www.instagram.com/samarras_peixoto/",
  },
];

const BrandRun = ({ copyIndex }: { copyIndex: number }) => (
  <span
    className="brand-run flex shrink-0 items-center whitespace-nowrap px-5"
    aria-hidden={copyIndex !== 1}
  >
    {BRANDS.map(({ name, href }, brandIndex) => (
      <span
        key={`${copyIndex}-${name}`}
        className="brand-item inline-flex shrink-0 items-center"
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          draggable={false}
          tabIndex={copyIndex === 1 ? undefined : -1}
          className="brand-name inline-flex shrink-0 text-inherit no-underline"
        >
          {Array.from(name).map((character, characterIndex) => (
            <span
              key={`${name}-${characterIndex}`}
              className="brand-letter-frame"
            >
              <span
                className="brand-letter"
                style={{
                  animationDelay: `${brandIndex * 65 + characterIndex * 18}ms`,
                }}
              >
                {character === " " ? "\u00a0" : character}
              </span>
            </span>
          ))}
        </a>
        <span className="brand-letter-frame mx-5 md:mx-8" aria-hidden="true">
          <span
            className="brand-letter flex items-center"
            style={{ animationDelay: `${brandIndex * 65 + 240}ms` }}
          >
            <ContactBurst
              fill="currentColor"
              className="h-4 w-4 shrink-0 text-white md:h-5 md:w-5"
            />
          </span>
        </span>
      </span>
    ))}
  </span>
);

const BrandsMarquee = () => {
  const { language } = useLanguage();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const magnificationFrameRef = useRef<number | null>(null);
  const autoScrollFrameRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);
  const autoScrollPausedRef = useRef(false);
  const dragRef = useRef({
    active: false,
    pointerId: -1,
    startX: 0,
    startScrollLeft: 0,
  });
  const [motionReady, setMotionReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!wrapper || reduceMotion || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    setMotionReady(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(wrapper);
    const fallback = window.setTimeout(() => setIsVisible(true), 8000);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) return;

    let lastTime = performance.now();
    let autoPosition = 0;
    let cancelled = false;

    const startAutoScroll = async () => {
      await document.fonts.ready;

      if (cancelled) return;

      const firstRun = rail.querySelector<HTMLElement>(".brand-run");
      const runWidth = firstRun?.offsetWidth ?? 0;

      if (runWidth > 0) {
        autoPosition = runWidth;
        rail.scrollLeft = autoPosition;
      }

      const tick = (time: number) => {
        const currentRun = rail.querySelector<HTMLElement>(".brand-run");
        const currentRunWidth = currentRun?.offsetWidth ?? 0;
        const elapsed = Math.min(time - lastTime, 50);

        if (
          !autoScrollPausedRef.current &&
          !dragRef.current.active &&
          !window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
          autoPosition += elapsed * 0.055;
        } else {
          autoPosition = rail.scrollLeft;
        }

        if (currentRunWidth > 0) {
          if (autoPosition >= currentRunWidth * 2) {
            autoPosition -= currentRunWidth;
          } else if (autoPosition <= 0) {
            autoPosition += currentRunWidth;
          }
        }

        if (!autoScrollPausedRef.current && !dragRef.current.active) {
          rail.scrollLeft = autoPosition;
        }

        lastTime = time;
        autoScrollFrameRef.current = window.requestAnimationFrame(tick);
      };

      autoScrollFrameRef.current = window.requestAnimationFrame(tick);
    };

    void startAutoScroll();

    return () => {
      cancelled = true;

      if (autoScrollFrameRef.current !== null) {
        window.cancelAnimationFrame(autoScrollFrameRef.current);
      }

      if (resumeTimerRef.current !== null) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  useEffect(
    () => () => {
      if (magnificationFrameRef.current !== null) {
        window.cancelAnimationFrame(magnificationFrameRef.current);
      }
    },
    [],
  );

  const pauseAutoScroll = () => {
    autoScrollPausedRef.current = true;

    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const scheduleAutoScroll = (delay = 700) => {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
    }

    resumeTimerRef.current = window.setTimeout(() => {
      autoScrollPausedRef.current = false;
      resumeTimerRef.current = null;
    }, delay);
  };

  const resetMagnification = () => {
    const wrapper = wrapperRef.current;

    if (magnificationFrameRef.current !== null) {
      window.cancelAnimationFrame(magnificationFrameRef.current);
      magnificationFrameRef.current = null;
    }

    wrapper?.querySelectorAll<HTMLElement>(".brand-name").forEach((brand) => {
      brand.style.setProperty("--brand-scale", "1");
      brand.style.marginInline = "0px";
    });
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rail = railRef.current;

    if (dragRef.current.active && rail) {
      const dragDistance = event.clientX - dragRef.current.startX;
      rail.scrollLeft = dragRef.current.startScrollLeft - dragDistance;
      return;
    }

    if (
      event.pointerType === "touch" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const eventTarget = event.target;
    const activeBrand =
      eventTarget instanceof Element
        ? eventTarget.closest<HTMLElement>(".brand-name")
        : null;
    let magnificationX = event.clientX;

    if (activeBrand) {
      pauseAutoScroll();
    } else if (!dragRef.current.active) {
      scheduleAutoScroll(120);
    }

    if (rail && activeBrand) {
      const railBounds = rail.getBoundingClientRect();
      const brandBounds = activeBrand.getBoundingClientRect();
      const maxScale = window.innerWidth < 768 ? 1.3 : 1.42;
      const projectedHalfWidth = (activeBrand.offsetWidth * maxScale) / 2;
      const projectedBreathingRoom =
        (activeBrand.offsetWidth * (maxScale - 1)) / 2 + 4;
      const brandCenter = brandBounds.left + brandBounds.width / 2;
      const safeLeft = railBounds.left + 24;
      const safeRight = railBounds.right - 24;
      const projectedLeft =
        brandCenter + projectedBreathingRoom - projectedHalfWidth;
      const projectedRight =
        brandCenter + projectedBreathingRoom + projectedHalfWidth;

      if (projectedLeft < safeLeft) {
        rail.scrollLeft -= safeLeft - projectedLeft;
      } else if (projectedRight > safeRight) {
        rail.scrollLeft += projectedRight - safeRight;
      }

      const adjustedBounds = activeBrand.getBoundingClientRect();
      magnificationX = adjustedBounds.left + adjustedBounds.width / 2;
    }

    if (magnificationFrameRef.current !== null) {
      window.cancelAnimationFrame(magnificationFrameRef.current);
    }

    magnificationFrameRef.current = window.requestAnimationFrame(() => {
      const wrapper = wrapperRef.current;

      if (!wrapper) return;

      const maxScale = window.innerWidth < 768 ? 1.3 : 1.42;
      const influenceRadius = Math.min(280, window.innerWidth * 0.25);
      const measurements = Array.from(
        wrapper.querySelectorAll<HTMLElement>(".brand-name"),
      ).map((brand) => {
        const bounds = brand.getBoundingClientRect();

        return {
          brand,
          center: bounds.left + bounds.width / 2,
          width: brand.offsetWidth,
        };
      });

      measurements.forEach(({ brand, center, width }) => {
        const distance = Math.abs(magnificationX - center);
        const proximity = Math.max(0, 1 - distance / influenceRadius);
        const easedProximity =
          proximity === 0 ? 0 : (1 - Math.cos(proximity * Math.PI)) / 2;
        const scale = 1 + (maxScale - 1) * easedProximity;
        const breathingRoom = (width * (scale - 1)) / 2 + proximity * 4;

        brand.style.setProperty("--brand-scale", scale.toFixed(3));
        brand.style.marginInline = `${breathingRoom.toFixed(2)}px`;
      });

      magnificationFrameRef.current = null;
    });
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    pauseAutoScroll();
    resetMagnification();

    if (event.pointerType === "touch" || event.button !== 0) return;

    const eventTarget = event.target;

    if (eventTarget instanceof Element && eventTarget.closest("a")) return;

    const rail = railRef.current;

    if (!rail) return;

    dragRef.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: rail.scrollLeft,
    };
    rail.setPointerCapture(event.pointerId);
    setIsDragging(true);
    event.preventDefault();
  };

  const finishDragging = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rail = railRef.current;

    if (
      dragRef.current.active &&
      rail?.hasPointerCapture(dragRef.current.pointerId)
    ) {
      rail.releasePointerCapture(dragRef.current.pointerId);
    }

    dragRef.current.active = false;
    setIsDragging(false);
    resetMagnification();
    scheduleAutoScroll(event.pointerType === "touch" ? 1400 : 900);
  };

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    const rail = railRef.current;

    if (!rail || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) {
      return;
    }

    event.preventDefault();
    pauseAutoScroll();
    rail.scrollBy({
      left: event.key === "ArrowLeft" ? -220 : 220,
      behavior: "smooth",
    });
    scheduleAutoScroll(1200);
  };

  return (
    <div className="pb-8 md:pb-10">
      <div className="mx-auto mb-7 w-full max-w-[1600px] px-6 sm:px-10 md:px-16 lg:px-24">
        <h3
          id="brands-heading"
          className="text-base font-medium text-white md:text-lg"
        >
          {language === "pt" ? "marcas que já trabalhei" : "brands I have worked with"}
        </h3>
      </div>

      <div
        ref={wrapperRef}
        role="region"
        aria-labelledby="brands-heading"
        className={`brands-marquee w-full overflow-hidden border-y border-white bg-transparent py-4 text-white md:py-5 ${
          motionReady ? "brand-ribbon--motion-ready" : ""
        } ${isVisible ? "brand-ribbon--visible" : ""}`}
      >
        <div
          ref={railRef}
          tabIndex={0}
          aria-label={language === "pt" ? "Arrasta ou usa as setas para explorar as marcas" : "Drag or use the arrow keys to explore the brands"}
          onPointerMove={handlePointerMove}
          onPointerDown={handlePointerDown}
          onPointerUp={finishDragging}
          onPointerCancel={finishDragging}
          onPointerLeave={(event) => {
            if (dragRef.current.active) finishDragging(event);
            resetMagnification();
            scheduleAutoScroll(120);
          }}
          onKeyDown={handleKeyDown}
          className={`brands-rail w-full overflow-x-auto overflow-y-hidden py-3 select-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          <div
            className={`${paytoneOne.className} flex w-max items-center text-[clamp(1.05rem,1.8vw,1.55rem)] leading-none tracking-[-0.02em]`}
          >
            {[0, 1, 2].map((copyIndex) => (
              <BrandRun key={copyIndex} copyIndex={copyIndex} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsMarquee;
