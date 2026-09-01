import {
  Atom,
  FireSimple,
  Lightning,
  Planet,
  Seal,
} from "@phosphor-icons/react/dist/ssr";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import SectionLineMarquees from "../components/SectionLineMarquees/SectionLineMarquees";
import Work from "../components/Work/Work";
import Mushroom from "../icons/Mushroom";
import type { Language } from "../lib/i18n";

export default function HomeRoute({ language }: { language: Language }) {
  return (
    <main className="overflow-x-clip">
      <div id="home" className="relative scroll-mt-20">
        <Hero
          title={
            language === "pt" ? (
              <>
                Olá, sou a
                <br />
                Alexa.
              </>
            ) : (
              <>
                Hello, I&apos;m
                <br />
                Alexa.
              </>
            )
          }
        />
      </div>

      <div className="relative -mt-12 -mb-12 z-10">
        {/* The hero is a light section now, so the negative-margin gap
            above the band needs the same treatment as the one before
            Contact: extend the light background down into the band. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-white"
        />
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
        {/* The 48px negative-margin gap between sections paints the body
            background (black). Above a light section that puts the colour
            change at the band's top edge instead of its middle, so extend
            Work's light background down to where Contact's black starts. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-white"
        />
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
