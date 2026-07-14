export interface Project {
  slug: string;
  title: string;
  summary: string;
  image: string;
  focus: string;
  services: string[];
  accent: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "endesa-portugal",
    title: "Endesa Portugal",
    summary:
      "Where energy meets creativity: social content that turns everyday questions into clear, useful stories.",
    image: "/endesa.webp",
    focus: "Social media & content",
    services: ["Content strategy", "Creative concepts", "Social design"],
    accent: "#3476ee",
  },
  {
    slug: "munchie",
    title: "Munchie",
    summary:
      "Playful content for an artisan burger brand, made to feel as irresistible on screen as it does at the table.",
    image: "/munchie.webp",
    focus: "Content & copywriting",
    services: ["Social media", "Creative direction", "Copywriting"],
    accent: "#44985a",
  },
  {
    slug: "penafiel-racing-fest",
    title: "Penafiel Racing Fest",
    summary:
      "High-energy event communication that brings the speed, noise and excitement of race weekend into every post.",
    image: "/prf.webp",
    focus: "Campaign & event",
    services: ["Campaign design", "Social media", "Event communication"],
    accent: "#3476ee",
  },
  {
    slug: "lr-opticas",
    title: "L&R Ópticas",
    summary:
      "A clear and recognisable social presence, balancing practical eye-care information with a distinctive visual voice.",
    image: "/l-r.webp",
    focus: "Social media & design",
    services: ["Content planning", "Graphic design", "Copywriting"],
    accent: "#e84e3c",
  },
  {
    slug: "feel-better",
    title: "Feel Better",
    summary:
      "Fresh, reassuring content that makes beauty and self-care information approachable, useful and easy to remember.",
    image: "/feel-better.webp",
    focus: "Content & strategy",
    services: ["Content strategy", "Social design", "Copywriting"],
    accent: "#f2cddd",
  },
  {
    slug: "dona-gloria",
    title: "Dona Glória",
    summary:
      "A sweet digital presence built around warm storytelling, playful illustration and content made for sharing.",
    image: "/dona-gloria.webp",
    focus: "Social media & design",
    services: ["Creative concepts", "Content design", "Community content"],
    accent: "#e84e3c",
  },
  {
    slug: "alianca",
    title: "Aliança",
    summary:
      "Product-led social content that brings the colour, texture and personality of a neighbourhood bakery online.",
    image: "/alianca.webp",
    focus: "Content & design",
    services: ["Social media", "Graphic design", "Creative copy"],
    accent: "#ebab07",
  },
];

export const getProject = (slug: string) =>
  PROJECTS.find((project) => project.slug === slug);
