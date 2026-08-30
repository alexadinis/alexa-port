"use client";

import Image from "next/image";
import type { Project } from "../../data/projects";
import { useLanguage } from "../Language/LanguageProvider";
import CrossDissolveVideo from "./CrossDissolveVideo";
import CampaignVideoPlayer from "./CampaignVideoPlayer";
import VideoReels, { type Reel } from "./VideoReels";
import { InstagramPostsGallery, type Post } from "./InstagramPosts";

const FEEL_BETTER_POSTS: Post[] = [
  {
    caption:
      "Hoje é dia Mundial do Cinema e por isso trazemos sugestão de 4 filmes para comemorares este dia e praticares o amor próprio! 🎞 ❤\n\nJá viste algum? Qual é o próximo da lista?",
    slides: [
      { image: "/feel-better/social/cinema-1.jpg" },
      { image: "/feel-better/social/cinema-2.jpg" },
      { image: "/feel-better/social/cinema-3.jpg" },
      { image: "/feel-better/social/cinema-4.jpg" },
      { image: "/feel-better/social/cinema-5.jpg" },
    ],
  },
  {
    caption:
      "Cuidar da pele entre as sessões de depilação a laser é muito simples! Costumas ter estes cuidados? 🥰",
    slides: [
      { image: "/feel-better/social/care-1.jpg" },
      { image: "/feel-better/social/care-2.jpg" },
      { image: "/feel-better/social/care-3.jpg" },
      { image: "/feel-better/social/care-4.jpg" },
    ],
  },
  {
    caption:
      "☀ O cuidado com a exposição solar durante o tratamento de depilação a laser garante resultados seguros e evita danos à pele. Isto não impede que faças o teu tratamento nas épocas de calor, no entanto, é necessário nos dias quentes ter mais cuidados, como o uso regular de protetor solar! Aconselhamos também hidratar a pele regularmente e usar roupas leves após a depilação. ☺️\n💕 Se tiveres alguma dúvida, não hesites em contactar-nos!",
    slides: [
      { image: "/feel-better/social/sun-1.jpg" },
      { image: "/feel-better/social/sun-2.jpg" },
      { image: "/feel-better/social/sun-3.jpg" },
    ],
  },
];

const PSICOMORFOSE_POSTS: Post[] = [
  {
    caption:
      'Muitas das vezes o mais difícil não é mudar, é continuar na mesma.\nAté quando tens de chegar para te começares a priorizares?\n\nQueres escolher um "difícil" diferente, podes começar aqui 👣 link na bio.',
    slides: [
      { image: "/psicomorfose/social/dificil-01.jpg" },
      { image: "/psicomorfose/social/dificil-02.jpg" },
      { image: "/psicomorfose/social/dificil-03.jpg" },
      { image: "/psicomorfose/social/dificil-04.jpg" },
      { image: "/psicomorfose/social/dificil-05.jpg" },
      { image: "/psicomorfose/social/dificil-06.jpg" },
    ],
  },
  {
    caption:
      "Quantas vezes disseste 'sim' quando querias dizer 'não' só para evitar esse sentimento? 🤔 Esse padrão tem raízes 🌱 e pode ser trabalhado! Link na bio para quando estiveres pront@.",
    slides: [
      { image: "/psicomorfose/social/culpa-01.jpg" },
      { image: "/psicomorfose/social/culpa-02.jpg" },
      { image: "/psicomorfose/social/culpa-03.jpg" },
      { image: "/psicomorfose/social/culpa-04.jpg" },
      { image: "/psicomorfose/social/culpa-05.jpg" },
      { image: "/psicomorfose/social/culpa-06.jpg" },
      { image: "/psicomorfose/social/culpa-07.jpg" },
    ],
  },
  {
    caption:
      "🫣 Nem sempre é fácil perceber o que sentes numa relação, especialmente quando existe hábito, medo, esperança ou vontade de que as coisas resultem.\n\nÀs vezes, habituamo-nos a certas dinâmicas que deixamos de nos perguntar como realmente nos sentimos nelas, e aos poucos, começamos a ignorar desconfortos e limites nossos. 〰️\n\nEstas perguntas existem para te ajudar a olhar para a tua relação com maior consciência, honestidade e presença. Compreender o que sentes, faz parte de te cuidares. 💛",
    slides: [
      { image: "/psicomorfose/social/relacao-01.jpg" },
      { image: "/psicomorfose/social/relacao-02.jpg" },
      { image: "/psicomorfose/social/relacao-03.jpg" },
      { image: "/psicomorfose/social/relacao-04.jpg" },
      { image: "/psicomorfose/social/relacao-05.jpg" },
      { image: "/psicomorfose/social/relacao-06.jpg" },
    ],
  },
];

