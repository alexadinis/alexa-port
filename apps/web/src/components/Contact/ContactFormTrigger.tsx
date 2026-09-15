"use client";

import { useLanguage } from "../Language/LanguageProvider";
import ContactBurst from "../../icons/ContactBurst";
import { useContactDialog } from "./ContactDialogProvider";

const ContactFormTrigger = () => {
  const { language } = useLanguage();
  const { openContactDialog } = useContactDialog();

  return (
    <button
      type="button"
      aria-haspopup="dialog"
      aria-controls="contact-dialog"
      onClick={openContactDialog}
      className="group relative flex h-36 w-36 shrink-0 cursor-pointer items-center justify-center text-white transition-transform duration-500 ease-out hover:rotate-3 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink motion-reduce:transform-none md:h-48 md:w-48"
    >
      <ContactBurst
        fill="none"
        stroke="currentColor"
        strokeWidth="32"
        strokeLinejoin="round"
        className="absolute inset-0 size-full text-pink transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0"
      />
      <ContactBurst
        fill="currentColor"
        className="absolute inset-0 size-full text-pink opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
      />
      <span className="relative z-10 w-[56%] text-center text-[0.8rem] font-bold leading-[1.15] text-balance transition-colors duration-300 group-hover:text-black group-focus-visible:text-black md:text-sm">
        {language === "pt" ? "Falamos?" : "Let's talk?"}
      </span>
      <span className="sr-only">
        {language === "pt"
          ? "Abrir formulário de contacto"
          : "Open contact form"}
      </span>
    </button>
  );
};

export default ContactFormTrigger;
