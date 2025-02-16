import DetailMarquee from "../DetailMarquee/DetailMarquee";

interface SectionLineMarqueesProps {
  icons: React.ReactNode[];
  className?: string;
  colors: string[];
}

const SectionLineMarquees = ({
  icons,
  className,
  colors,
}: SectionLineMarqueesProps) => {
  const color1 = `bg-${colors[0]}`;
  const color2 = `bg-${colors[1]}`;
  return (
    <div className={`relativeflex flex-col gap-4 ${className}`}>
      <DetailMarquee
        Icon={icons[0]}
        className={color1}
        isRotate={true}
        speed={90}
      />
      <DetailMarquee
        Icon={icons[1]}
        className={`absolute -top-10 w-[200%] left-0 ${color2}`}
        isRotate={false}
        speed={10}
        direction="right"
      />
    </div>
  );
};

export default SectionLineMarquees;
