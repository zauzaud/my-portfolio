"use client";

import { motion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

const experiences = [
  {
    title: "Gerente de Projeto & Full Stack Developer",
    company: "Technoplus",
    period: "Jan 2025 - Presente",
    description:
      "Lidero equipes no desenvolvimento de projetos web, coordenando todas as etapas do ciclo de vida do software. Desenvolvo arquiteturas Full Stack utilizando principalmente React, Next.js, Node.js e TypeScript. Implemento soluções de IA para automação e otimização de processos.",
  },
  {
    title: "Full Stack Developer",
    company: "Technoplus",
    period: "Ago 2024 - Dez 2024",
    description:
      "Desenvolvi e dei manutenção em aplicações web Full Stack utilizando tecnologias modernas. Foco em React, Next.js, Node.js, TypeScript e integração com APIs RESTful. Criei e implementei soluções que melhoraram significativamente a performance e usabilidade das aplicações.",
  },
  {
    title: "Estagiário de TI",
    company: "Technoplus",
    period: "Mai 2024 - Ago 2024",
    description:
      "Iniciei minha transição para a área de tecnologia, prestando suporte técnico ao cliente e participando de projetos de desenvolvimento web. Trabalhei com sistemas de instrumentos financeiros, contribuindo para soluções que otimizaram processos internos e melhoraram a experiência do usuário.",
  },
  {
    title: "Experiência em Direito",
    company: "Área Jurídica",
    period: "2017 - 2020",
    description:
      "Atuei por 3 anos na área jurídica durante graduação em Direito, desenvolvendo competências analíticas, comunicação eficaz e resolução de problemas complexos. Gerenciei casos jurídicos aplicando pensamento estruturado e atenção aos detalhes - habilidades que hoje utilizo no desenvolvimento de software e gestão de projetos.",
  },
];

export function Timeline() {
  const isMobile = useMobile();

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${
              index % 2 === 0 ? "md:pl-10" : "md:pr-10"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-blue-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-blue-800/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
