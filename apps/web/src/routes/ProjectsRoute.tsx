import { Atom } from "@phosphor-icons/react/dist/ssr";
import Contact from "../components/Contact/Contact";
import SectionLineMarquees from "../components/SectionLineMarquees/SectionLineMarquees";
import Work from "../components/Work/Work";
import Mushroom from "../icons/Mushroom";

export default function ProjectsRoute() {
  return (
    <main className="pt-16">
      <Work isIndex />

      <div className="relative -mb-12 -mt-12 z-10">
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
