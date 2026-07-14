import { Paytone_One } from "next/font/google";
import Image from "next/image";
import BrandsMarquee from "./BrandsMarquee";
import StoryTypewriter from "./StoryTypewriter";

const paytoneOne = Paytone_One({ subsets: ["latin"], weight: ["400"] });

const ABOUT_DETAILS = [
  { label: "Name", value: "Alexandra Barbosa" },
  { label: "Focus", value: "Social media & design" },
  { label: "Status", value: "Freelance" },
  { label: "Based in", value: "Porto, Portugal" },
];

const About = () => {
  return (
    <section
      id="about"
      className="flex w-full scroll-mt-20 flex-col overflow-hidden bg-black text-white"
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-12 px-6 pb-16 pt-24 sm:px-10 md:gap-16 md:px-16 md:pt-32 lg:px-24">
        <h2
          className={`${paytoneOne.className} max-w-max text-[clamp(3.5rem,8vw,6rem)] leading-none tracking-[-0.03em]`}
        >
          About me.
        </h2>

        <dl className="grid grid-cols-1 border-y border-white/25 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_DETAILS.map((detail) => (
            <div
              key={detail.label}
              className="flex flex-col gap-2 border-white/25 px-6 py-5 sm:[&:nth-child(2)]:border-l sm:[&:nth-child(n+3)]:border-t lg:border-l lg:border-t-0 lg:first:border-l-0"
            >
              <dt className="text-sm font-medium text-white/70">
                {detail.label}
              </dt>
              <dd className="text-lg font-medium leading-snug text-white md:text-xl">
                {detail.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="grid items-stretch gap-8 md:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)] md:gap-12 lg:gap-16">
          <div className="relative aspect-[4/5] w-full max-w-[340px] overflow-hidden md:aspect-auto md:h-full md:max-w-none">
            <Image
              src="/alexandra-barbosa.jpg"
              alt="Alexandra Barbosa in profile"
              fill
              sizes="(max-width: 767px) 340px, 40vw"
              className="object-cover object-[50%_48%]"
              priority
            />
          </div>

          <div className="flex min-w-0 flex-col items-start gap-8">
            <p className="max-w-[24ch] text-pretty text-[clamp(1.8rem,3.4vw,4rem)] font-medium leading-[1.08] tracking-[-0.035em]">
              Fluent in memes, dream about design and live to{" "}
              <StoryTypewriter /> great stories. I create authentic content,
              craft effective strategies, and give brands a unique voice in the
              digital world.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/alexandra-barbosa-cv.pdf"
                download
                className="about-action-button about-action-button--red inline-flex items-center justify-center rounded-full border-2 px-6 py-4 text-base font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
              >
                download CV
              </a>
              <a
                href="https://www.behance.net/alexadinis"
                target="_blank"
                rel="noreferrer"
                className="about-action-button about-action-button--green inline-flex items-center justify-center rounded-full border-2 px-6 py-4 text-base font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#44985a]"
              >
                behance
              </a>
              <a
                href="https://www.linkedin.com/in/alexadinis"
                target="_blank"
                rel="noreferrer"
                className="about-action-button about-action-button--blue inline-flex items-center justify-center rounded-full border-2 px-6 py-4 text-base font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3476ee]"
              >
                linkedin
              </a>
            </div>
          </div>
        </div>

      </div>

      <BrandsMarquee />
    </section>
  );
};

export default About;
