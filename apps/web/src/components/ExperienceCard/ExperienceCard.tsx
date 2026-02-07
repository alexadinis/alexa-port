import { Briefcase, CalendarBlank, DiamondsFour } from "@phosphor-icons/react";
import { cn } from "../../utils/utils";

interface Experience {
  company: string;
  role: string;
  dateRange: string;
  forBrands?: string;
  responsibilities: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

const ExperienceCard = ({ experience, className }: ExperienceCardProps) => {
  const { company, role, dateRange, forBrands, responsibilities } = experience;

  return (
    <div
      className={cn(
        "flex flex-col rounded-[24px] overflow-hidden h-full",
        "shadow-[0_4px_24px_rgba(0,0,0,0.08)]",
        "border border-black/5",
        className
      )}
    >
      {/* Header */}
      <div className="relative flex flex-col gap-3 p-5 bg-gradient-to-br from-blue to-[#2a5fcc] overflow-hidden">
        {/* Subtle decorative circle in background */}
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/5" />

        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-[10px] bg-white/15 backdrop-blur-sm shrink-0">
            <Briefcase size={20} weight="fill" className="text-white" />
          </div>
          <div className="flex flex-col min-w-0">
            <h3 className="text-lg font-bold text-white leading-tight truncate">
              {company}
            </h3>
            <p className="text-sm text-white/70 leading-snug truncate">
              {role}
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 p-5 bg-[#fafafa] flex-1">
        {/* Date range */}
        <div className="flex items-center gap-2">
          <CalendarBlank
            size={16}
            weight="bold"
            className="text-black/30 shrink-0"
          />
          <span className="text-xs font-medium text-black/40 tracking-wide uppercase">
            {dateRange}
          </span>
        </div>

        {/* For brands note */}
        {forBrands && (
          <p className="text-xs text-black/50 -mt-2 ml-6 italic">
            {forBrands}
          </p>
        )}

        {/* Responsibilities */}
        <ul className="flex flex-col gap-2.5">
          {responsibilities.map((item, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <DiamondsFour
                size={14}
                weight="fill"
                className="text-blue shrink-0 mt-[3px]"
              />
              <span className="text-sm text-black/70 leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
