import { Paytone_One } from "next/font/google";
import Footer from "./Footer";
import Detail from "../../icons/Detail";
import Description from "./Description";

interface HeroProps {
  title: string | React.ReactNode;
}

const paytoneOne = Paytone_One({ subsets: ["latin"], weight: ["400"] });

const Hero = ({ title }: HeroProps) => {
  return (
    <div className="flex flex-col items-center md:items-start bg-white p-8 md:p-32 rounded-[64px] relative md:mt-14">
      <div className="flex flex-col gap-6 items-center md:items-start">
        <h1
          className={`${paytoneOne.className} text-black text-[48px] md:text-[86px] text-center md:text-left leading-none`}
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
      <Detail className="absolute top-8 right-8 animate-spin-slow animate-pulse-scale hidden md:block" />
    </div>
  );
};

export default Hero;
