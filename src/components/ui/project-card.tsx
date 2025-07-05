"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  gradient?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  demoUrl,
  repoUrl,
  gradient,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="relative h-full overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-2xl group-hover:shadow-blue-500/20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-blue-800/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative h-full flex flex-col">
          <div className="relative overflow-hidden h-48 rounded-t-xl">
            {/* Gradiente temático personalizado */}
            <div
              className={`absolute inset-0 ${
                gradient ||
                "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"
              } transition-all duration-700 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            ></div>

            {/* Overlay suave para suavizar contraste - só embaixo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>

            {/* Overlay hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>

            {/* Padrão geométrico sutil */}
            <div
              className="absolute inset-0 opacity-10 z-5"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          <div className="p-6 flex-grow">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-zinc-400 mb-4">{description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-zinc-700/50 hover:bg-zinc-700 text-zinc-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex justify-between mt-auto pt-4 border-t border-zinc-700/30">
              <Button
                variant="ghost"
                size="sm"
                className="text-zinc-400 hover:text-white hover:bg-zinc-700/30 backdrop-blur-sm transition-all duration-300"
                asChild
              >
                <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Repositório
                </Link>
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 border-0 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                asChild
              >
                <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                  Ver Projeto
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="absolute top-3 right-3 z-40">
            <div className="relative">
              <div
                className={`w-3 h-3 rounded-full ${
                  isHovered ? "bg-blue-500" : "bg-zinc-500"
                } transition-all duration-300`}
              ></div>
              {isHovered && (
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-blue-500 animate-ping"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
