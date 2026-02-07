import {
	BehanceLogo,
	EnvelopeSimple,
	LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Paytone_One } from "next/font/google";
import Image from "next/image";
import Button from "../Button/Button";
import ExperienceSlider from "./ExperienceSlider";

const paytoneOne = Paytone_One({ subsets: ["latin"], weight: ["400"] });

const About = () => {
	return (
		<section className="flex flex-col bg-black w-full overflow-hidden pt-24">
			{/* ── "About me." heading ── */}

			{/* ── Stacked rows ── */}
			<div className="flex flex-col gap-8 md:gap-12 p-8 md:p-16 lg:p-24 lg:pt-12">
				{/* Top row — Photo + info card side by side */}
				<div className="flex flex-col md:flex-row gap-8 md:gap-12">
					{/* Portrait photo (standalone, logo asterisk clip-mask) */}
					<div className="md:w-1/3 shrink-0 flex items-center justify-center">
						{/* Hidden SVG defining the clip path from the navbar logo icon */}
						<svg className="absolute w-0 h-0" aria-hidden="true">
							<defs>
								<clipPath id="logo-clip" clipPathUnits="objectBoundingBox">
									<path
										transform="translate(0.5, 0.5) scale(0.03125) translate(-28.5, -27)"
										d="M41.722 24.223h-6.517l4.608-4.609a2.777 2.777 0 1 0-3.927-3.927l-4.609 4.608v-6.518a2.777 2.777 0 1 0-5.555 0v6.518l-4.608-4.608a2.777 2.777 0 1 0-3.927 3.927l4.608 4.608h-6.518a2.777 2.777 0 1 0 0 5.555h6.518l-4.608 4.609a2.777 2.777 0 1 0 3.927 3.927l4.608-4.608v6.517a2.777 2.777 0 1 0 5.555 0v-6.517l4.609 4.608a2.777 2.777 0 1 0 3.927-3.927l-4.608-4.609h6.517a2.777 2.777 0 1 0 0-5.555Z"
									/>
								</clipPath>
							</defs>
						</svg>
						<Image
							src="/alexandra-barbosa.jpg"
							alt="Alexandra Barbosa"
							width={480}
							height={480}
							className="w-full aspect-square object-cover"
							style={{ clipPath: "url(#logo-clip)" }}
							priority
						/>
					</div>
					<div className="flex flex-col gap-6">
						<h2
							className={`${paytoneOne.className} text-[#fff] text-[48px] md:text-[86px] text-center md:text-left leading-none ml-auto`}
						>
							About me.
						</h2>

						{/* Info card — bio + CV download */}
						<div className="bg-[#fff] rounded-[32px] md:rounded-[48px] p-8 md:p-12 flex flex-col gap-6 flex-1 self-start mt-auto">
							{/* Bio text */}
							<p className="text-black/80 text-base md:text-lg leading-relaxed">
								(Fluent) Speak in memes, dream about design and live to tell
								(learn, share, read &hellip;) great stories. I create authentic
								content, craft effective strategies, and give brands a unique
								voice (with a touch of humor) in the digital world.
							</p>

							{/* CV download section */}
							<div className="flex flex-col gap-3">
								<p className="text-black font-semibold text-base">
									Check the full information.
								</p>
								<a
									href="/alexandra-barbosa-cv.pdf"
									download
									className="self-start"
								>
									<Button
										variant="outline"
										size="md"
										className="border-red text-red hover:bg-red hover:text-[#fff] mt-1"
									>
										download CV
									</Button>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom card — Past experience + social */}
				<div className="bg-[#fff] rounded-[32px] md:rounded-[48px] p-8 md:p-12 flex flex-col gap-6">
					<h3
						className={`${paytoneOne.className} text-black text-3xl md:text-4xl leading-tight`}
					>
						Past experience.
					</h3>
					<p className="text-black/60 text-sm md:text-base leading-relaxed">
						From small businesses to big brands, I develop social media
						strategies, create content, write copy, and manage communities.
					</p>
					<ExperienceSlider />

					{/* Social footer — "Are you looking for me?" */}
					<div className="flex flex-col items-center gap-4 pt-4 border-t border-black/10">
						<p className="text-black font-bold text-lg md:text-xl">
							Are you looking for me?
						</p>

						<div className="flex items-center gap-4">
							<a
								href="mailto:alexandra.dn.barbosa@gmail.com"
								aria-label="Send email"
								className="flex items-center justify-center w-14 h-14 rounded-full bg-red text-[#fff] hover:opacity-90 transition-opacity duration-300"
							>
								<EnvelopeSimple size={24} weight="bold" />
							</a>

							<a
								href="https://behance.net/alexadinis"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Behance profile"
								className="flex items-center justify-center w-14 h-14 rounded-full bg-black text-[#fff] hover:opacity-90 transition-opacity duration-300"
							>
								<BehanceLogo size={24} weight="bold" />
							</a>

							<a
								href="https://linkedin.com/in/alexadinis"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn profile"
								className="flex items-center justify-center w-14 h-14 rounded-full bg-blue text-[#fff] hover:opacity-90 transition-opacity duration-300"
							>
								<LinkedinLogo size={24} weight="bold" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
