"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  // Função para formatar o telefone
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    let formatted = numbers;
    if (numbers.length <= 11) {
      formatted = numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    return formatted;
  };

  // Handler para o input de telefone
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    e.target.value = formatted;
  };

  // Timer de cooldown
  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [cooldown]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key:
            process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
            "de175411-8f6b-4f3b-9221-1f738d167b80",
          Nome: formData.get("name"),
          "E-mail": formData.get("email"),
          Telefone: formData.get("phone"),
          Assunto: formData.get("subject"),
          Mensagem: formData.get("message"),
          // Campos do sistema
          from_name: "Portfolio Gabriel Zaude",
          subject: "Novo contato recebido pelo portfolio",
        }),
      });

      if (!response.ok) {
        throw new Error("Erro na requisição");
      }

      toast.success("Mensagem enviada com sucesso! Retornarei em breve.", {
        duration: 5000,
        position: "top-right",
      });

      setCooldown(30); // 30 segundos de cooldown
      formRef.current?.reset();
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente mais tarde.", {
        duration: 5000,
        position: "top-right",
      });
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isButtonDisabled = isSubmitting || cooldown > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-blue-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-blue-800/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-6">Me envie uma mensagem!</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input
                  name="name"
                  placeholder="Seu Nome"
                  required
                  className="bg-zinc-900/50 border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20 h-11"
                />
              </div>
              <div className="space-y-2">
                <Input
                  name="email"
                  type="email"
                  placeholder="Seu Email"
                  required
                  className="bg-zinc-900/50 border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20 h-11"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input
                  name="phone"
                  placeholder="(00) 00000-0000"
                  maxLength={15}
                  onInput={handlePhoneChange}
                  className="bg-zinc-900/50 border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20 h-11"
                />
              </div>
              <div className="space-y-2">
                <Input
                  name="subject"
                  placeholder="Assunto"
                  required
                  className="bg-zinc-900/50 border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20 h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Textarea
                name="message"
                placeholder="Sua Mensagem"
                rows={4}
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20 min-h-[120px]"
              />
            </div>

            <div className="pt-1">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 border-0 h-11 text-base font-medium"
                disabled={isButtonDisabled}
              >
                {isSubmitting ? (
                  <>Enviando...</>
                ) : cooldown > 0 ? (
                  <>Aguarde {cooldown}s para enviar novamente</>
                ) : (
                  <>
                    Enviar Mensagem <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
