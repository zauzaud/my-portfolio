import { CopyEmail } from "@/components/copy-email";
import { SectionNav } from "@/components/section-nav";

const EMAIL = "gabriel.zaude@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/gabriel-ramos-8558b6193/";
const GITHUB = "https://github.com/zauzaud";
const WHATSAPP = "https://wa.me/5511930701998";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export default function Home() {
  return (
    <div className="shell">
      <header className="side">
        <div>
          <h1>Gabriel Ramos Zaude</h1>
          <p className="role">Tech Lead na Technoplus</p>
          <p className="pitch">
            Lidero um time que mantém vários produtos em produção ao mesmo tempo, sem largar o código.
          </p>
          <SectionNav />
        </div>
        <div className="reach">
          <span className="status">
            <span className="dot" aria-hidden="true" />
            Disponível para projetos freelance
          </span>
          <div className="icons">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg {...iconProps}>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg {...iconProps}>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg {...iconProps}>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="E-mail">
              <svg {...iconProps}>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="sec about" id="sobre" aria-labelledby="t-sobre">
          <h2 className="label" id="t-sobre">Sobre</h2>
          <p>
            Sou <strong>Tech Lead na Technoplus</strong>, em São Paulo. Cuido de um time multidisciplinar, com devs,
            análise funcional e marketing, que mantém vários produtos rodando para clientes ao mesmo tempo.
          </p>
          <p>
            No dia a dia, <strong>organizo as prioridades, desenho o processo do time e reviso o que vai para
            produção</strong>. Também trouxe IA para o fluxo de trabalho, onde ela poupa tempo de verdade. E sigo
            programando, principalmente em arquitetura e nas partes mais críticas dos sistemas.
          </p>
          <p>Fora da Technoplus, desenvolvo sistemas e sites para clientes, do levantamento ao deploy.</p>
        </section>

        <section className="sec" id="experiencia" aria-labelledby="t-experiencia">
          <h2 className="label" id="t-experiencia">Experiência</h2>
          <article className="job">
            <div className="when">2024 — hoje</div>
            <div>
              <h3>Tech Lead · Technoplus</h3>
              <p className="path">Entrei como estagiário e cheguei à liderança passando por júnior e pleno.</p>
              <ul className="points">
                <li>Lidero o time de desenvolvimento e defino prioridades junto com a gestão, com vários produtos em paralelo.</li>
                <li>Conduzo a modernização do sistema principal da empresa: um ERP desktop legado sendo reescrito para a web.</li>
                <li>Cuido também de produtos de assinatura eletrônica de documentos e de integrações fiscais com o governo.</li>
                <li>Desenhei o processo do time: formato de tarefa, revisão de código, CI e deploy contínuo.</li>
                <li>
                  Levei IA para o dia a dia: revisão de código assistida em todos os repositórios, agentes que transformam
                  erros de produção em tarefas e um assistente de suporte que consulta a base de conhecimento.
                </li>
              </ul>
              <ul className="tags" aria-label="Áreas">
                <li>Liderança técnica</li>
                <li>Arquitetura</li>
                <li>Modernização de legado</li>
                <li>Processo</li>
                <li>IA aplicada</li>
                <li>CI/CD</li>
                <li>Observabilidade</li>
              </ul>
            </div>
          </article>

          <article className="job">
            <div className="when">Paralelo</div>
            <div>
              <h3>Freelance</h3>
              <p className="path">Projetos para empresas e profissionais, do levantamento ao deploy.</p>
              <ul className="points">
                <li>Criação de sites institucionais.</li>
                <li>Sistemas sob medida para gestão: estoque, financeiro e operação.</li>
                <li>Produtos SaaS com atendimento automatizado por IA.</li>
              </ul>
              <ul className="tags" aria-label="Áreas">
                <li>Sites</li>
                <li>Sistemas web</li>
                <li>SaaS</li>
                <li>Automação com IA</li>
              </ul>
            </div>
          </article>
        </section>

        <section className="sec" id="formacao" aria-labelledby="t-formacao">
          <h2 className="label" id="t-formacao">Formação</h2>
          <ul className="edu">
            <li>
              <div className="when">Pós</div>
              <div>
                <h3>Engenharia de Software</h3>
                <p>PUC-Rio · EAD</p>
              </div>
            </li>
            <li>
              <div className="when">Graduação</div>
              <div>
                <h3>Sistemas de Informação</h3>
                <p>ESPM, São Paulo</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="sec contact" id="contato" aria-labelledby="t-contato">
          <h2 id="t-contato">Vamos conversar</h2>
          <p>Para projetos freelance, consultoria técnica ou só trocar ideia sobre times e engenharia.</p>
          <CopyEmail email={EMAIL} />
          <p className="alt">
            Ou pelo{" "}
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>{" "}
            e pelo{" "}
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            .
          </p>
          <p className="foot">© {new Date().getFullYear()} Gabriel Ramos Zaude</p>
        </section>
      </main>
    </div>
  );
}
