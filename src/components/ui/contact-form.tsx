"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simple notification instead of toast
    alert(
      "Mensagem enviada! Obrigado por entrar em contato. Retornarei em breve."
    );

    setIsSubmitting(false);
    e.currentTarget.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-blue-500/50 h-full flex flex-col">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-blue-800/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-6">Me envie uma mensagem!</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                placeholder="Seu Nome"
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Seu Email"
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20"
              />
            </div>
            <div className="space-y-2">
              <Input
                placeholder="Assunto"
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Sua Mensagem"
                rows={4}
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 border-0"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Enviando...</>
              ) : (
                <>
                  Enviar Mensagem <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
