import { Paytone_One } from "next/font/google";
import WorksSlider from "./WorksSlider";

const paytoneOne = Paytone_One({ subsets: ["latin"], weight: ["400"] });

const Work = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-[#ececec] items-center justify-center gap-6 mt-12 overflow-hidden max-w-full">
      <h2
        className={`${paytoneOne.className} text-black text-[48px] md:text-[86px] text-center md:text-left leading-none`}
      >
        Some of my work.
      </h2>
      <p className="text-gray-500 max-w-[720px] text-center md:text-left">
        Combining her communication expertise with a love for design, she crafts
        brands and content that tell stories and help businesses grow.
      </p>
      <WorksSlider />
    </div>
  );
};

export default Work;
