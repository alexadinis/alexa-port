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
  image: string;
  thumbnail?: string;
  relatedThumbnail?: string;
  focus: string;
  services: string[];
  accent: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "endesa-portugal",
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
      "Endesa Portugal is a leader in the energy sector, committed to innovation and sustainability. My goal? Bring that commitment to life on social media. Over 11 months, I developed and executed a strategy that doubled impressions and reach (+100%) on Facebook and Instagram.",
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
  },
  {
    slug: "kfc-portugal",
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
      "For 11 months, I put on the legendary white suit and gave Colonel Sanders a digital voice in Portugal across Instagram, Facebook, TikTok, and X.\n\nThe mission? Turn KFC into the most engaging fast food brand on social media. The strategy? A meme-first approach, tailored to each platform and audience.\n\nOn Instagram, that meant a 40% increase in engagement in just six months. On TikTok, it meant more than just showing up. KFC Portugal became the brand with the highest engagement on TikTok in Portugal, growing 268K followers organically in just 8 months.\n\nAll while frying up content that made people laugh, drool and hit that follow button.",
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
  },
  {
    slug: "padaria-alianca",
    title: "Padaria Aliança",
    summary: "Fresh out of the oven, straight into the feed. 🥐",
    intro: "Some things are better homemade. Like everything here.",
    client: "Padaria Aliança",
    developedAt: "anca design studio",
    year: "2021 / 2022",
    description:
      "Padaria Aliança is a bakery built around one idea: bring Portugal's most traditional flavours to everyone who walks through the door. It's a place where time slows down, made for fresh bread, real pastries, and the simple pleasure of good food.\n\nI handled content strategy, photography, and video, capturing what makes Padaria Aliança different: everything made fresh, every single day. The visuals did the talking, close-ups of warm bread, steam still rising, proof that nothing here sits around waiting.",
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
  },
  {
    slug: "munchie",
    title: "Munchie",
    summary: "Artisan burgers and irresistible content, to savor on screen. 🍔",
    intro: "Handcrafted burgers, meet handcrafted content.",
    client: "Munchie BK",
    developedAt: "anca design studio",
    year: "2021/2022",
    description:
      "Munchie is Porto's first traditional burger joint, known for winning hearts (and appetites) with its \"7 Picados Mortais.\" Young, bold, and informal by nature, the brand is anything but fast food, it's fresh, local ingredients and burgers that are as good to look at as they are to eat.\n\nThe mission was simple: turn a passion for burgers into an irresistible digital presence. To get there, I built a content strategy that was mouth-watering, designed to make followers crave more, one post at a time.\n\nThe recipe? High-quality visuals that capture the brand's handcrafted essence, copywriting that speaks the audience's language, and community-driven engagement tactics that keep the conversation going.\n\nThe result: a stronger brand identity and steady growth in Munchie's online presence, making the brand feel even closer (and even more craveable) to its fans.",
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
  },
  {
    slug: "feel-better",
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
  },
  {
    slug: "lr-opticas",
    title: "L&R Ópticas",
    summary:
      "Social media management with a clear and precise vision of L&R Ópticas. 👓",
    intro: "Because good vision starts with good information.",
    client: "L&R Ópticas",
    developedAt: "Freelance project",
    creditWork: "Freelance",
    year: "2022/2026",
    description:
      "L&R Ópticas has eight stores across the Porto district, dedicated to helping people see the world with clearer, healthier vision. My mission was to bring that same clarity to their social media.\n\nI handled the strategy, content creation, and copywriting across their channels, from product content for eyewear brands like Prada, Ray-Ban, Versace, Dolce & Gabbana, and Persol, to educational posts sharing tips and debunking common myths about eye health.\n\nThe result: a social presence that feels as trustworthy as it is easy to follow, combining brand credibility with genuine, everyday usefulness.",
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
  },
  {
    slug: "psicomorfose-psicologia",
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
  },
  {
    slug: "authentic-classical-pilates",
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
  },
  {
    slug: "cockburns",
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
      "Cockburn's isn't just tradition, it's proof that Port wine can still feel exciting to a new generation.\n\nI managed the brand's day-to-day presence across Instagram, Facebook, and X, giving Cockburn's a voice that felt young, fresh, and a little irreverent, without losing the heritage behind the name. The profile itself tells that story: built almost entirely on photography, from professional shoots to real moments captured by visitors passing through the cellars, over graphic design. It's less about polished visuals, more about real people, real experiences, and the feeling of actually being there.\n\nThat approach kept the brand close to its community, and it showed: steady, meaningful growth across all platforms, proof that a centuries-old name can still feel personal.",
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
  },
];

export const getProject = (slug: string) =>
  PROJECTS.find((project) => project.slug === slug);
