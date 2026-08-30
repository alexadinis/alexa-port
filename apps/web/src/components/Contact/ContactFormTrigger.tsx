"use client";

import { Copy, PaperPlaneTilt, X } from "@phosphor-icons/react";
import { FormEvent, useRef, useState } from "react";
import { useLanguage } from "../Language/LanguageProvider";
import ContactBurst from "../../icons/ContactBurst";

const CONTACT_EMAIL = "hello@alexandrabarbosa.pt";

const ContactFormTrigger = () => {
  const { language } = useLanguage();
  const dialogRef = useRef<HTMLDialogElement>(null);
  // `mailto:` does nothing when no mail client is registered, which is common
  // on desktop. Swap the form for a hand-off screen instead of closing, so a
  // silent failure cannot be mistaken for a message that was sent.
  const [handoff, setHandoff] = useState<{ href: string; text: string } | null>(
    null,
  );
  const [copied, setCopied] = useState<"email" | "message" | null>(null);

  const copyValue = async (value: string, which: "email" | "message") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(which);
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      // Clipboard access can be denied; the text stays selectable on screen.
    }
  };

  const closeDialog = () => {
    dialogRef.current?.close();
    setHandoff(null);
    setCopied(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = language === "pt" ? `Contacto do portefólio — ${name}` : `Portfolio enquiry from ${name}`;
    const body = `${message}\n\nFrom: ${name}\nEmail: ${email}`;
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setHandoff({ href, text: `${subject}\n\n${body}` });
    window.location.href = href;
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
            onClick={closeDialog}
            aria-label={language === "pt" ? "Fechar formulário de contacto" : "Close contact form"}
            className="rounded-full p-2 transition-colors hover:bg-black/10 focus-visible:outline-2 focus-visible:outline-black"
          >
            <X size={22} weight="bold" />
          </button>
        </div>

        {handoff ? (
          <div className="flex flex-col gap-6 p-6 md:p-8">
            <div>
              <h3 id="contact-dialog-title" className="text-3xl font-bold">
                {language === "pt" ? "Abri o teu email." : "I opened your email."}
              </h3>
              <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-black/65">
                {language === "pt"
                  ? "A mensagem já vai preenchida — só tens de carregar em enviar. Se não abriu nada, o teu computador não tem email configurado: copia a mensagem e envia-a a partir do sítio onde costumas escrever."
                  : "The message is already filled in — you just need to hit send. If nothing opened, your computer has no mail app set up: copy the message and send it from wherever you normally write email."}
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-[10px] border border-black/20 bg-black/[0.03] p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-base font-semibold break-all">{CONTACT_EMAIL}</span>
                <button
                  type="button"
                  onClick={() => copyValue(CONTACT_EMAIL, "email")}
                  className="inline-flex items-center gap-2 rounded-full border border-black/25 px-4 py-2 text-sm font-medium transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <Copy size={16} weight="bold" />
                  {copied === "email"
                    ? language === "pt" ? "Copiado" : "Copied"
                    : language === "pt" ? "Copiar email" : "Copy email"}
                </button>
              </div>
              <button
                type="button"
                onClick={() => copyValue(handoff.text, "message")}
                className="self-start text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                {copied === "message"
                  ? language === "pt" ? "Mensagem copiada" : "Message copied"
                  : language === "pt" ? "Copiar a mensagem" : "Copy the message"}
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={handoff.href}
                className="flex items-center justify-center gap-2 rounded-full bg-red px-6 py-4 font-semibold text-white transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
              >
                {language === "pt" ? "Tentar abrir outra vez" : "Try opening it again"}
                <PaperPlaneTilt size={20} weight="bold" />
              </a>
              <button
                type="button"
                onClick={closeDialog}
                className="rounded-full border border-black/25 px-6 py-4 font-semibold transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                {language === "pt" ? "Fechar" : "Close"}
              </button>
            </div>
          </div>
        ) : (
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
        )}
      </dialog>
    </>
  );
};

export default ContactFormTrigger;
