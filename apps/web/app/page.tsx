import {
  Atom,
  FireSimple,
  Lightning,
  Planet,
  Seal,
} from "@phosphor-icons/react/dist/ssr";
import About from "../src/components/About/About";
import Contact from "../src/components/Contact/Contact";
import Hero from "../src/components/Hero/Hero";
import SectionLineMarquees from "../src/components/SectionLineMarquees/SectionLineMarquees";
import Work from "../src/components/Work/Work";
import Mushroom from "../src/icons/Mushroom";
import { getLanguage } from "../src/lib/getLanguage";

export default async function Page() {
  const language = await getLanguage();
  return (
    <main>
      <div
        id="home"
        className="relative flex min-h-dvh scroll-mt-20 flex-col items-center justify-center p-4 pt-20 md:p-16 md:pt-28"
      >
        <Hero
          title={
            <>
              {language === "pt" ? "Olá," : "Hello,"} <br />
              {language === "pt" ? (
                <>sou a <span className="text-yellow">Alexa</span>.</>
              ) : (
                <>I&apos;m <span className="text-yellow">Alexa</span>.</>
              )}
            </>
          }
        />
      </div>

      <div className="relative -mt-12 -mb-12 z-10">
        <SectionLineMarquees
          icons={[
            <Seal key="1" className="w-16 h-16 text-black mr-2" />,
            <FireSimple key="2" className="w-16 h-16 text-black mr-2" />,
          ]}
        />
      </div>

      <About />

      <div className="relative -mb-12 -mt-12 z-10">
        <SectionLineMarquees
          lineColors={["bg-red", "bg-pink"]}
          icons={[
            <Lightning key="1" className="mr-2 h-16 w-16 text-black" />,
            <Planet key="2" className="mr-2 h-16 w-16 text-black" />,
          ]}
        />
      </div>

      <Work />

      <div className="relative -mb-12 -mt-12 z-10">
        <SectionLineMarquees
          lineColors={["bg-red", "bg-yellow"]}
          icons={[
            <Atom key="1" className="mr-2 h-16 w-16 text-black" />,
            <Mushroom key="2" className="mr-2 h-16 w-16 text-black" />,
          ]}
        />
      </div>

      <Contact />
    </main>
  );
}
