"use client";

import { PaperPlaneTilt, X } from "@phosphor-icons/react";
import { FormEvent, useRef } from "react";
import { useLanguage } from "../Language/LanguageProvider";
import ContactBurst from "../../icons/ContactBurst";

const ContactFormTrigger = () => {
  const { language } = useLanguage();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(language === "pt" ? `Contacto do portefólio — ${name}` : `Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name}\nEmail: ${email}`,
    );

    dialogRef.current?.close();
    window.location.href = `mailto:hello@alexandrabarbosa.pt?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
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
        <span className="sr-only">{language === "pt" ? "Abrir formulário de contacto" : "Open contact form"}</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="contact-dialog-title"
        className="fixed inset-0 m-auto w-[min(680px,calc(100%_-_2rem))] rounded-[16px] bg-white p-0 text-black backdrop:bg-black/75"
      >
        <div className="flex items-center justify-between border-b border-black/15 bg-yellow px-6 py-4 text-black md:px-8">
          <p className="font-semibold">{language === "pt" ? "Conta-me tudo." : "Spill the beans."}</p>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label={language === "pt" ? "Fechar formulário de contacto" : "Close contact form"}
            className="rounded-full p-2 transition-colors hover:bg-black/10 focus-visible:outline-2 focus-visible:outline-black"
          >
            <X size={22} weight="bold" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-7 p-6 md:p-8"
        >
          <div>
            <h3 id="contact-dialog-title" className="text-3xl font-bold">
              {language === "pt" ? "Diz-me o que tens em mente." : "Tell me what's on your mind."}
            </h3>
            <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-black/65">
              {language === "pt" ? "Prometo que este formulário é mais curto do que a maioria." : "I promise this form is shorter than most."}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium">
              {language === "pt" ? "Nome" : "Name"}
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                className="rounded-[10px] border border-black/25 bg-black/[0.03] px-4 py-3 text-base font-normal text-black outline-none transition-colors focus:border-yellow"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium">
              Email
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className="rounded-[10px] border border-black/25 bg-black/[0.03] px-4 py-3 text-base font-normal text-black outline-none transition-colors focus:border-yellow"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-medium">
            {language === "pt" ? "Mensagem" : "Message"}
            <textarea
              name="message"
              required
              rows={5}
              className="resize-y rounded-[10px] border border-black/25 bg-black/[0.03] px-4 py-3 text-base font-normal text-black outline-none transition-colors focus:border-yellow"
            />
          </label>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-full bg-red px-6 py-4 font-semibold text-white transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
          >
            {language === "pt" ? "Enviar mensagem" : "Send the beans"}
            <PaperPlaneTilt size={20} weight="bold" />
          </button>
        </form>
      </dialog>
    </>
  );
};

export default ContactFormTrigger;
