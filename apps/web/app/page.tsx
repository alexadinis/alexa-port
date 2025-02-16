import Hero from "../src/components/Hero/Hero";
import { FireSimple, Seal } from "@phosphor-icons/react/dist/ssr";
import SectionLineMarquees from "../src/components/SectionLineMarquees/SectionLineMarquees";
export default function Page() {
  return (
    <main>
      <div className="flex flex-col items-center justify-between h-[calc(100dvh-200px)] p-24">
        <Hero
          title={
            <>
              Hello, <br /> I&apos;m Alexa.
            </>
          }
          description="Combining her communication expertise with a love for design, she crafts brands and content that tell stories and help businesses grow. Cheerful, dedicated, and always ready to go the extra mile."
        />
      </div>
      <SectionLineMarquees
        icons={[
          <Seal key="1" className="w-16 h-16 text-black mr-2" />,
          <FireSimple key="2" className="w-16 h-16 text-black mr-2" />,
        ]}
        colors={["red", "green"]}
      />
    </main>
  );
}
