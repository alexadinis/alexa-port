"use client";

import Slider from "../Slider/Slider";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

interface Experience {
  company: string;
  role: string;
  dateRange: string;
  forBrands?: string;
  responsibilities: string[];
}

const EXPERIENCES: Experience[] = [
  {
    company: "Legendary People + Ideas",
    role: "Social Media Manager",
    dateRange: "Apr 2024 - Feb 2025",
    forBrands:
      "For brands such as KFC Portugal, Endesa Portugal, Cockburn's and Torreshopping:",
    responsibilities: [
      "Responsible for managing social media accounts across Facebook, Instagram, TikTok, and X",
      "Copywriting and social media posts creative ideation",
      "Planning and executing paid media campaigns on Meta platforms",
      "Community management and driving engagement across all platforms",
      "Reporting on key metrics and analyzing social media campaigns performance",
      "Monitoring trends and creating real-time marketing content",
      "Photo and video content creation",
      "Boosted TikTok growth organically, increasing followers in 11 months",
    ],
  },
  {
    company: "Maionese Design",
    role: "Social Media Manager & Designer",
    dateRange: "Jun 2022 - Aug 2024",
    forBrands:
      "For brands such as Penafiel Racing Fest, Funerária Santa Marta, Rotary Club and more.",
    responsibilities: [
      "Responsible for managing social media accounts on Facebook and Instagram",
      "Creating photography and video content for digital platforms",
      "Developing and implementing social media strategies",
      "Copywriting and creative ideation for brand development, websites, and campaigns",
      "Managing client portfolios and overseeing brand growth",
      "Developing scripts and storyboards for content creation",
      "Reporting on key metrics and analyzing social media campaign performance",
    ],
  },
  {
    company: "ANCA Design Studio",
    role: "Social Media Manager & Content Creator",
    dateRange: "Oct 2019 - Jun 2022",
    responsibilities: [
      "Responsible for managing social media accounts on Facebook and Instagram",
      "Copywriting for social media, newsletters, and blog articles",
      "Creating photography and video content for digital and traditional platforms",
      "Managing client portfolios and overseeing brand development",
      "Planning and executing campaigns on Meta Ads",
      "Developing and implementing social media strategies",
      "Reporting on key metrics and analyzing social media campaign performance",
    ],
  },
  {
    company: "UIVA - Agência de Comunicação",
    role: "Marketing Internship",
    dateRange: "Feb 2019 - May 2019",
    responsibilities: [
      "Responsible for managing social media accounts on Facebook and Instagram",
      "Copywriting for social media, newsletters, and blog articles",
      "Creating photography and video content for digital and traditional platforms",
      "Reporting and analyzing social media campaigns",
      "Brand management",
    ],
  },
];

const ExperienceSlider = () => {
  return (
    <div className="max-w-full">
      <Slider
        cardsPerView={[1, 1, 1, 2, 2, 3, 3]}
        gap={20}
        navigationSize="sm"
      >
        {EXPERIENCES.map((experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </Slider>
    </div>
  );
};

export default ExperienceSlider;
