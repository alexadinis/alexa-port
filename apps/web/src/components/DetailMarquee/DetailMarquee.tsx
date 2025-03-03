import Marquee, { MarqueeProps } from "react-fast-marquee";

interface DetailMarqueeProps extends MarqueeProps {
  className?: string;
  Icon: React.ReactNode;
  isRotate?: boolean;
  speed?: number;
}

const DetailMarquee = ({
  className,
  Icon,
  isRotate = true,
  ...rest
}: DetailMarqueeProps) => {
  const rotationValue = isRotate ? `rotate-2` : `-rotate-2`;

  return (
    <div className={`${rotationValue} relative z-10`}>
      <Marquee
        autoFill
        className={`relative z-10 w-full py-1 ${className}`}
        {...rest}
      >
        {Icon}
      </Marquee>
    </div>
  );
};

export default DetailMarquee;
