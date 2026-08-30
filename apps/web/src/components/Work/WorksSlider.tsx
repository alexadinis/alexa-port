"use client";

import Slider from "../Slider/Slider";
import WorkCard from "../WorkCard/WorkCard";

const WORKS = [
  {
    title: "KFC Portugal",
    description:
      "Serving up crispy content for KFC Portugal's social media as Colonel Sanders. 🍗",
    image: "/placeholder.jpg",
    hexColor: "#e84e3c",
  },
  {
    title: "Endesa Portugal",
    description:
      "Where energy meets creativity.\nPowering up Endesa's social media ⚡",
    image: "/endesa.webp",
    hexColor: "#3476ee",
  },
  {
    title: "Cockburn's",
    description:
      "From the bottle to the digital world, bringing the best of Port wine to social media. 🍷",
    image: "/cockburns/home-showcase.webp",
    hexColor: "#f4c755",
  },
  {
    title: "Munchie",
    description:
      "Artisan burgers and irresistible content, to savor on screen. 🍔",
    image: "/munchie.webp",
    hexColor: "#44985a",
  },
  {
    title: "L & R Ópticas",
    description:
      "Social media management with a clear and precise vision of L&R Ópticas. 👓",
    image: "/l-r.webp",
    hexColor: "#e84e3c",
  },
  {
    title: "Funerária Santa Marta",
    description: "A creative touch to give 'life' to Funerária Santa Marta. 🕊️",
    image: "/placeholder.jpg",
    hexColor: "#3476ee",
  },
  {
    title: "Penafiel Racing Fest",
    description:
      "Accelerating on social media with content that puts PRF on the podium. 🏁",
    image: "/prf.webp",
    hexColor: "#3476ee",
  },
  {
    title: "Feel Better",
    description: "Less hair, more shine for Feel Better’s social media. 💫",
    image: "/feel-better.webp",
    hexColor: "#44985a",
  },
  {
    title: "Authentic Classical Pilates",
    description:
      "Breathing life into Authentic Classical Pilates' social media. 🧘",
    image: "/authentic-classical-pilates/home-showcase.webp",
    hexColor: "#e84e3c",
  },
];

const WorksSlider = () => {
  return (
    <div className="md:mx-auto md:mt-6 ml-6 max-w-full">
      <Slider cardsPerView={[1.5, 2, 3, 3, 4, 4]} className="mx-auto bg-white">
        {WORKS.map((work) => (
          <WorkCard key={work.title} {...work} />
        ))}
      </Slider>
    </div>
  );
};

export default WorksSlider;
