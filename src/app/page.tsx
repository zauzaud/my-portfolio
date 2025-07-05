import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/project-card";
import { SkillBadge } from "@/components/ui/skill-badge";
import { Timeline } from "@/components/ui/timeline";
import { ContactForm } from "@/components/ui/contact-form";
import { CreativeHero } from "@/components/ui/creative-hero";
import { FloatingNav } from "@/components/ui/floating-nav";
import { MouseFollower } from "@/components/ui/mouse-follower";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassmorphicCard } from "@/components/ui/glassmorphic-card";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">
                  Software Engineer & Creative Developer
                </span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-800/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Olá, eu sou</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Gabriel Zaude
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              Desenvolvo experiências digitais excepcionais com código,
              criatividade e uma paixão pela inovação.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-blue-800 border-0">
                <span className="relative z-10 flex items-center">
                  Ver Projetos{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 bg-transparent"
              >
                Contato
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com/zauzaud"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/gabriel-ramos-8558b6193/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>

              <Link href="mailto:gabriel.zaude@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Sobre Mim"
            subtitle="Minha jornada e experiências"
          />

          <div className="max-w-4xl mx-auto mt-16">
            <GlassmorphicCard>
              <p className="text-lg text-zinc-300">
                Sou um desenvolvedor de software especializado em criar
                experiências digitais excepcionais. Minha especialidade é o
                desenvolvimento Full Stack com React, TypeScript e Next.js.
              </p>
              <p className="text-lg text-zinc-300 mt-4">
                Minha jornada na tecnologia começou com uma forte base em
                desenvolvimento de software pela ESPM. Trabalhei com diversas
                empresas e clientes para criar experiências digitais intuitivas,
                performáticas e acessíveis.
              </p>
              <p className="text-lg text-zinc-300 mt-4">
                Quando não estou programando, você pode me encontrar explorando
                novas tecnologias, contribuindo com projetos open-source e me
                mantendo atualizado com as últimas tendências da indústria.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Nome</div>
                    <div className="font-medium">Gabriel Ramos Zaude</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">gabriel.zaude@gmail.com</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Localização</div>
                    <div className="font-medium">São Paulo, Brasil</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Disponibilidade</div>
                    <div className="font-medium text-green-500 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      Disponível para trabalho freelance e full-time
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">
                  Download Currículo
                </Button>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Minhas Habilidades"
            subtitle="Tecnologias que trabalho"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="JavaScript" />
            <SkillBadge name="TypeScript" />
            <SkillBadge name="React" />
            <SkillBadge name="Next.js" />
            <SkillBadge name="Node.js" />
            <SkillBadge name="HTML/CSS" />
            <SkillBadge name="Tailwind CSS" />
            <SkillBadge name="Python" />
            <SkillBadge name="PostgreSQL" />
            <SkillBadge name="AWS" />
            <SkillBadge name="Docker" />
            <SkillBadge name="Git" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Projetos"
            subtitle="Alguns dos meus trabalhos recentes"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Plataforma de Gestão de Suporte - RAG"
              description="Uma plataforma de gestão de suporte com IA RAG para melhorar a eficiência e a precisão das respostas."
              tags={[
                "Python",
                "HTML",
                "CSS",
                "JavaScript",
                "Banco de Dados Vetorial",
              ]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl=""
              repoUrl="https://github.com/zauzaud"
            />
            <ProjectCard
              title="Projeto Gestão Web"
              description="Um projeto ERP de gestão para cooperativas e empresas de diversas áreas."
              tags={[
                "React",
                "Next.js",
                "Tailwind CSS",
                "TypeScript",
                "PostgreSQL",
              ]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://gestao-web-next.vercel.app/"
              repoUrl="https://github.com/zauzaud"
            />
            <ProjectCard
              title="TCC - Briut Solutions"
              description="Projeto de conclusão de curso para a ESPM - plataforma de gestão de clínicas médicas."
              tags={[
                "Next.js",
                "TypeScript",
                "React",
                "PostgreSQL",
                "Tailwind CSS",
              ]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://projeto-briut.vercel.app/"
              repoUrl="https://github.com/zauzaud"
            />
            <ProjectCard
              title="DXIA - Controle de Estoque"
              description="Plataforma com gestão de estoque para produtos e controle financeiro."
              tags={[
                "TypeScript",
                "React",
                "PostgreSQL",
                "Tailwind CSS",
                "Next.js",
              ]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://dxia.vercel.app/login"
              repoUrl="https://github.com/zauzaud"
            />
            <ProjectCard
              title="A Grande Roda"
              description="Plataforma para gestão de clinicas psicologicas e de saúde mental - Parceria com a ESPM."
              tags={["HTML", "CSS", "JavaScript", "MySQL"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl=""
              repoUrl="https://github.com/zauzaud"
            />
            <ProjectCard
              title="Blume Consultoria"
              description="Site institucional completo para a Blume Consultoria, empresa de consultoria financeira."
              tags={["Next.js", "Tailwind CSS", "TypeScript"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://blume-website.vercel.app/home"
              repoUrl="https://github.com/zauzaud"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Experiência Profissional"
            subtitle="Minha jornada profissional"
          />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Entre em Contato"
            subtitle="Vamos trabalhar juntos"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">gabriel.zaude@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">
                      linkedin.com/in/gabriel-ramos-8558b6193/
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/zauzaud</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Status Atual</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Disponível para trabalho freelance e full-time</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Gabriel
              </span>
              <span className="text-white">Zaude</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Gabriel Zaude. Todos os direitos
              reservados.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/zauzaud"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/gabriel-ramos-8558b6193/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>

            <Link href="mailto:gabriel.zaude@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
