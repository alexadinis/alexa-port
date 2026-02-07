import {
	FireSimple,
	Lightning,
	Planet,
	Seal,
} from "@phosphor-icons/react/dist/ssr";
import About from "../src/components/About/About";
import Hero from "../src/components/Hero/Hero";
import SectionLineMarquees from "../src/components/SectionLineMarquees/SectionLineMarquees";
import Work from "../src/components/Work/Work";

export default function Page() {
	return (
		<main>
			<div className="flex flex-col items-center justify-center h-[calc(100dvh-90px)] p-4 md:p-16 relative">
				<Hero
					title={
						<>
							Hello, <br /> I&apos;m Alexa.
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

			<Work />

			<div className="relative -mt-12 -mb-12 z-10">
				<SectionLineMarquees
					icons={[
						<Lightning key="1" className="w-16 h-16 text-black mr-2" />,
						<Planet key="2" className="w-16 h-16 text-black mr-2" />,
					]}
				/>
			</div>

			<About />
		</main>
	);
}
