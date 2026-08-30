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
    intro: "Criação de conteúdo alinhado com os valores inovadores da Endesa, tornando a energia mais interessante, acessível e relevante no dia a dia.",
    description: "A Endesa Portugal é uma referência no setor energético, comprometida com a inovação e a sustentabilidade. O meu objetivo? Dar vida a esse compromisso nas redes sociais. Ao longo de 11 meses, desenvolvi e implementei uma estratégia que duplicou as impressões e o alcance (+100%) no Facebook e Instagram.",
  },
  "kfc-portugal": {
    summary: "A virar muitos frangos como Coronel Sanders nas redes sociais do KFC Portugal. 🍗",
    intro: "Quando frango frito encontra a cultura dos memes, o engagement acontece.",
    description: "Durante 11 meses, vesti o lendário fato branco e dei ao Colonel Sanders uma voz digital em Portugal, no Instagram, Facebook, TikTok e X.\n\nA missão? Tornar a KFC na marca de fast food com mais engagement nas redes sociais. A estratégia? Uma abordagem centrada em memes, adaptada a cada plataforma e audiência.\n\nNo Instagram, isso traduziu-se num aumento de 40% no engagement em apenas seis meses. No TikTok, foi muito mais do que marcar presença. A KFC Portugal tornou-se a marca com maior engagement no TikTok em Portugal, conquistando organicamente 268 mil seguidores em apenas 8 meses.\n\nTudo isto enquanto criava conteúdo que fazia as pessoas rir, ficar com água na boca e carregar no botão seguir.",
    reflection: "Porque a internet vive de memes e a KFC tinha muito para dizer.",
  },
  "padaria-alianca": {
    summary: "Acabado de sair do forno, diretamente para o feed. 🥐",
    intro: "Há coisas que sabem melhor quando são feitas em casa. Como tudo aqui.",
    description: "A Padaria Aliança nasceu de uma ideia: levar os sabores mais tradicionais de Portugal a todos os que entram pela porta. É um lugar onde o tempo abranda, feito de pão fresco, pastelaria verdadeira e do prazer simples de comer bem.\n\nFiquei responsável pela estratégia de conteúdo, fotografia e vídeo, captando aquilo que distingue a Padaria Aliança: tudo é feito fresco, todos os dias. As imagens falavam por si, com planos próximos do pão quente e o vapor ainda a subir, prova de que nada aqui fica à espera.",
    reflection: "Aqui nada fica à espera. Porque haverias tu de ficar?",
  },
  munchie: {
    summary: "Hambúrgueres artesanais e conteúdos deliciosos de dar água na boca. 🍔",
    intro: "Hambúrgueres artesanais encontram conteúdo feito à mão.",
    description: "A Munchie é a primeira hamburgueria tradicional do Porto, conhecida por conquistar corações (e apetites) com os seus “7 Picados Mortais”. Jovem, arrojada e informal, a marca está longe de ser fast food: ingredientes frescos e locais, e hambúrgueres tão bons de ver como de comer.\n\nA missão era simples: transformar a paixão por hambúrgueres numa presença digital irresistível. Para isso, criei uma estratégia de conteúdo de fazer crescer água na boca, pensada para deixar os seguidores com vontade de mais, publicação após publicação.\n\nA receita? Imagens de qualidade que captam a essência artesanal da marca, copywriting na linguagem do público e ações de engagement orientadas para a comunidade.\n\nO resultado: uma identidade mais forte e um crescimento consistente da presença online da Munchie, aproximando ainda mais a marca dos seus fãs.",
    reflection: "Ainda tens fome? Ótimo. Esse era o plano.",
  },
  "feel-better": {
    summary: "Menos pelo, mais brilho nas redes sociais da Feel Better. 💫",
    intro: "Uma história de transformação, literalmente.",
    description: "A Feel Better by Joana Pereira começou com uma promessa simples: menos pelo, mais confiança. Mas, algures entre os lasers e o número de seguidores, tornou-se algo maior: uma marca de bem-estar da qual as pessoas queriam realmente fazer parte.\n\nConstruí tudo de raiz: conteúdo (vídeo, fotografia e design gráfico), copywriting e gestão de redes sociais, tornando um tema clínico mais humano, útil e impossível de ignorar.\n\nPorque, sejamos honestos, ninguém acorda entusiasmado com sessões de laser. O meu trabalho foi mudar isso, uma legenda, um Reel e uma transformação de cada vez.",
    reflection: "Resultados suaves, uma estratégia de conteúdo ainda mais fluida.",
  },
  "lr-opticas": {
    summary: "Gestão de redes sociais com uma visão clara e precisa da L&R Ópticas. 👓",
    intro: "Porque uma boa visão começa com boa informação.",
    description: "A L&R Ópticas tem oito lojas no distrito do Porto, dedicadas a ajudar as pessoas a ver o mundo com uma visão mais clara e saudável. A minha missão foi levar essa mesma clareza às suas redes sociais.\n\nFiquei responsável pela estratégia, criação de conteúdo e copywriting, desde conteúdos de produto para marcas como Prada, Ray-Ban, Versace, Dolce & Gabbana e Persol, até publicações educativas com dicas e esclarecimento de mitos sobre saúde ocular.\n\nO resultado: uma presença social credível e fácil de acompanhar, que combina autoridade de marca com utilidade real no dia a dia.",
    reflection: "A transformar os cuidados visuais numa conversa do dia a dia.",
    developedAt: "Projeto freelance",
  },
  "psicomorfose-psicologia": {
    summary: "Uma linguagem mais acolhedora para a mente, nas redes sociais da Psicomorfose. 🍂",
    intro: "A levar a conversa sobre terapia para fora do consultório e para o mundo digital.",
    description: "Há coisas que precisam de ser sentidas antes de serem explicadas. A Psicomorfose existe nesse espaço intermédio.\n\nÉ uma prática de psicologia clínica assente numa ideia: a mudança não acontece de fora para dentro, mas de dentro para fora. O meu papel foi traduzir isso numa marca e numa presença social que transmitissem verdadeiramente essa sensação.\n\nConstruí a identidade de raiz: uma paleta que evolui da segurança para a consciência e o crescimento, um padrão inspirado no cérebro e uma estratégia de conteúdo dirigida a dificuldades reais e específicas, como ansiedade, burnout, indecisão e relações que exigem demasiado.\n\nO resultado: uma marca serena, humana e capaz de falar diretamente com quem mais precisa dela.",
    brandingText: "Cada cor tem um significado. Areia para a segurança. Mostarda para o momento em que tudo faz sentido. Ferrugem para o trabalho mais profundo que vem depois.\n\nConstruí a identidade da Psicomorfose em torno deste arco emocional, da estabilidade à consciência e à mudança real, unido por um padrão subtil inspirado no cérebro.\n\nEstável onde precisa de ser. Viva onde importa.",
    socialMediaText: "As pessoas não percorrem o feed à procura de terapia… procuram sentir-se compreendidas.\n\nFoi aí que começou a estratégia de conteúdo: dar nome ao que custa dizer em voz alta — ansiedade, exaustão, viver em piloto automático — antes de falar numa sessão. Carrosséis que explicam, Reels que tocam de perto e Stories com as perguntas que normalmente ficam por fazer. Não vender psicologia. Criar espaço para ela.",
    reflection: "Da reflexão à transformação, de dentro para fora.",
    developedAt: "Projeto freelance",
  },
  "authentic-classical-pilates": {
    summary: "A dar vida às redes sociais do Authentic Classical Pilates. 🧘",
    intro: "Onde a autenticidade encontra o movimento.",
    description: "O Authentic Classical Pilates tem dois estúdios, um no Porto e outro em Paredes, ambos dedicados a preservar o método original criado por Joseph Pilates: a Contrologia, uma prática autêntica, ensinada com disciplina e respeito pelas suas raízes.\n\nO meu papel foi levar essa mesma autenticidade às redes sociais. Criei uma estratégia de conteúdo minimalista que refletia a precisão do próprio método: visuais limpos, movimento intencional e copywriting assente na linguagem do Pilates — respiração, controlo, alinhamento e presença.\n\nEm conjunto com a equipa de filme, liderei também o lançamento da campanha nas redes sociais, traduzindo a sua ideia central, o regresso à vida, em conteúdo contínuo e tão deliberado como cada exercício no Reformer.\n\nO resultado: uma presença social tão disciplinada e autêntica como o método que representa.",
    videoCampaignText: "Escrevi o filme de campanha em torno de uma única ideia: regressar à vida, despertar não apenas fisicamente, mas para uma forma de viver mais plena e vital.\n\nO filme constrói-se através de detalhes sensoriais: a respiração, o som das molas e o ritmo discreto do equipamento em movimento, cada elemento como uma pequena prova de autenticidade. Sem diálogo, apenas o som da própria prática.\n\nO objetivo era fazer as pessoas sentir essa experiência e desejá-la para si: uma razão para entrar num dos estúdios ACP e escolher conscientemente uma vida mais longa, plena e viva.",
    reflection: "Pilates autêntico, conteúdo autêntico.",
  },
  cockburns: {
    summary: "Da garrafa para as redes sociais, o melhor do vinho do Porto. 🍷",
    intro: "Marca vintage, feed fresco.",
    description: "A Cockburn's não é apenas tradição: é a prova de que o vinho do Porto ainda pode entusiasmar uma nova geração.\n\nGeri a presença diária da marca no Instagram, Facebook e X, dando à Cockburn's uma voz jovem, fresca e ligeiramente irreverente, sem perder a herança do nome. O próprio perfil conta essa história: construído quase inteiramente com fotografia, desde produções profissionais a momentos reais captados por visitantes nas caves. Menos imagens excessivamente polidas, mais pessoas reais, experiências reais e a sensação de estar verdadeiramente lá.\n\nEsta abordagem manteve a marca próxima da sua comunidade e os resultados foram claros: um crescimento consistente e significativo em todas as plataformas, prova de que uma marca com séculos de história ainda pode sentir-se pessoal.",
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
