import { Paytone_One } from "next/font/google";
import Footer from "./Footer";
import Detail from "../../icons/Detail";

interface HeroProps {
  title: string | React.ReactNode;
  description: string;
}

const paytoneOne = Paytone_One({ subsets: ["latin"], weight: ["400"] });

const Hero = ({ title, description }: HeroProps) => {
  return (
    <div className="flex flex-col items-start bg-white p-32 rounded-[64px] relative">
      <div className="flex flex-col gap-6">
        <h1
          className={`${paytoneOne.className} text-black text-[86px] text-left leading-none`}
        >
          {typeof title === "string" ? (
            <span dangerouslySetInnerHTML={{ __html: title }} />
          ) : (
            title
          )}
        </h1>
        <p className="text-black/60 text-xl max-w-[60%]">{description}</p>
        <Footer />
      </div>
      <Detail className="absolute top-8 right-8 animate-spin-slow animate-pulse-scale" />
    </div>
  );
};

export default Hero;
