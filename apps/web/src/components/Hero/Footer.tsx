"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Button from "../Button/Button";

export default function Footer() {
  return (
    <Button
      size="lg"
      className="hero-talk-button group/button mt-3 flex max-w-[200px] items-center gap-2 overflow-hidden border-red text-red hover:bg-red hover:text-white"
      onClick={() => {
        window.location.href = "mailto:alexandra.dn.barbosa@gmail.com";
      }}
    >
      let&apos;s talk
      <ArrowRight className="hero-talk-arrow h-6 w-6" />
    </Button>
  );
}
