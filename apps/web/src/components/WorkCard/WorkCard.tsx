import Image from "next/image";

interface WorkCardProps {
  title: string;
  description: string;
  image: string;
  hexColor: string;
}

const WorkCard = ({ title, description, image, hexColor }: WorkCardProps) => {
  // Function to convert newlines to <br> elements
  const formatDescription = (text: string) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className="flex flex-col rounded-[32px] overflow-hidden border border-black border-6 h-full">
      <div
        className="flex flex-col gap-2 p-4 border-b border-b-black border-b-6"
        style={{ backgroundColor: hexColor }}
      >
        <h3 className="text-2xl font-bold line-clamp-1">{title}</h3>
        <p className="text-white/90 line-clamp-3 min-h-[72px]">
          {formatDescription(description)}
        </p>
      </div>
      <div className="relative w-full h-full aspect-[4/5]">
        <Image src={image} alt={title} fill className="object-cover h-full" />
      </div>
    </div>
  );
};

export default WorkCard;
