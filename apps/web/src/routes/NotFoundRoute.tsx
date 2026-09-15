import { Paytone_One } from "next/font/google";
import Link from "next/link";
import WalkingLogo from "../components/Navbar/WalkingLogo";
import { localizeHref, type Language } from "../lib/i18n";

const paytoneOne = Paytone_One({ subsets: ["latin"], weight: ["400"] });

const COPY = {
  pt: {
    title: "ops! não encontramos esta página.",
    description: "A página que procuras não existe.",
    action: "vai para a home :)",
  },
  en: {
    title: "oops! we couldn’t find this page.",
    description: "The page you’re looking for doesn’t exist.",
    action: "go to the homepage :)",
  },
} satisfies Record<Language, Record<string, string>>;

export default function NotFoundRoute({ language }: { language: Language }) {
  const copy = COPY[language];

  return (
    <main
      id="not-found-page"
      className="flex min-h-dvh items-center justify-center overflow-hidden bg-white px-5 pt-24 pb-12 text-black sm:px-8 sm:pt-28 sm:pb-16"
    >
      <div className="flex w-full max-w-4xl flex-col items-center text-center">
        <h1
          className={`${paytoneOne.className} max-w-[18ch] text-balance text-[clamp(2.1rem,3.8vw,3.5rem)] leading-[0.98] tracking-[-0.03em]`}
        >
          {copy.title}
        </h1>

        <div
          className="mt-2 mb-2 text-yellow sm:mt-3 sm:mb-3"
          role="img"
          aria-label={
            language === "pt"
              ? "Logótipo da Alexandra a caminhar com um X no olho"
              : "Alexandra’s logo walking with an X over its eye"
          }
        >
          <WalkingLogo
            showName={false}
            deadEye
            className="items-center justify-center"
            markClassName="h-auto w-[min(82vw,22rem)] sm:w-[min(48vw,30rem)]"
          />
        </div>

        <p className="not-found-message max-w-[34rem] text-balance text-base font-medium text-black/70 sm:text-lg">
          {copy.description}
        </p>

        <Link
          href={localizeHref("/", language)}
          className="mt-6 inline-flex min-h-14 items-center justify-center rounded-full bg-red px-7 py-3 text-base font-semibold text-white transition-[background-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red motion-reduce:transform-none sm:mt-7 sm:px-8 sm:text-lg"
        >
          {copy.action}
        </Link>
      </div>
    </main>
  );
}
