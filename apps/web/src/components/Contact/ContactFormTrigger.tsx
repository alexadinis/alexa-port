"use client";

import { PaperPlaneTilt, Seal, X } from "@phosphor-icons/react";
import { FormEvent, useRef } from "react";

const ContactFormTrigger = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name}\nEmail: ${email}`,
    );

    dialogRef.current?.close();
    window.location.href = `mailto:alexandra.dn.barbosa@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
        className="group relative flex h-40 w-40 shrink-0 items-center justify-center transition-transform duration-500 ease-out hover:rotate-3 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black motion-reduce:transform-none md:h-48 md:w-48"
      >
        <Seal
          size="100%"
          weight="regular"
          className="absolute inset-0 text-blue transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0"
          aria-hidden="true"
        />
        <Seal
          size="100%"
          weight="fill"
          className="absolute inset-0 text-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
          aria-hidden="true"
        />
        <span className="relative z-10 text-xl font-bold lowercase transition-colors duration-300 group-hover:text-white group-focus-visible:text-white">
          hello
        </span>
        <span className="sr-only">Open contact form</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="contact-dialog-title"
        className="fixed inset-0 m-auto w-[min(680px,calc(100%_-_2rem))] rounded-[16px] bg-white p-0 text-black backdrop:bg-black/75"
      >
        <div className="flex items-center justify-between border-b border-black/15 bg-blue px-6 py-4 text-white md:px-8">
          <p className="font-semibold">Say hello</p>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close contact form"
            className="rounded-full p-2 transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white"
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
              What shall we create?
            </h3>
            <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-black/65">
              Tell me a little about you and the project. Submitting opens the
              message in your email app.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium">
              Name
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                className="rounded-[10px] border border-black/25 px-4 py-3 text-base font-normal outline-none transition-colors focus:border-blue"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium">
              Email
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className="rounded-[10px] border border-black/25 px-4 py-3 text-base font-normal outline-none transition-colors focus:border-blue"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-medium">
            Message
            <textarea
              name="message"
              required
              rows={5}
              className="resize-y rounded-[10px] border border-black/25 px-4 py-3 text-base font-normal outline-none transition-colors focus:border-blue"
            />
          </label>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-full bg-red px-6 py-4 font-semibold text-white transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
          >
            Send by email
            <PaperPlaneTilt size={20} weight="bold" />
          </button>
        </form>
      </dialog>
    </>
  );
};

export default ContactFormTrigger;
