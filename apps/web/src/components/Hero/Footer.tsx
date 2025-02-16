"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Button from "../Button/Button";

export default function Footer() {
  return (
    <Button
      size="lg"
      className="flex items-center gap-2 border-red text-red hover:bg-red hover:text-white max-w-[200px] mt-3 group/button"
      onClick={() => {
        window.location.href = "mailto:alexa.dn.barbosa@gmail.com";
      }}
    >
      let&apos;s talk
      <ArrowRight className="opacity-0 w-6 h-6 transition-transform duration-300 group-hover/button:translate-x-10 group-hover/button:opacity-100" />
    </Button>
  );
}
