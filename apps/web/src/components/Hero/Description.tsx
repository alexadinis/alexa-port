"use client";

import { TypeAnimation } from "react-type-animation";

const Description = () => {
  return (
    <span className="text-black/60 text-xl max-w-[70%] text-center md:text-left">
      Curious and creative by nature. After my degree in Business Communication,
      I found my vocation in social media management. I combined it with my
      passion for graphic design to create original brands and content that tell
      stories and help{" "}
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "companies",
          2500,
          "dreams",
          2500,
          "brands",
          2500,
        ]}
        wrapper="span"
        speed={20}
        style={{ display: "inline-block", color: "#44985a" }}
        repeat={Infinity}
        className="font-bold"
      />
      grow.
    </span>
  );
};

export default Description;
