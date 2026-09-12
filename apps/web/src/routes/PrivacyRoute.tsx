import Link from "next/link";
import ConsentControls from "../components/Analytics/ConsentControls";
import { localizeHref, type Language } from "../lib/i18n";

const externalLinkClass =
  "font-medium underline decoration-current/40 underline-offset-4 transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow";

const PrivacyRoute = ({ language }: { language: Language }) => {
  const pt = language === "pt";

  return (
    <main className="min-h-screen bg-black px-6 pb-20 pt-32 text-white sm:px-10 md:px-16 md:pb-28 md:pt-40 lg:px-24">
      <article className="mx-auto w-full max-w-[780px]">
        <Link
          href={localizeHref("/", language)}
          className="inline-flex py-2 text-sm font-medium text-white/70 underline decoration-white/30 underline-offset-4 transition-colors hover:text-yellow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
        >
          {pt ? "Voltar ao início" : "Back to home"}
        </Link>

        <header className="mb-14 mt-8 border-b border-white/25 pb-10 md:mb-16">
          <h1 className="text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.035em]">
            {pt ? "Política de Privacidade" : "Privacy Policy"}
          </h1>
          <p className="mt-6 text-sm text-white/60">
            {pt ? "Última atualização: 12 de setembro de 2026" : "Last updated: 12 September 2026"}
          </p>
        </header>

        <div className="space-y-12 text-base leading-[1.75] text-white/80 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:text-white [&_li]:pl-2 [&_p+p]:mt-4 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2">
          <section>
            <h2>{pt ? "1. Responsável pelo tratamento" : "1. Data controller"}</h2>
            <p>
              {pt
                ? "A responsável pelo tratamento dos dados pessoais neste website é:"
                : "The controller responsible for personal data on this website is:"}
            </p>
            <address className="mt-4 not-italic">
              <strong className="text-white">Alexandra Dinis Barbosa</strong><br />
              Astromil, Paredes, Portugal<br />
              <a className={externalLinkClass} href="mailto:hello@alexandrabarbosa.pt">
                hello@alexandrabarbosa.pt
              </a>
            </address>
          </section>

          <section>
            <h2>{pt ? "2. Dados tratados" : "2. Data processed"}</h2>
            <p>
              {pt
                ? "Podem ser tratados os seguintes dados:"
                : "The following data may be processed:"}
            </p>
            <ul>
              <li>{pt ? "nome, endereço de email e mensagem fornecidos através do formulário de contacto ou por email;" : "name, email address and message provided through the contact form or by email;"}</li>
              <li>{pt ? "dados técnicos de navegação necessários ao funcionamento e segurança do website, como endereço IP, data e hora do acesso, páginas pedidas, tipo de navegador, dispositivo e registos técnicos do servidor." : "technical browsing data needed to operate and secure the website, such as IP address, access date and time, requested pages, browser and device type, and server logs."}</li>
              <li>{pt ? "dados de analytics recolhidos apenas após consentimento: páginas visitadas, localização aproximada derivada de um endereço IP truncado, tipo de dispositivo e navegador, página de referência e um identificador de cliente pseudónimo guardado num cookie." : "analytics data collected only after consent: pages visited, approximate location derived from a truncated IP address, device and browser type, referrer, and a pseudonymous client identifier stored in a cookie."}</li>
            </ul>
            <p>
              {pt
                ? "As submissões do formulário são enviadas por email à Alexandra através da Resend (Resend, Inc., EUA), que atua como subcontratante. Os dados são usados apenas para responder ao contacto e não são guardados numa base de dados do website."
                : "Form submissions are sent by email to Alexandra through Resend (Resend, Inc., USA), acting as a processor. The data is used only to answer the enquiry and is not stored in a website database."}
            </p>
          </section>

          <section>
            <h2>{pt ? "3. Finalidades e bases legais" : "3. Purposes and legal bases"}</h2>
            <ul>
              <li>{pt ? "Responder a mensagens, contactos e pedidos de orçamento — interesse legítimo em gerir comunicações e oportunidades profissionais (artigo 6.º, n.º 1, alínea f) do RGPD) e, quando o contacto visa contratar serviços, diligências pré-contratuais a pedido do titular (artigo 6.º, n.º 1, alínea b))." : "Replying to messages, enquiries and quote requests — legitimate interests in managing communications and professional opportunities (Article 6(1)(f) GDPR) and, where an enquiry concerns hiring services, pre-contractual steps requested by the data subject (Article 6(1)(b))."}</li>
              <li>{pt ? "Garantir o funcionamento, integridade e segurança do website — interesse legítimo em disponibilizar um website seguro e prevenir utilizações abusivas (artigo 6.º, n.º 1, alínea f))." : "Operating, protecting and securing the website — legitimate interests in providing a secure website and preventing misuse (Article 6(1)(f))."}</li>
              <li>{pt ? "Medir o tráfego e melhorar o conteúdo através de cookies ou tecnologias de analytics — consentimento prévio (artigo 6.º, n.º 1, alínea a)), que pode ser recusado ou retirado a qualquer momento sem afetar a licitude do tratamento anterior." : "Measuring traffic and improving content through analytics cookies or similar technologies — prior consent (Article 6(1)(a)), which may be refused or withdrawn at any time without affecting the lawfulness of earlier processing."}</li>
            </ul>
          </section>

          <section>
            <h2>{pt ? "4. Cookies e Google Analytics" : "4. Cookies and Google Analytics"}</h2>
            <p>
              {pt
                ? "Este website utiliza o Google Analytics 4 para medir o tráfego e perceber que páginas são vistas. O Google Analytics só é carregado depois de o visitante aceitar no banner de cookies. O consentimento pode ser retirado a qualquer momento através do controlo nesta secção."
                : "This website uses Google Analytics 4 to measure traffic and understand which pages are viewed. Google Analytics is loaded only after the visitor accepts in the cookie banner. Consent can be withdrawn at any time using the control in this section."}
            </p>
            <p>
              {pt
                ? "São utilizados os cookies _ga (2 anos, para distinguir visitantes) e _ga_RZ63T51JEC (2 anos, para manter o estado da sessão). Os endereços IP são truncados pelo Google Analytics 4 antes do armazenamento. O Google Signals e as funcionalidades de publicidade estão desativados."
                : "The cookies used are _ga (2 years, to distinguish visitors) and _ga_RZ63T51JEC (2 years, to maintain session state). IP addresses are truncated by Google Analytics 4 before storage. Google Signals and advertising features are turned off."}
            </p>
            <p>
              {pt
                ? "A Google Ireland Limited atua como prestadora do serviço; poderá haver tratamento nos Estados Unidos, ao abrigo dos mecanismos de transferência aplicáveis, incluindo o Quadro de Privacidade de Dados UE–EUA e/ou cláusulas contratuais-tipo, conforme aplicável."
                : "Google Ireland Limited provides the service; processing may occur in the United States under applicable transfer mechanisms, including the EU–US Data Privacy Framework and/or Standard Contractual Clauses, as applicable."}
            </p>
            <ConsentControls />
          </section>

          <section>
            <h2>{pt ? "5. Destinatários e transferências internacionais" : "5. Recipients and international transfers"}</h2>
            <p>
              {pt
                ? "Os dados podem ser tratados por fornecedores estritamente necessários à prestação do serviço, sujeitos a deveres de confidencialidade e proteção de dados: o fornecedor de email utilizado para receber mensagens e a Vercel Inc., que aloja e disponibiliza o website."
                : "Data may be processed by providers strictly necessary to deliver the service and subject to confidentiality and data-protection obligations: the email provider used to receive messages and Vercel Inc., which hosts and serves the website."}
            </p>
            <p>
              {pt
                ? "A Vercel pode tratar dados nos Estados Unidos e noutros países onde opera. Segundo os seus termos, utiliza mecanismos adequados para transferências internacionais, incluindo o Quadro de Privacidade de Dados UE–EUA e cláusulas contratuais-tipo aprovadas pela Comissão Europeia. Os dados não são vendidos."
                : "Vercel may process data in the United States and other countries where it operates. Under its terms, it uses appropriate international-transfer mechanisms, including the EU–US Data Privacy Framework and Standard Contractual Clauses approved by the European Commission. Data is not sold."}
            </p>
          </section>

          <section>
            <h2>{pt ? "6. Conservação" : "6. Retention"}</h2>
            <ul>
              <li>{pt ? "Contactos e pedidos de orçamento: pelo período necessário para responder e acompanhar o contacto, até ao máximo de 24 meses após a última comunicação, salvo se existir uma relação contratual ou obrigação legal que justifique prazo superior." : "Enquiries and quote requests: for as long as needed to reply and follow up, up to 24 months after the last communication, unless a contractual relationship or legal duty requires longer retention."}</li>
              <li>{pt ? "Registos técnicos: pelo período definido pelo fornecedor de alojamento e apenas enquanto necessário para segurança, diagnóstico e funcionamento do serviço." : "Technical logs: for the period set by the hosting provider and only as long as necessary for security, diagnostics and service operation."}</li>
              <li>{pt ? "Dados de eventos de analytics: durante 14 meses no Google Analytics." : "Analytics event data: for 14 months in Google Analytics."}</li>
              <li>{pt ? "Escolha de consentimento: durante 12 meses no navegador." : "Consent choice: for 12 months in the browser."}</li>
            </ul>
          </section>

          <section>
            <h2>{pt ? "7. Direitos" : "7. Your rights"}</h2>
            <p>
              {pt
                ? "Nos termos aplicáveis, o titular pode pedir acesso, retificação, apagamento, limitação do tratamento e portabilidade dos dados, bem como opor-se a tratamentos baseados em interesse legítimo e retirar consentimentos. Pode exercer estes direitos através de hello@alexandrabarbosa.pt. Poderá ser solicitada informação necessária para confirmar a identidade."
                : "Where applicable, data subjects may request access, rectification, erasure, restriction and portability of their data, object to processing based on legitimate interests, and withdraw consent. These rights can be exercised through hello@alexandrabarbosa.pt. Information needed to confirm identity may be requested."}
            </p>
            <p>
              {pt ? "Também pode apresentar reclamação à " : "You may also lodge a complaint with the Portuguese "}
              <a className={externalLinkClass} href="https://www.cnpd.pt/" target="_blank" rel="noopener noreferrer">
                {pt ? "Comissão Nacional de Proteção de Dados (CNPD)" : "Data Protection Authority (CNPD)"}
              </a>.
            </p>
          </section>

          <section>
            <h2>{pt ? "8. Segurança e alterações" : "8. Security and changes"}</h2>
            <p>
              {pt
                ? "São adotadas medidas técnicas e organizativas adequadas ao risco para proteger os dados contra acesso, alteração, divulgação ou perda não autorizados. Nenhuma transmissão ou armazenamento online pode, contudo, garantir segurança absoluta."
                : "Technical and organisational measures appropriate to the risk are used to protect data against unauthorised access, alteration, disclosure or loss. However, no online transmission or storage can guarantee absolute security."}
            </p>
            <p>
              {pt
                ? "Esta política pode ser atualizada para refletir alterações legais, técnicas ou nos serviços utilizados. A data da versão mais recente será sempre indicada no início da página."
                : "This policy may be updated to reflect legal, technical or service changes. The date of the latest version will always appear at the top of this page."}
            </p>
          </section>
        </div>
      </article>
    </main>
  );
};

export default PrivacyRoute;
