import { Paytone_One } from "next/font/google";
import Footer from "./Footer";
import Description from "./Description";
import Eyebrow from "./Eyebrow";
import ServiceStickers from "./ServiceStickers";
import WalkingLogo from "../Navbar/WalkingLogo";

interface HeroProps {
  title: string | React.ReactNode;
}

const paytoneOne = Paytone_One({ subsets: ["latin"], weight: ["400"] });

/**
 * The hero is a single light field that fills the fold: the mascot sits
 * behind the headline in yellow, the service stickers hug the edges, and
 * the copy runs down the middle. The navbar is `bg-white` too, so it
 * dissolves into this section instead of capping it with a seam.
 */
const Hero = ({ title }: HeroProps) => {
  return (
    <section
      id="hero-banner"
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-white px-5 pt-24 pb-16 text-black md:px-10 md:pt-28 md:pb-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 aspect-[1168.5/1080] w-[min(118vw,470px)] -translate-x-1/2 -translate-y-[52%] text-yellow md:w-[min(70vw,700px)] md:-translate-y-[54%]"
      >
        <WalkingLogo
          showName={false}
          trackingAreaId="hero-banner"
          className="h-full items-center justify-center"
          markClassName="h-full w-auto"
        />
      </div>

      <ServiceStickers />

      <div className="relative z-10 flex w-full max-w-[54rem] flex-col items-center gap-5 text-center md:gap-7">
        <Eyebrow />
        <h1
          className={`${paytoneOne.className} text-[clamp(4.125rem,10.4vw,9.375rem)] leading-[0.84] tracking-[-0.045em] text-black`}
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
    </section>
  );
};

export default Hero;