const PSICOMORFOSE_REELS: Reel[] = [
  {
    src: "/psicomorfose/social/reel-pensamento.mp4",
    caption:
      "⚠️ Produtividade não é identidade!\n\n👉 Para muitos de nós, o corpo descansa mas a mente vive em guerra constante.\nIsto chama-se crença limitante, a ideia de que o nosso lugar no mundo depende de quanto fazes, produzes ou és útil.\nO descanso não precisa de ser ganho, nem é uma recompensa. SIMPLESMENTE O MERECES!\n\nSe te identificas, guarda este vídeo para quando a culpa aparecer. 💛",
  },
  {
    src: "/psicomorfose/social/reel-humanos.mp4",
    caption:
      "O psicólogo não é para malucos... é para humanos. 💛\nCuidar da tua mente é o ato mais bondoso e protetor que podes fazer por ti.",
  },
  {
    src: "/psicomorfose/social/reel-terapia.mp4",
    caption:
      "A terapia raramente dá sinais óbvios, simplesmente percebes um dia que já mudaste ✨",
  },
];

const AUTHENTIC_PILATES_POSTS: Post[] = [
  {
    caption:
      "Da origem à tranformação! A história fascinante de como nasceu o Pilates. 🙌\n➡ Nos estúdios Authentic Classical Pilates praticas o verdadeiro e AUTÊNTICO Pilates.\nJá marcou a sua sessão? Vem experimentar! Envia mensagem para mais informação. 📩",
    slides: [1, 2, 3, 4, 5, 6].map((number) => ({
      image: `/authentic-classical-pilates/social/history-${number}.jpg`,
    })),
  },
  {
    caption:
      "Cada sessão de Autêntico Pilates é um passo em direção à sua melhor versão! Sinta-se mais saudável, forte e flexível a cada movimento. 🙌\n➡️ Agende já a sua aula e comece a transformar a sua vida.",
    slides: [1, 2, 3, 4, 5].map((number) => ({
      image: `/authentic-classical-pilates/social/benefits-${number}.jpg`,
    })),
  },
  {
    caption:
      "No Autêntico Método Pilates, seguimos os 6 princípios fundamentais: respiração, concentração, centralização, controle, precisão e fluidez. São a base da nossa prática, relembram-nos da importância da conexão mente-corpo e orientam-nos para uma prática equilibrada, eficaz e autêntica. 😁\n🙌 Desafie-se e aplique estes princípios na próxima sessão. Quer agendar uma aula connosco? Mande mensagem para mais informação.",
    slides: [1, 2, 3, 4, 5, 6].map((number) => ({
      image: `/authentic-classical-pilates/social/principles-${number}.jpg`,
    })),
  },
];

