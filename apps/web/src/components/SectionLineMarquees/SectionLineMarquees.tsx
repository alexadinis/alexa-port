import { cn } from "../../utils/utils";
import DetailMarquee from "../DetailMarquee/DetailMarquee";

interface SectionLineMarqueesProps {
  icons: React.ReactNode[];
  className?: string;
}

const SectionLineMarquees = ({
  icons,
  className,
}: SectionLineMarqueesProps) => {
  return (
    <div className={cn(className, `relative z-10 flex flex-col `)}>
      <DetailMarquee
        Icon={icons[0]}
        className={`absolute top-20 w-[200%] left-0 bg-[#3476ee]`}
        isRotate={true}
        speed={90}
      />
      <DetailMarquee
        Icon={icons[1]}
        className={`absolute bottom-0 w-[200%] left-0 bg-[#44985a]`}
        isRotate={false}
        speed={10}
        direction="right"
      />
    </div>
  );
};

export default SectionLineMarquees;
