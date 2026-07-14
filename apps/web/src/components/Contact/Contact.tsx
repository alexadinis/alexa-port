import { Paytone_One } from "next/font/google";
import ContactFormTrigger from "./ContactFormTrigger";

const paytoneOne = Paytone_One({ subsets: ["latin"], weight: ["400"] });

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/alexadinis",
  },
  {
    label: "Behance",
    href: "https://behance.net/alexadinis",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/alexadinis",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full scroll-mt-20 overflow-hidden bg-green text-black"
    >
      <div className="mx-auto flex min-h-[82vh] w-full max-w-[1600px] flex-col px-6 pt-24 sm:px-10 md:px-16 md:pt-32 lg:px-24">
        <div className="flex flex-1 flex-col justify-between gap-20 pb-20 md:pb-28">
          <div className="flex flex-col gap-8">
            <p className="max-w-[44ch] text-base leading-relaxed text-black/75 md:text-lg">
              For freelance projects, collaborations or a good conversation
              about content, design and the internet.
            </p>
            <h2
              className={`${paytoneOne.className} text-[clamp(4rem,11vw,6rem)] leading-[0.88] tracking-[-0.03em]`}
            >
              GET IN TOUCH
            </h2>
          </div>

          <div className="grid items-end gap-10 border-t border-black/30 pt-8 md:grid-cols-[minmax(0,1fr)_auto]">
            <div className="flex min-w-0 flex-col gap-5">
              <a
                href="mailto:alexandra.dn.barbosa@gmail.com"
                className="max-w-max text-[clamp(1.75rem,3.6vw,3.5rem)] font-semibold leading-[0.98] tracking-[-0.035em] [overflow-wrap:anywhere] decoration-2 underline-offset-[0.16em] hover:underline"
              >
                alexandra.dn.barbosa@gmail.com
              </a>
              <p className="text-2xl font-medium md:text-4xl">
                +351 000 000 000
              </p>
            </div>
            <ContactFormTrigger />
          </div>
        </div>

        <footer className="grid gap-6 border-t border-black/35 py-6 text-sm sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <p>© {new Date().getFullYear()} alexadinis</p>

          <nav
            aria-label="Social media"
            className="flex flex-wrap gap-x-5 gap-y-2 lg:justify-center"
          >
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 underline-offset-4 transition-opacity hover:opacity-60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="sm:text-right">
            Designed &amp; developed by alexadinis
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
