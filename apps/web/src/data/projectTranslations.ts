import type { Language } from "../components/Language/LanguageProvider";
import type { Project } from "./projects";

const servicePt: Record<string, string> = {
  "Social Media Management": "Gestão de Redes Sociais",
  Copywriting: "Copywriting",
  Copywritting: "Copywriting",
  "Video Content Creation": "Criação de Conteúdo em Vídeo",
  "Content Creation": "Criação de Conteúdo",
  "Community Management": "Gestão de Comunidade",
  "Paid Media": "Publicidade Paga",
  "Analytics & Reporting": "Análise e Relatórios",
  "Content Ideation": "Idealização de Conteúdo",
  "Social Media Strategy": "Estratégia de Redes Sociais",
  "Photography & Video": "Fotografia e Vídeo",
  Photography: "Fotografia",
  Storytelling: "Storytelling",
  Branding: "Branding",
  Strategy: "Estratégia",
};

const pt: Record<string, Partial<Project>> = {
  "endesa-portugal": {
    summary: "A criatividade que dá energia às redes sociais da Endesa. ⚡",
    intro:
      "A criar conteúdo que reflete os valores da Endesa, a tornar a energia excitante e acessível para o dia a dia de quem a consome.",
    description:
      "A Endesa Portugal é líder no setor da energia, com um compromisso sólido com a inovação e a sustentabilidade.\n\nO meu objetivo? Dar vida a esse compromisso nas redes sociais (Instagram e Facebook).\n\nDesenvolvi e implementei uma estratégia que duplicou as impressões e o alcance (+100%) em apenas 8 meses, tanto no Facebook como no Instagram.\n\nO foco? Criar conteúdo que refletissem os valores visionários da Endesa, onde mostrava a energia de maneira entusiasmante, acessível e relevante no dia a dia dos consumidores.",
  },
  "kfc-portugal": {
    summary:
      "A virar muitos frangos como Coronel Sanders nas redes sociais do KFC Portugal. 🍗",
    intro:
      "Memes bem feitos e frango ainda melhor: a receita para o engagement.",
    description:
      "Durante 11 meses, vesti o lendário fato branco e dei voz digital ao Coronel Sanders em Portugal no Instagram, Facebook, TikTok e X.\n\nA missão? Transformar a KFC na marca de fast food mais envolvente nas redes sociais. A estratégia? Uma abordagem meme-first, pensada à medida de cada plataforma e público.\n\nNo Instagram, foi conseguido um aumento de 40% no engagement em apenas seis meses.\n\nNo TikTok, mais do que aparecer, foi conquistado. A KFC Portugal tornou-se a marca com maior engagement no TikTok em Portugal, onde cresceu organicamente mais 268 mil seguidores em apenas 8 meses.\n\nTudo isto enquanto fritava conteúdo de fazer rir, salivar e interagir, sempre com aquele sabor a finger lickin’ good.",
    reflection:
      "Porque a internet vive de memes e a KFC tinha muito para dizer.",
  },
  "padaria-alianca": {
    summary: "Acabado de sair do forno, diretamente para o feed. 🥐",
    intro:
      "Há coisas que sabem melhor quando são feitas em casa. Como tudo aqui.",
    description:
      "A Padaria Aliança nasceu de uma ideia: levar os sabores mais tradicionais de Portugal a todos os que entram pela porta. É um lugar onde o tempo abranda, feito de pão fresco, pastelaria verdadeira e do prazer simples de comer bem.\n\nFiquei responsável pela estratégia de conteúdo, fotografia e vídeo, captando aquilo que distingue a Padaria Aliança: tudo é feito fresco, todos os dias. As imagens falavam por si, com planos próximos do pão quente e o vapor ainda a subir, prova de que nada aqui fica à espera.",
    reflection: "Aqui nada fica à espera. Porque haverias tu de ficar?",
  },
  munchie: {
    summary:
      "Hambúrgueres artesanais e conteúdos deliciosos de dar água na boca. 🍔",
    intro: "Hambúrgueres artesanais encontram conteúdo feito à mão.",
    description:
      "A Munchie é a primeira hamburgueria tradicional do Porto, conhecida por conquistar corações (e apetites) com os seus “7 Picados Mortais”. Jovem, arrojada e informal, a marca está longe de ser fast food: ingredientes frescos e locais, e hambúrgueres tão bons de ver como de comer.\n\nA missão era simples: transformar a paixão por hambúrgueres numa presença digital irresistível. Para isso, criei uma estratégia de conteúdo de fazer crescer água na boca, pensada para deixar os seguidores com vontade de (comer) mais.\n\nA receita? Imagens de qualidade que captam a essência artesanal da marca, copywriting na linguagem do público e ações de engagement orientadas para a comunidade.\n\nO resultado: uma identidade mais forte e um crescimento consistente da presença online da Munchie, aproximando ainda mais a marca dos seus fãs.",
    reflection: "Ainda tens fome? Ótimo. Esse era o plano.",
  },
  "feel-better": {
    summary: "Menos pelo, mais brilho nas redes sociais da Feel Better. 💫",
    intro: "Menos pelos, mais seguidores.",
    description:
      "A Feel Better by Joana Pereira começou com uma promessa simples: menos pelos, mais confiança. Mas algures entre os lasers e o número de seguidores, tornou-se em algo maior: uma marca de bem-estar, que as pessoas queriam mesmo seguir.\n\nConstruí tudo do zero: conteúdo (vídeo, fotografia, design gráfico), copywriting e gestão de redes sociais, tudo junto, tornando um tema clínico em algo humano, útil e impossível de ignorar.\n\nPorque sejamos honestos, nem todos acordamos entusiasmados com uma sessão de depilação a laser. O meu trabalho foi mudar isso, tornar a depilação a laser algo acessível, informativo e até divertido. Sempre com uma comunicação clara, apelativa e alinhada com as necessidades da audiência.",
    reflection: "Tão suave na pele como na estratégia.",
  },
  "lr-opticas": {
    summary:
      "Gestão de redes sociais com uma visão clara e precisa da L&R Ópticas. 👓",
    intro: "Porque uma boa visão começa com boa informação.",
    description:
      "Com oito lojas no distrito do Porto, a L&R Ópticas dedica-se a todos aqueles que desejam ver o mundo com uma visão mais nítida e saudável.\n\nCom uma pitada de humor e boa disposição, comunica-se o compromisso com o bem-estar e a saúde dos olhos.\n\nSão partilhadas dicas, informações relevantes e desvendam-se mitos. Os testemunhos dos clientes não só reforçam a confiança, como também auxiliam os novos clientes a entender o real valor dos serviços, tornando o universo da visão acessível.",
    reflection: "Óculos para ver melhor. Conteúdo para ser bem vista.",
    developedAt: "Projeto freelance",
  },
  "psicomorfose-psicologia": {
    summary:
      "Uma linguagem mais acolhedora para a mente, nas redes sociais da Psicomorfose. 🍂",
    intro:
      "A levar a conversa sobre terapia para fora do consultório e para o mundo digital.",
    description:
      "Há coisas que precisam de ser sentidas antes de serem explicadas. A Psicomorfose existe nesse espaço intermédio.\n\nÉ um gabinete de psicologia clínica construído à volta de uma ideia: a mudança não vem de fora para dentro, vem de dentro para fora. O meu papel foi traduzir isso numa marca e numa presença nas redes sociais que transmitissem verdadeiramente essa sensação.\n\nConstruí a identidade de raiz: uma paleta que evolui da segurança para a consciência e o crescimento, um padrão inspirado no cérebro presente de forma subtil e uma estratégia de conteúdo que fala sobre coisas reais e específicas: ansiedade, burnout, o peso de não saber o que se quer e relações que exigem demasiado.\n\nO resultado: uma marca serena, humana e capaz de falar diretamente com quem mais precisa dela.",
    brandingText:
      "Cada cor tem um significado. Areia para a segurança. Mostarda para o momento em que tudo faz sentido. Ferrugem para o trabalho mais profundo que vem depois.\n\nConstruí a identidade da Psicomorfose em torno deste arco emocional, da estabilidade à consciência e à mudança real, unido por um padrão subtil inspirado no cérebro.\n\nEstável onde precisa de ser. Viva onde importa.",
    socialMediaText:
      "Ninguém faz scroll à procura de terapia... faz scroll à procura de se sentirem compreendidas.\n\nFoi aí que a estratégia de conteúdo começou: a dar nome ao que é difícil dizer em voz alta, ansiedade, exaustão, viver em piloto automático, antes sequer de mencionar uma sessão. Carrosséis que explicam, Reels que tocam de perto, Stories que fazem as perguntas que normalmente se guardam só para nós. Não é só vender psicologia, mas sim abrir espaço para ela.",
    reflection: "Da reflexão à transformação, de dentro p'ra fora.",
    developedAt: "Projeto freelance",
  },
  "authentic-classical-pilates": {
    summary: "A dar vida às redes sociais do Authentic Classical Pilates. 🧘",
    intro: "Onde a autenticidade encontra o movimento.",
    description:
      "O Authentic Classical Pilates tem dois estúdios, um no Porto e outro em Paredes, ambos dedicados a preservar o método original criado por Joseph Pilates: a Contrologia, uma prática autêntica, ensinada com disciplina e respeito pelas suas raízes.\n\nO meu papel foi levar essa mesma autenticidade às redes sociais. Criei uma estratégia de conteúdo minimalista que refletia a precisão do próprio método: visuais limpos, movimento intencional e copywriting assente na linguagem do Pilates — respiração, controlo, alinhamento e presença.\n\nEm conjunto com a equipa de filmagem, escrevi o video promocional como lancei a campanha nas redes sociais, traduzindo a sua ideia central, return to life, em conteúdo pensado ao pormenor, com a mesma intenção e rigor do método em si.\n\nO resultado: redes sociais com o mesmo rigor e presença que o método pede.",
    videoCampaignText:
      "Escrevi o vídeo promocional da campanha à volta de uma única ideia: return to life, acordar não só fisicamente, mas para uma forma de viver mais plena e vital.\n\nO filme constrói-se através de detalhes sensoriais: a respiração, o som das molas e o ritmo discreto do equipamento em movimento, cada elemento como uma pequena prova de autenticidade. Sem diálogo, apenas o som da própria prática.\n\nO objetivo era fazer as pessoas sentirem isso, e quererem essa sensação para si próprias: uma razão para entrar num dos estúdios ACP e escolherem, conscientemente, uma forma de viver mais longa, mais plena e mais viva.",
    reflection: "Pilates autêntico, conteúdo autêntico.",
  },
  cockburns: {
    summary: "Da garrafa para as redes sociais, o melhor do vinho do Porto. 🍷",
    intro: "Uma abordagem ousada, fresca e jovem ao vinho do Porto.",
    description:
      "A Cockburn's não é apenas tradição: é a prova de que o vinho do Porto ainda pode entusiasmar uma nova geração.\n\nGeri a presença diária da marca no Instagram, Facebook e X, dando à Cockburn's uma voz jovem, fresca e ligeiramente irreverente, sem perder a herança do nome. O próprio perfil conta essa história: construído quase inteiramente com fotografia, desde produções profissionais a momentos reais captados por visitantes nas caves. Menos imagens excessivamente polidas, mais pessoas reais, experiências reais e a sensação de estar verdadeiramente lá.\n\nEsta abordagem manteve a marca próxima da sua comunidade e os resultados foram claros: um crescimento consistente e significativo em todas as plataformas, prova de que uma marca com séculos de história ainda pode sentir-se atual.",
    reflection: "Há coisas que melhoram com o tempo... tal como este feed.",
  },
};

export function localizeProject(project: Project, language: Language): Project {
  if (language !== "pt") return project;
  const translation = pt[project.slug] ?? {};
  return {
    ...project,
    ...translation,
    services: project.services.map((service) => servicePt[service] ?? service),
  };
}
