export interface Project {
  slug: string;
  title: string;
  summary: string;
  intro?: string;
  client?: string;
  creditClient?: string;
  clientUrl?: string;
  developedAt?: string;
  creditWork?: string;
  agencyUrl?: string;
  visualCredit?: string;
  visualCreditLabel?: string;
  visualCreditUrl?: string;
  credits?: {
    label: string;
    value: string;
    links?: { text: string; url: string }[];
  }[];
  year?: string;
  galleryImages?: string[];
  storyText?: string;
  brandingText?: string;
  socialMediaText?: string;
  videoCampaignText?: string;
  reflection?: string;
  detailImage?: string;
  detailVideo?: string;
  description?: string;
  /** Hand-written SERP snippet, kept under 160 chars. */
  metaDescription?: string;
  image: string;
  thumbnail?: string;
  relatedThumbnail?: string;
  focus: string;
  services: string[];
  accent: string;
  /**
   * When this case study's copy last changed, for sitemap `lastmod`. Bump it
   * when the copy changes, not when the file happens to be touched.
   */
  updatedAt: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "endesa-portugal",
    metaDescription:
      "Social media strategy for Endesa Portugal that doubled reach and impressions on Facebook and Instagram in 11 months. Case study by Alexandra Barbosa.",
    title: "Endesa Portugal",
    summary:
      "Where energy meets creativity.\nPowering up Endesa's social media. ⚡",
    intro:
      "Creating content that reflected Endesa’s forward-thinking values, making energy feel exciting, accessible and relevant to everyday consumers.",
    client: "Endesa",
    developedAt: "legendary.pt",
    visualCredit: "Michael Altomani",
    visualCreditLabel: "Made the static visuals look good",
    visualCreditUrl: "https://www.behance.net/altomani",
    year: "2024/2025",
    detailImage: "/endesa-banner.webp",
    description:
      "Endesa Portugal is a leader in the energy sector, with a strong commitment to innovation and sustainability. My goal? To bring that commitment to life on social media across Instagram and Facebook.\n\nI developed and implemented a strategy that doubled impressions and reach (+100%) in just 8 months, across both Facebook and Instagram.\n\nThe focus? Creating content that reflected Endesa’s forward-thinking values while presenting energy in an engaging, accessible and relevant way, connecting the brand with consumers in their everyday lives.",
    image: "/endesa.webp",
    thumbnail: "/endesa-home-showcase.webp",
    relatedThumbnail: "/endesa-related-work.webp",
    focus: "Social media & content",
    services: [
      "Social Media Management",
      "Copywriting",
      "Video Content Creation",
      "Community Management",
      "Paid Media",
      "Analytics & Reporting",
    ],
    accent: "#f4c755",
    updatedAt: "2026-08-30T11:24:16+01:00",
  },
  {
    slug: "kfc-portugal",
    metaDescription:
      "Meme-first social media for KFC Portugal as Colonel Sanders: +40% Instagram engagement and 268K TikTok followers grown organically in 8 months.",
    title: "KFC Portugal",
    summary:
      "Serving up crispy content for KFC Portugal's social media as Colonel Sanders. 🍗",
    intro: "When fried chicken meets meme culture, engagement follows.",
    client: "KFC Portugal",
    developedAt: "legendary.pt",
    visualCredit: "Michael Altomani",
    visualCreditLabel: "Designer",
    visualCreditUrl: "https://www.behance.net/altomani",
    year: "2024/2025",
    description:
      "For 11 months, I stepped into the legendary white suit and gave Colonel Sanders a digital voice in Portugal across Instagram, Facebook, TikTok and X.\n\nThe mission? To make KFC the most engaging fast-food brand on social media. The strategy? A meme-first approach, tailored to each platform and its audience.\n\nOn Instagram, engagement increased by 40% in just six months.\n\nOn TikTok, it was about more than simply showing up. It was about owning the space. KFC Portugal became the brand with the highest engagement on TikTok in Portugal, while growing organically by more than 268,000 followers in just 8 months.\n\nA big part of the work involved keeping a close eye on what was happening online and spotting when a trend could become an opportunity for KFC. Memes, current events, pop culture, everyday references, community comments and interactions with other brands all became creative fuel for content that was fast, relevant and full of personality.\n\nMore than simply jumping on trends, the creative challenge was to make them feel naturally KFC. Because jumping on a trend is easy. Jumping on a trend and making it feel like Colonel Sanders was in on it from the very beginning? That's the spicy part.\n\nAll while cooking up content designed to make people laugh, crave and engage, with that unmistakable finger lickin’ good flavour.",
    reflection: "Because the internet runs on memes and KFC had a lot to say.",
    image: "/placeholder.jpg",
    thumbnail: "/kfc/kfc-home-showcase.webp",
    relatedThumbnail: "/kfc/kfc-related-work.webp",
    detailImage: "/kfc/kfc-banner.webp",
    galleryImages: [
      "/kfc/kfc-gallery-01.webp",
      "/kfc/kfc-gallery-02.webp",
      "/kfc/kfc-gallery-03.webp",
      "/kfc/kfc-gallery-04.webp",
      "/kfc/kfc-final-showcase.webp",
    ],
    focus: "Social media & content",
    services: [
      "Social Media Management",
      "Copywritting",
      "Community Management",
      "Analytics & Reporting",
      "Content Ideation",
    ],
    accent: "#e84e3c",
    updatedAt: "2026-09-01T14:00:00+01:00",
  },
  {
    slug: "padaria-alianca",
    metaDescription:
      "Content strategy, photography and video for Padaria Aliança, a Porto bakery: fresh bread, real pastries and visuals that do the talking.",
    title: "Padaria Aliança",
    summary: "Fresh out of the oven, straight into the feed. 🥐",
    intro: "Some things are better homemade. Like everything here.",
    client: "Padaria Aliança",
    developedAt: "anca design studio",
    year: "2021 / 2022",
    description:
      "Padaria Aliança is built around one idea: bringing Portugal's most traditional flavours to everyone who walks through the door. It's a place where time slows down, with the smell of freshly baked bread, real pastry, and the simple pleasure of eating well.\n\nThe challenge, back in 2022, was clear: the bakery had little online presence, with low-quality images and generic content that didn't do justice to what was actually happening inside. I was responsible for content strategy, photography, and video, with the goal of capturing what makes Padaria Aliança different: everything is made fresh, every single day.\n\nThe core creative decision was to show the baking process itself, not just the finished product: video and photography following the treats from oven to counter, with close-ups of warm bread and rising steam. To give the communication personality, I created a recurring format built around wordplay with the names of the pastries, bringing the brand's language closer to its everyday audience: playful, approachable, and never corporate. Content was distributed mainly through carousels and static posts, complemented by a few Reels, still an emerging format at the time.\n\nResults showed up most clearly during festive seasons: by promoting special packages for Easter, Christmas, Mother's Day, and Valentine's Day, Padaria Aliança saw an increase in orders during these periods, confirming that thoughtful, visually crafted content translates into sales, not just engagement.\n\nPadaria Aliança was left with a digital presence that reflects what makes it special: Portuguese tradition, made fresh every day, with a voice as warm and full of flavour as the images themselves (both in the visuals and in the words).",
    reflection: "Nothing here waits around. Why should you?",
    image: "/alianca/portfolio-alianca-grid.webp",
    thumbnail: "/alianca/portfolio-alianca-showcase.webp",
    relatedThumbnail: "/alianca/portfolio-alianca-related-work.webp",
    detailImage: "/alianca/portfolio-alianca-banner.webp",
    galleryImages: [
      "/alianca/portfolio-alianca-mockup.webp",
      "/alianca/portfolio-alianca-grid.webp",
      "/alianca/portfolio-alianca-final.webp",
    ],
    focus: "Social media & content",
    services: [
      "Social Media Management",
      "Copywriting",
      "Content Creation",
      "Social Media Strategy",
      "Paid Media",
      "Photography & Video",
      "Analytics & Reporting",
    ],
    accent: "#3476ee",
    updatedAt: "2026-09-01T14:00:00+01:00",
  },
  {
    slug: "munchie",
    metaDescription:
      "Social media and food content for Munchie, Porto's first traditional burger joint: craveable visuals and copy that grew its online presence.",
    title: "Munchie",
    summary: "Artisan burgers and irresistible content, to savor on screen. 🍔",
    intro: "Handcrafted burgers, meet handcrafted content.",
    client: "Munchie BK",
    developedAt: "anca design studio",
    year: "2020/2022",
    description:
      "Munchie is the first traditional burger restaurant in Porto, known for winning hearts and appetites with its “7 Deadly Bites”. Young, bold and informal, the brand is far from fast food: fresh, locally sourced ingredients and burgers that look just as good as they taste.\n\nThe mission was simple: turn a passion for burgers into an irresistible digital presence. To do that, I created a mouth-watering content strategy designed to leave followers craving more.\n\nI created and implemented the social media strategy for Instagram and Facebook, taking care of social media management, content creation, photography and video, creative direction, copywriting and performance analysis. The recipe? A strategy built around a young, fun, provocative and approachable voice, combining product content, Reels, memes, trends, informative content and formats designed to spark interaction.\n\nCommunity also became a central part of the strategy through interactive Stories, questions, polls and other participatory formats. The goal was simple: not just to talk to the audience, but to create opportunities to talk with them.\n\nBetween 2020 and 2022, Munchie developed a more consistent and recognisable digital presence, with a voice of its own, while its community grew to 5,000 followers.\n\nThe result? A stronger brand identity and consistent growth in Munchie’s online presence, bringing the brand even closer to its fans.",
    reflection: "Still hungry? Good. That was the plan.",
    image: "/munchie.webp",
    thumbnail: "/munchie/portfolio-munchiebk-showcase.webp",
    relatedThumbnail: "/munchie/portfolio-munchiebk-related-work.webp",
    detailImage: "/munchie/portfolio-munchiebk-banner.webp",
    galleryImages: [
      "/munchie/munchie-behance-03.png",
      "/munchie/munchie-behance-04.png",
      "/munchie/munchie-behance-05.png",
      "/munchie/munchie-behance-06.png",
      "/munchie/portfolio-munchiebk-final.webp",
    ],
    focus: "Content & copywriting",
    services: [
      "Social Media Management",
      "Copywriting",
      "Content Creation",
      "Social Media Strategy",
      "Paid Media",
      "Analytics & Reporting",
      "Photography",
    ],
    accent: "#44985a",
    updatedAt: "2026-09-01T14:00:00+01:00",
  },
  {
    slug: "feel-better",
    metaDescription:
      "Content, copywriting and social media for Feel Better by Joana Pereira, turning laser hair removal into a wellness brand people follow.",
    title: "Feel Better",
    summary: "Less hair, more shine for Feel Better’s social media. 💫",
    intro: "A glow-up story, literally.",
    client: "Feel Better by Joana Pereira",
    developedAt: "anca design studio",
    year: "2020/2022",
    description:
      "Feel Better by Joana Pereira started with a simple promise: less hair, more confidence, but somewhere between the lasers and the follower count, it became something bigger: a full-on wellness brand people actually wanted to be part of.\n\nI built the whole thing from scratch: content (video, photography, graphic design), copywriting, and social media management, all rolled into one, making a clinical topic feel human, useful, and impossible to ignore.\n\nBecause let's be honest: nobody wakes up excited about laser sessions. My job was to change that, one caption, one Reel, one glow-up at a time.",
    reflection: "Smooth results, smoother content strategy.",
    image: "/feel-better.webp",
    thumbnail: "/feel-better/home-showcase.webp",
    relatedThumbnail: "/feel-better/related-work.webp",
    detailImage: "/feel-better/banner.webp",
    focus: "Content & strategy",
    services: [
      "Social Media Management",
      "Content Creation",
      "Copywritting",
      "Photography",
      "Social Media Strategy",
      "Analytics & Reporting",
    ],
    accent: "#f2cddd",
    updatedAt: "2026-08-30T11:24:16+01:00",
  },
  {
    slug: "lr-opticas",
    metaDescription:
      "Social media strategy and content for L&R Ópticas, eight optician stores near Porto: eyewear brands, eye-health tips and myths debunked.",
    title: "L&R Ópticas",
    summary:
      "Social media management with a clear and precise vision of L&R Ópticas. 👓",
    intro: "Because good vision starts with good information.",
    client: "L&R Ópticas",
    developedAt: "Freelance project",
    creditWork: "Freelance",
    year: "2022/2026",
    description:
      "L&R Ópticas has eight stores across the Porto district, dedicated to helping people see the world with more clarity and healthier vision. My mission was to bring that same clarity to their social media — built from the ground up by me.\n\nThe challenge emerged after realizing, together with the store owner, that the previous strategy (focused solely on interaction and informational content) wasn't driving sales. The answer was to introduce product-focused posts, without turning the feed into plain advertising and losing the brand's credibility.\n\nThe core creative decision was to follow a seasonal calendar: sunglasses take center stage in spring and summer, frames lead in winter, and content ties into occasions like Christmas and Valentine's Day with gift suggestions that make the product feel relevant to the moment rather than simply \"for sale.\" Formats are mostly static posts, complemented by Reels and carousels whenever the content calls for more space, like eye health explainers or debunking common myths.\n\nThe result, from January to December 2025: organic growth of 373 Instagram followers and 250 Facebook followers, sustained purely through consistent posting, with no paid advertising behind that growth. Posts reach or exceed 50,000 views per quarter, proof that sales content, when placed at the right point in the calendar, doesn't push the audience away.\n\nToday, L&R Ópticas has a social presence that balances brand trust with genuine everyday usefulness, without ever losing the close, approachable tone that makes it recognizable.",
    reflection: "Sharp vision. Sharp strategy.",
    image: "/l-r.webp",
    thumbnail: "/lr-opticas/home-showcase.jpg",
    relatedThumbnail: "/lr-opticas/related-work.jpg",
    detailImage: "/lr-opticas/banner.webp",
    focus: "Social media & design",
    services: [
      "Content Creation",
      "Social Media Management",
      "Social Media Strategy",
      "Copywriting",
      "Analytics & Reporting",
    ],
    accent: "#e84e3c",
    updatedAt: "2026-09-01T14:00:00+01:00",
  },
  {
    slug: "psicomorfose-psicologia",
    metaDescription:
      "Brand identity and social media for Psicomorfose, a clinical psychology practice: a calm, human voice for anxiety, burnout and real change.",
    title: "PsicoMorfose - Psicologia",
    summary:
      "A warmer language for the mind, on Psicomorfose's social media. 🍂",
    intro:
      "Bringing therapy talk out of the office and into the digital world.",
    client: "Psicomorfose",
    creditClient: "psicomorfose.pt",
    clientUrl: "https://www.instagram.com/psicomorfose.pt/",
    developedAt: "Freelance project",
    creditWork: "Freelance",
    year: "2026",
    description:
      "Some things need to be felt before they're explained. Psicomorfose exists for that in-between space.\n\nIt's a clinical psychology practice built around one idea: change doesn't come from outside in, it comes from inside out. My role was to translate that into a brand and a social media presence that actually feels like it.\n\nI built the identity from the ground up, a palette that moves from safety to insight to growth, a brain-inspired pattern running quietly through it all, and a content strategy that speaks to real, specific struggles: anxiety, burnout, the weight of not knowing what you want, relationships that ask too much.\n\nThe result: a brand that looks calm, feels human, and speaks directly to the people who need it most.",
    brandingText:
      'Every color here means something. Sand for safety. Mustard for the moment things click. Rust for the deeper work that comes after.\n\nI built Psicomorfose\'s identity around this emotional arc, from grounding, to awareness, to real change, tied together by a subtle brain-shaped pattern that never says "therapy" out loud, but you feel it anyway.\n\nSteady where it needs to be. Alive where it counts.',
    socialMediaText:
      "People don't scroll looking for therapy… they scroll looking to feel understood.\n\nThat's where the content strategy started: naming what's hard to say out loud, anxiety, exhaustion, being stuck on autopilot, before ever mentioning a session. Carousels that explain, Reels that hit close, Stories that ask the questions people usually keep to themselves. Not selling psychology. Making space for it.",
    reflection: "From reflection to transformation, from the inside out.",
    image: "/placeholder.jpg",
    thumbnail: "/psicomorfose/home-showcase.webp",
    relatedThumbnail: "/psicomorfose/related-work.webp",
    detailImage: "/psicomorfose/banner-poster.webp",
    detailVideo: "/psicomorfose/banner-psicomorfose.mp4",
    focus: "Branding & communication",
    services: [
      "Content Creation",
      "Social Media Management",
      "Copywriting",
      "Photography & Video",
      "Social Media Strategy",
      "Analytics & Reporting",
      "Branding",
      "Strategy",
      "Paid Media",
    ],
    accent: "#f4c755",
    updatedAt: "2026-08-30T15:29:14+01:00",
  },
  {
    slug: "authentic-classical-pilates",
    metaDescription:
      "Minimalist social media and campaign rollout for Authentic Classical Pilates, Porto and Paredes, built on the precision of the Contrology method.",
    title: "Authentic Classical Pilates",
    summary:
      "Breathing life into Authentic Classical Pilates' social media. 🧘",
    intro: "Where authenticity meets movement.",
    client: "Authentic Classical Pilates",
    developedAt: "Maionese Design",
    agencyUrl: "https://www.maionesedesign.pt/",
    year: "2024",
    description:
      "Authentic Classical Pilates runs two studios, one in Porto, one in Paredes, both dedicated to preserving the original method created by Joseph Pilates: Contrology, an authentic practice, taught with discipline and respect for its roots.\n\nMy role was to bring that same authenticity to social media. I built a minimalist content strategy, one that mirrored the precision of the method itself: clean visuals, intentional movement, and copywriting rooted in the language of Pilates, breath, control, alignment, presence.\n\nWorking alongside the film team, I also led the social media rollout of the brand's campaign film, translating its core idea, return to life, into ongoing content that felt just as deliberate as every exercise on the Reformer.\n\nThe result: a social presence as disciplined and authentic as the method it represents.",
    videoCampaignText:
      "I wrote the campaign film around a single idea: return to life, waking up, not just physically, but to a fuller, more vital way of living.\n\nThe film builds through sensory detail: breath, the sound of springs, the quiet rhythm of the equipment at work, each one a small proof of authenticity. No dialogue needed, just the sound of the practice itself.\n\nThe goal was to make people feel it, and want that feeling for themselves: a reason to walk into either ACP studio and consciously choose a longer, fuller, more alive way of life.",
    reflection: "Authentic Pilates, authentic content.",
    credits: [
      {
        label: "Agency",
        value: "Maionese Design",
        links: [
          {
            text: "Maionese Design",
            url: "https://www.maionesedesign.pt/",
          },
        ],
      },
      { label: "Client", value: "Authentic Classical Pilates" },
      { label: "Year", value: "2024" },
      {
        label: "Film & Photography",
        value: "Pedro Guedes & Jorge Costa",
      },
      {
        label: "Strategy",
        value: "Daniel Oliveira & Alexandra Barbosa",
        links: [
          {
            text: "Daniel Oliveira",
            url: "https://www.behance.net/olinielf38c",
          },
        ],
      },
      {
        label: "Branding",
        value: "António Moreira",
        links: [
          {
            text: "António Moreira",
            url: "https://www.behance.net/antmoreira",
          },
        ],
      },
      {
        label: "Social Media Strategy & Content",
        value: "Alexandra Barbosa",
      },
    ],
    image: "/authentic-classical-pilates/home-showcase.webp",
    thumbnail: "/authentic-classical-pilates/home-showcase.webp",
    relatedThumbnail: "/authentic-classical-pilates/related-work.webp",
    detailImage: "/authentic-classical-pilates/banner.webp",
    focus: "Social media & content",
    services: [
      "Social Media Management",
      "Content Creation",
      "Storytelling",
      "Copywriting",
      "Social Media Strategy",
      "Analytics & Reporting",
    ],
    accent: "#3476ee",
    updatedAt: "2026-08-30T11:24:16+01:00",
  },
  {
    slug: "cockburns",
    metaDescription:
      "Daily social media for Cockburn's Port wine: a young, irreverent voice built on real photography, with steady growth on Instagram, Facebook and X.",
    title: "Cockburn's",
    summary:
      "From the bottle to the digital world, bringing the best of Port wine to social media. 🍷",
    intro: "Vintage brand, fresh feed.",
    client: "Cockburn's",
    developedAt: "legendary.pt",
    year: "2024 / 2025",
    credits: [
      { label: "Client", value: "Cockburn's" },
      {
        label: "Agency",
        value: "legendary.pt",
      },
      {
        label: "Made the static visuals look good",
        value: "Michael Altomani",
        links: [
          {
            text: "Michael Altomani",
            url: "https://www.behance.net/altomani",
          },
        ],
      },
      { label: "Year", value: "2024 / 2025" },
    ],
    description:
      "Cockburn's isn't just tradition: it's proof that Port wine can still excite a new generation.\n\nThe challenge was clear: Port wine had drifted out of the conversation for younger generations, tied to a traditional image that rarely crossed paths with the everyday life of people in their twenties and thirties. The goal wasn't to reinvent the brand, but to make it appealing to this audience without letting tradition fade along the way.\n\nI managed Cockburn's daily presence on Instagram, Facebook, and X for 11 months, between 2024 and 2025, giving the brand a young, fresh, and slightly irreverent voice. The tone of communication leaned on puns and light humour, always respecting the heritage behind the name.\n\nThe core creative decision was to build the profile almost entirely around real photography, rather than overly polished images: from professional productions to genuine moments captured by visitors in the cellars. I complemented this approach with live-covered Stories, filmed by me, at events like Christmas and city fairs, including Baluarte, bringing the brand closer to its community in real time, and not only through planned content.\n\nThe goal set for this strategy was clear: reach 15,000 followers on Instagram. It was achieved. The result was consistent, meaningful growth across every platform, proof that a brand with centuries of history can still feel current, without losing what makes it recognisable.\n\nToday, Cockburn's has a digital presence that speaks the language of a new generation, keeping Port wine's tradition alive through real photography, genuine humour, and authentic presence.",
    reflection: "Some things get better with time... just like this feed.",
    image: "/cockburns/home-showcase.webp",
    thumbnail: "/cockburns/home-showcase.webp",
    relatedThumbnail: "/cockburns/related-work.webp",
    detailImage: "/cockburns/banner.webp",
    galleryImages: [
      "/cockburns/gallery-01.webp",
      "/cockburns/gallery-02.webp",
      "/cockburns/gallery-03.webp",
      "/cockburns/gallery-04.webp",
      "/cockburns/final.webp",
    ],
    focus: "Social media & content",
    services: [
      "Social Media Management",
      "Copywriting",
      "Community Management",
      "Paid Media",
      "Analytics & Reporting",
    ],
    accent: "#e84e3c",
    updatedAt: "2026-09-01T14:00:00+01:00",
  },
];

export const getProject = (slug: string) =>
  PROJECTS.find((project) => project.slug === slug);
