import { Paytone_One } from "next/font/google";
import Footer from "./Footer";
import Description from "./Description";
import WalkingLogo from "../Navbar/WalkingLogo";

interface HeroProps {
  title: string | React.ReactNode;
}

const paytoneOne = Paytone_One({ subsets: ["latin"], weight: ["400"] });

const Hero = ({ title }: HeroProps) => {
  return (
    <div id="hero-banner" className="relative grid w-full max-w-[1400px] items-center gap-10 overflow-hidden rounded-[64px] bg-white p-8 text-black md:mt-14 md:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] md:gap-8 md:p-16 lg:gap-12 lg:p-20 xl:p-24">
      <div className="relative z-10 flex min-w-0 flex-col items-center gap-6 md:items-start">
        <h1
          className={`${paytoneOne.className} text-center text-[clamp(3rem,7vw,5.75rem)] leading-[0.94] tracking-[-0.035em] text-black md:text-left`}
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
        className="relative z-0 mx-auto flex aspect-square w-[min(72vw,260px)] items-center justify-center md:mx-0 md:w-full md:max-w-[430px] md:justify-self-end"
        aria-hidden="true"
      >
        <WalkingLogo
          showName={false}
          trackingAreaId="hero-banner"
          className="size-full items-center justify-center"
          markClassName="size-full"
        />
      </div>
    </div>
  );
};

export default Hero;
