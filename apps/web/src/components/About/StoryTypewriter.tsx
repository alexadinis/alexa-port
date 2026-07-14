"use client";

import { TypeAnimation } from "react-type-animation";

const StoryTypewriter = () => {
  return (
    <>
      <span className="text-yellow" aria-hidden="true">
        <TypeAnimation
          sequence={["tell", 1600, "learn", 1600, "share", 1600, "read", 1600]}
          wrapper="span"
          speed={24}
          style={{ display: "inline-block" }}
          repeat={Infinity}
        />
      </span>
      <span className="sr-only">tell, learn, share, read</span>
    </>
  );
};

export default StoryTypewriter;
