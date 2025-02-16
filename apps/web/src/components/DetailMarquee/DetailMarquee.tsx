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
  const rotationValue = isRotate ? `rotate-1` : `-rotate-1`;

  return (
    <div className={`${rotationValue}`}>
      <Marquee autoFill className={`w-full py-1 ${className}`} {...rest}>
        {Icon}
      </Marquee>
    </div>
  );
};

export default DetailMarquee;