const AUTHENTIC_PILATES_REELS: Reel[] = [
  {
    src: "/authentic-classical-pilates/reels/brand.mp4",
    caption:
      "Dedicados ao Pilates Autêntico há mais de 20 anos, melhoramos a qualidade de vida de todos os que confiam em nós através da “Arte e Ciência da Contrologia”. 🤗\n\nInspiramos uma geração de formandos, que depositaram em nós a confiança para aprenderem e aperfeiçoarem a sua técnica, em que muitos deles, atualmente, gerem os seus estúdios.\n\n➡️ Desde 1998, aperfeiçoamos o Autêntico Pilates ou Contrologia, sendo este o verdadeiro nome entregue ao Método pelo seu criador Joseph Pilates, em estúdios dedicados e equipados com todos os aparelhos originais, elevando a experiência do método.",
  },
  {
    src: "/authentic-classical-pilates/reels/individual-sessions.mp4",
    caption:
      "Entregamos os exercícios certos para corresponder às suas necessidades, condição física e possíveis patologias/lesões, garantindo uma sessão eficaz que o fará progredir no Método, deixando o seu corpo, no final de cada sessão, completamente revitalizado. 🙌\n\nSessões de Pilates Autêntico à medida de cada indivíduo. Desde os 10 aos 90 e mais anos, grávidas, atletas, bailarinos profissionais, onde cada sessão é desenhada com a máxima dedicação e acompanhamento.\n\nMelhoramos a qualidade de vida de todos os que confiam em nós através da “Arte e Ciência da Contrologia”.\n\n➡️Já marcou a sua sessão? Venha experimentar! Envie mensagem para mais informação. 📩",
  },
  {
    src: "/authentic-classical-pilates/reels/porto-studio.mp4",
    caption:
      "Com uma história que remonta a 2006, o Authentic Classical Pilates Studio no Porto é uma referência nacional e internacional no ensino e passagem do legado de Joseph H. Pilates. 🙌\n\nNo nosso estúdio, o autêntico e a qualidade convergem para criar uma experiência excepcional. Conta com todos os aparelhos pelo fabricante original americano, fabricados artesanalmente ainda hoje e que fazem toda a diferença na prática autêntica do Método.",
  },
];

