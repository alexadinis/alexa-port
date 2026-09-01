import { Paytone_One } from "next/font/google";
import Footer from "./Footer";
import Description from "./Description";
import Eyebrow from "./Eyebrow";
import ScrollCue from "./ScrollCue";
import WalkingLogo from "../Navbar/WalkingLogo";

interface HeroProps {
  title: string | React.ReactNode;
}

const paytoneOne = Paytone_One({ subsets: ["latin"], weight: ["400"] });

/**
 * Mobile and desktop share one tree so the headline stays a single `h1`.
 * Below `md` the card is sized to end at the fold: everything that matters
 * — headline, one-liner, CTA — has to fit above it, so the mascot drops to
 * a cropped watermark instead of taking a block of its own.
 */
const Hero = ({ title }: HeroProps) => {
  return (
    <div
      id="hero-banner"
      className="relative grid min-h-[calc(100dvh-6rem)] w-full max-w-[1400px] items-center gap-10 overflow-hidden rounded-[36px] bg-white px-6 pt-8 pb-16 text-black md:mt-14 md:min-h-0 md:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] md:gap-8 md:rounded-[64px] md:p-16 lg:gap-12 lg:p-20 xl:p-24"
    >
      <div className="relative z-10 flex min-w-0 flex-col items-start gap-6">
        <Eyebrow />
        <h1
          className={`${paytoneOne.className} text-[clamp(3.5rem,7vw,5.75rem)] leading-[0.94] tracking-[-0.035em] text-black md:text-[clamp(3rem,7vw,5.75rem)]`}
        >
          {typeof title === "string" ? (
            <span dangerouslySetInnerHTML={{ __html: title }} />
          ) : (
            title
          )}
        </h1>
        <Description />
        <Footer />
      </div>
      <div
        className="pointer-events-none absolute -right-20 -bottom-16 z-0 flex aspect-square w-[280px] items-center justify-center opacity-[0.08] md:pointer-events-auto md:relative md:inset-auto md:mx-0 md:w-full md:max-w-[430px] md:justify-self-end md:opacity-100"
        aria-hidden="true"
      >
        <WalkingLogo
          showName={false}
          trackingAreaId="hero-banner"
          className="size-full items-center justify-center"
          markClassName="size-full"
        />
      </div>
      <ScrollCue />
    </div>
  );
};

export default Hero;