export default function ProjectVisualStory({ project }: { project: Project }) {
  const { language } = useLanguage();
  const images = project.galleryImages?.length
    ? project.galleryImages
    : [project.image];
  const getImage = (index: number) => images[index % images.length]!;

  if (project.slug === "kfc-portugal") {
    return (
      <>
        <section
          aria-label="KFC Portugal project gallery"
          className="grid gap-5 pb-8 sm:grid-cols-2 md:pb-16 lg:grid-cols-3"
        >
          {images.slice(0, 3).map((image, index) => (
            <div
              key={image}
              className={`relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/5 ${index === 2 ? "sm:col-span-2 sm:aspect-[8/5] lg:col-span-1 lg:aspect-[4/5]" : ""}`}
            >
              <Image
                src={image}
                alt={`KFC Portugal visual ${index + 1}`}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </section>

        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={getImage(3)}
            alt="KFC Portugal social media content showcase"
            fill
            sizes="(max-width: 1600px) 100vw, 1400px"
            className="object-cover"
          />
        </div>

        <section aria-label="Project reflection" className="py-16 md:py-24">
          <div className="max-w-[46rem] md:ml-auto md:w-[65%]">
            <p className="text-pretty text-[clamp(1.05rem,1.5vw,1.4rem)] leading-[1.55] tracking-[-0.015em]">
              {project.reflection}
            </p>
          </div>
        </section>

        <div className="relative aspect-video w-full overflow-hidden bg-[#202020]">
          <Image
            src={getImage(4)}
            alt="KFC Portugal final project showcase"
            fill
            sizes="(max-width: 1600px) 100vw, 1400px"
            className="object-contain"
          />
        </div>
      </>
    );
  }

  if (project.slug === "munchie") {
    return (
      <>
        {images.slice(0, 4).map((image, index) => (
          <div
            key={image}
            className={`relative w-full overflow-hidden ${
              index === 0 ? "aspect-[1400/2401]" : "aspect-[1400/1001]"
            }`}
          >
            <Image
              src={image}
              alt={`Munchie social media showcase ${index + 1}`}
              fill
              sizes="(max-width: 1600px) 100vw, 1400px"
              className="object-cover"
            />
          </div>
        ))}

        <section aria-label="Project reflection" className="py-16 md:py-24">
          <div className="max-w-[46rem] md:ml-auto md:w-[65%]">
            <p className="text-pretty text-[clamp(1.05rem,1.5vw,1.4rem)] leading-[1.55] tracking-[-0.015em]">
              {project.reflection}
            </p>
          </div>
        </section>

        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={getImage(4)}
            alt="Munchie final social media showcase"
            fill
            sizes="(max-width: 1600px) 100vw, 1400px"
            className="object-contain"
          />
        </div>
      </>
    );
  }

  if (project.slug === "padaria-alianca") {
    return (
      <section
        aria-label="Padaria Aliança social media project showcase"
        className="space-y-5"
      >
        {images.slice(0, 2).map((image, index) => (
          <div
            key={image}
            className="relative aspect-video w-full overflow-hidden"
          >
            <Image
              src={image}
              alt={
                index === 0
                  ? "Padaria Aliança Instagram content mockups"
                  : "Padaria Aliança social media content grid"
              }
              fill
              quality={95}
              unoptimized
              sizes="(max-width: 1600px) 100vw, 1400px"
              className="object-contain"
            />
          </div>
        ))}

        <section aria-label="Project reflection" className="py-16 md:py-24">
          <div className="max-w-[46rem] md:ml-auto md:w-[65%]">
            <p className="text-pretty text-[clamp(1.05rem,1.5vw,1.4rem)] leading-[1.55] tracking-[-0.015em]">
              {project.reflection}
            </p>
          </div>
        </section>

        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={getImage(2)}
            alt="Padaria Aliança final social media project showcase"
            fill
            quality={95}
            unoptimized
            sizes="(max-width: 1600px) 100vw, 1400px"
            className="object-cover"
          />
        </div>
      </section>
    );
  }

  if (project.slug === "authentic-classical-pilates") {
    return (
      <>
        <CampaignVideoPlayer
          src="/authentic-classical-pilates/campaign-film.mp4"
          poster="/authentic-classical-pilates/campaign-poster.png"
          title="Authentic Classical Pilates campaign film"
        />

        <section
          aria-label={
            language === "pt"
              ? "Sobre a campanha de vídeo"
              : "About the video campaign"
          }
          className="py-16 md:py-24"
        >
          <div className="max-w-[46rem] md:ml-auto md:w-[65%]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-pink">
              {language === "pt"
                ? "Sobre a campanha de vídeo"
                : "About the video campaign"}
            </p>
            <p className="whitespace-pre-line text-pretty text-[clamp(1.05rem,1.5vw,1.4rem)] font-normal leading-[1.55] tracking-[-0.015em]">
              {project.videoCampaignText}
            </p>
          </div>
        </section>

        <InstagramPostsGallery
          posts={AUTHENTIC_PILATES_POSTS}
          accountName="authenticclassicalpilates"
          location="Porto · Paredes"
          profileImage="/authentic-classical-pilates/social/profile.jpg"
          imageAltPrefix="Authentic Classical Pilates"
          ringColor="#b28a65"
          ariaLabel="Authentic Classical Pilates carousel posts"
        />

        <div className="pb-8 md:pb-16">
          <VideoReels
            reels={AUTHENTIC_PILATES_REELS}
            accountName="authenticclassicalpilates"
            location="Porto · Paredes"
            profileImage="/authentic-classical-pilates/social/profile.jpg"
            imageAltPrefix="Authentic Classical Pilates"
            ringColor="#b28a65"
            ariaLabel="Authentic Classical Pilates video reels"
          />
        </div>

        <section aria-label="Project reflection" className="py-16 md:py-24">
          <div className="max-w-[46rem] md:ml-auto md:w-[65%]">
            <p className="text-pretty text-[clamp(1.05rem,1.5vw,1.4rem)] leading-[1.55] tracking-[-0.015em]">
              {project.reflection}
            </p>
          </div>
        </section>

        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src="/authentic-classical-pilates/final.webp"
            alt="Authentic Classical Pilates final social media showcase"
            fill
            quality={95}
            sizes="(max-width: 1600px) 100vw, 1400px"
            className="object-cover"
          />
        </div>
      </>
    );
  }

  if (project.slug === "psicomorfose-psicologia") {
    return (
      <>
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src="/psicomorfose/project-intro.webp"
            alt="Psicomorfose visual identity in a natural setting"
            fill
            sizes="(max-width: 1600px) 100vw, 1400px"
            className="object-cover"
          />
        </div>

        <section
          aria-label="Psicomorfose image and future video showcase"
          className="grid gap-5 pt-5 sm:grid-cols-2"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-[#aa4127]">
            <CrossDissolveVideo
              src="/psicomorfose/logo-explanation.mp4"
              poster="/psicomorfose/logo-explanation-poster.webp"
              alt="Psicomorfose logo concept explanation"
            />
          </div>

          <div className="relative aspect-[4/5] overflow-hidden bg-[#aa4127]">
            <Image
              src="/psicomorfose/project-column-image.webp"
              alt="Psicomorfose brand pattern"
              fill
              sizes="(max-width: 639px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </section>

        <section aria-label="Branding" className="py-16 md:py-24">
          <div className="max-w-[46rem] md:ml-auto md:w-[65%]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-pink">
              Branding
            </p>
            <p className="whitespace-pre-line text-pretty text-[clamp(1.05rem,1.5vw,1.4rem)] leading-[1.55] tracking-[-0.015em]">
              {project.brandingText}
            </p>
          </div>
        </section>

        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src="/psicomorfose/stationery-showcase.webp"
            alt="Psicomorfose stationery and brand applications"
            fill
            quality={95}
            sizes="(max-width: 1600px) 100vw, 1400px"
            className="object-contain"
          />
        </div>

        <section
          aria-label="Psicomorfose printed brand applications"
          className="grid gap-5 pt-5 sm:grid-cols-2"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/psicomorfose/notebooks-showcase.webp"
              alt="Psicomorfose branded notebooks"
              fill
              quality={95}
              sizes="(max-width: 639px) 100vw, 50vw"
              className="object-contain"
            />
          </div>

          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/psicomorfose/business-cards-showcase.webp"
              alt="Psicomorfose business cards"
              fill
              quality={95}
              sizes="(max-width: 639px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </section>

        <section aria-label="Social media" className="py-16 md:py-24">
          <div className="max-w-[46rem] md:ml-auto md:w-[65%]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-pink">
              {language === "pt" ? "Redes sociais" : "Social media"}
            </p>
            <p className="whitespace-pre-line text-pretty text-[clamp(1.05rem,1.5vw,1.4rem)] leading-[1.55] tracking-[-0.015em]">
              {project.socialMediaText}
            </p>
          </div>
        </section>

        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src="/psicomorfose/social-media-showcase.webp"
            alt="Psicomorfose social media content showcase"
            fill
            quality={95}
            sizes="(max-width: 1600px) 100vw, 1400px"
            className="object-contain"
          />
        </div>

        <div className="pt-16 md:pt-24">
          <InstagramPostsGallery
            posts={PSICOMORFOSE_POSTS}
            accountName="psicomorfose.pt"
            location="Psicomorfose - Psicologia Clínica"
            profileImage="/psicomorfose/social/profile.jpg"
            imageAltPrefix="Psicomorfose"
            ringColor="#eabd6a"
            ariaLabel="Psicomorfose social media carousel posts"
            mediaAspectRatio="portrait"
          />
        </div>

        <div className="pb-8 md:pb-16">
          <VideoReels
            reels={PSICOMORFOSE_REELS}
            accountName="psicomorfose.pt"
            location="Psicomorfose - Psicologia Clínica"
            profileImage="/psicomorfose/social/profile.jpg"
            imageAltPrefix="Psicomorfose"
            ringColor="#eabd6a"
            ariaLabel="Psicomorfose video reels"
          />
        </div>

        <section
          aria-label="Psicomorfose final reflection"
          className="py-16 md:py-24"
        >
          <p className="max-w-[46rem] text-pretty text-[clamp(1.05rem,1.5vw,1.4rem)] leading-[1.55] tracking-[-0.015em] md:ml-auto md:w-[65%]">
            {project.reflection}
          </p>
        </section>

        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src="/psicomorfose/final-showcase.webp"
            alt="Psicomorfose final social media project showcase"
            fill
            quality={95}
            sizes="(max-width: 1600px) 100vw, 1400px"
            className="object-contain"
          />
        </div>
      </>
    );
  }

  if (project.slug === "lr-opticas") {
    const squareImages = [
      "/lr-opticas/grid-01.gif",
      "/lr-opticas/grid-02.jpg",
      "/lr-opticas/grid-03.jpg",
      "/lr-opticas/grid-04.png",
      "/lr-opticas/grid-05.jpg",
    ];
    const portraitImages = [
      "/lr-opticas/grid-06.jpg",
      "/lr-opticas/grid-07.jpg",
      "/lr-opticas/grid-08.jpg",
    ];

    return (
      <>
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src="/lr-opticas/middle.jpg"
            alt="L&R Ópticas social media campaign showcase"
            fill
            sizes="(max-width: 1600px) 100vw, 1400px"
            className="object-cover"
          />
        </div>

        <section
          aria-label="L&R Ópticas content gallery"
          className="py-16 md:py-24"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-5">
            {squareImages.map((image, index) => (
              <div
                key={`square-${index}`}
                className="relative aspect-square overflow-hidden rounded-2xl bg-white/5"
              >
                {image ? (
                  <Image
                    src={image}
                    alt={`L&R Ópticas square content ${index + 1}`}
                    fill
                    sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 20vw"
                    className="object-cover"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-medium uppercase tracking-[0.12em] text-white/35">
                    Image {index + 1}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 sm:mt-5 sm:grid-cols-3 sm:gap-5">
            {portraitImages.map((image, index) => (
              <div
                key={`portrait-${index}`}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/5"
              >
                <Image
                  src={image}
                  alt={`L&R Ópticas portrait content ${index + 6}`}
                  fill
                  sizes="(max-width: 639px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section aria-label="Project reflection" className="pb-16 md:pb-24">
          <div className="max-w-[46rem] md:ml-auto md:w-[65%]">
            <p className="text-pretty text-[clamp(1.05rem,1.5vw,1.4rem)] leading-[1.55] tracking-[-0.015em]">
              {project.reflection}
            </p>
          </div>
        </section>

        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src="/lr-opticas/final.webp"
            alt="L&R Ópticas final project showcase"
            fill
            sizes="(max-width: 1600px) 100vw, 1400px"
            className="object-cover"
          />
        </div>
      </>
    );
  }

  if (project.slug === "feel-better") {
    const showcaseImages = [
      "/feel-better/showcase-02.webp",
      "/feel-better/showcase-03.webp",
      "/feel-better/showcase-04.webp",
      "/feel-better/showcase-05.webp",
    ];

    return (
      <>
        {showcaseImages.map((image, index) => (
          <div
            key={image}
            className="relative aspect-video w-full overflow-hidden"
          >
            <Image
              src={image}
              alt={`Feel Better social media showcase ${index + 1}`}
              fill
              unoptimized
              sizes="(max-width: 1600px) 100vw, 1400px"
              className="object-cover"
            />
          </div>
        ))}

        <div className="pt-16 md:pt-24">
          <InstagramPostsGallery
            posts={FEEL_BETTER_POSTS}
            accountName="feelbetter_byjoanapereira"
            location="Feel Better Estética"
            profileImage="/feel-better/social/profile.jpg"
            imageAltPrefix="Feel Better"
            ringColor="#ef898a"
            ariaLabel="Feel Better social media posts"
          />
        </div>

        <section aria-label="Project reflection" className="pb-16 md:pb-24">
          <div className="max-w-[46rem] md:ml-auto md:w-[65%]">
            <p className="text-pretty text-[clamp(1.05rem,1.5vw,1.4rem)] leading-[1.55] tracking-[-0.015em]">
              {project.reflection}
            </p>
          </div>
        </section>

        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src="/feel-better/final.webp"
            alt="Feel Better final project showcase"
            fill
            unoptimized
            sizes="(max-width: 1600px) 100vw, 1400px"
            className="object-cover"
          />
        </div>
      </>
    );
  }

  if (project.slug === "cockburns") {
    return (
      <>
        <section
          aria-label="Cockburn's social media project gallery"
          className="grid gap-5 pb-5 sm:grid-cols-2"
        >
          {images.slice(0, 2).map((image, index) => (
            <div
              key={image}
              className="relative aspect-[4/5] overflow-hidden bg-[#202020]"
            >
              <Image
                src={image}
                alt={`Cockburn's social media visual ${index + 1}`}
                fill
                quality={95}
                sizes="(max-width: 639px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </section>

        <section
          aria-label="Cockburn's community management highlights"
          className="grid gap-5 sm:grid-cols-2"
        >
          {images.slice(2, 4).map((image, index) => (
            <div
              key={image}
              className="relative aspect-[4/5] overflow-hidden bg-[#202020]"
            >
              <Image
                src={image}
                alt={`Cockburn's community highlight ${index + 1}`}
                fill
                quality={95}
                sizes="(max-width: 639px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </section>

        <section aria-label="Project reflection" className="py-16 md:py-24">
          <div className="max-w-[46rem] md:ml-auto md:w-[65%]">
            <p className="text-pretty text-[clamp(1.05rem,1.5vw,1.4rem)] leading-[1.55] tracking-[-0.015em]">
              {project.reflection}
            </p>
          </div>
        </section>

        <div className="relative aspect-video w-full overflow-hidden bg-[#303030]">
          <Image
            src={getImage(4)}
            alt="Cockburn's final social media project showcase"
            fill
            quality={95}
            sizes="(max-width: 1600px) 100vw, 1400px"
            className="object-cover"
          />
        </div>
      </>
    );
  }

  return (
    <>
      <section
        aria-label={`${project.title} project gallery`}
        className="grid gap-5 pb-8 sm:grid-cols-2 md:pb-16 lg:grid-cols-3"
      >
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`relative aspect-square overflow-hidden rounded-2xl bg-white/5 ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
          >
            <Image
              src={getImage(index)}
              alt={`${project.title} visual ${index + 1}`}
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </section>

      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={getImage(3)}
          alt={`${project.title} campaign showcase`}
          fill
          sizes="(max-width: 1600px) 100vw, 1400px"
          className="object-cover"
        />
      </div>

      {project.storyText && (
        <div className="py-16 md:py-24">
          <p className="max-w-[46rem] text-pretty text-[clamp(1.05rem,1.5vw,1.4rem)] leading-[1.55] tracking-[-0.015em] md:ml-auto md:w-[65%]">
            {project.storyText}
          </p>
        </div>
      )}

      <section
        aria-label={`${project.title} vertical content`}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {[4, 5, 6].map((index) => (
          <div
            key={index}
            className={`relative aspect-[9/16] overflow-hidden rounded-2xl bg-white/5 ${index === 6 ? "sm:col-span-2 sm:aspect-video lg:col-span-1 lg:aspect-[9/16]" : ""}`}
          >
            <Image
              src={getImage(index)}
              alt={`${project.title} content piece ${index - 3}`}
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </section>

      <section aria-label="Project reflection" className="py-16 md:py-24">
        <div className="max-w-[46rem] md:ml-auto md:w-[65%]">
          <p className="text-pretty text-[clamp(1.05rem,1.5vw,1.4rem)] leading-[1.55] tracking-[-0.015em]">
            {project.reflection ?? project.summary}
          </p>
        </div>
      </section>

      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={getImage(7)}
          alt={`${project.title} final project showcase`}
          fill
          sizes="(max-width: 1600px) 100vw, 1400px"
          className="object-cover"
        />
      </div>
    </>
  );
}
