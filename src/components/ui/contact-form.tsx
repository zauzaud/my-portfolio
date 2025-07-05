"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
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
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
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

      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000); // Mostra sucesso por 3 segundos
      setCooldown(30); // 30 segundos de cooldown
      formRef.current?.reset();
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setIsError(true);
      setTimeout(() => setIsError(false), 3000); // Mostra erro por 3 segundos
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
      <div
        className={`relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border p-6 transition-all duration-300 ${
          isSubmitting
            ? "border-blue-500/70 animate-pulse"
            : isSuccess
            ? "border-green-500/70 animate-pulse"
            : isError
            ? "border-red-500/70 animate-pulse"
            : "border-zinc-700/50 hover:border-blue-500/50"
        }`}
      >
        <div
          className={`absolute -inset-1 rounded-xl blur transition duration-1000 ${
            isSubmitting
              ? "bg-gradient-to-r from-blue-600/10 to-blue-800/10 opacity-100 animate-pulse"
              : isSuccess
              ? "bg-gradient-to-r from-green-600/10 to-green-800/10 opacity-100 animate-pulse"
              : isError
              ? "bg-gradient-to-r from-red-600/10 to-red-800/10 opacity-100 animate-pulse"
              : "bg-gradient-to-r from-blue-600/10 to-blue-800/10 opacity-25 hover:opacity-100 hover:duration-200"
          }`}
        ></div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-6">Me envie uma mensagem!</h3>

          {/* Loading Overlay */}
          {isSubmitting && (
            <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute top-10 left-10 w-2 h-2 bg-blue-500/30 rounded-full animate-ping"></div>
                <div
                  className="absolute top-20 right-8 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute bottom-16 left-6 w-1.5 h-1.5 bg-blue-300/20 rounded-full animate-bounce"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute bottom-8 right-12 w-2 h-2 bg-blue-600/25 rounded-full animate-ping"
                  style={{ animationDelay: "1.5s" }}
                ></div>
              </div>

              <div className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-zinc-700 border-t-blue-500 animate-spin"></div>
                  <div
                    className="absolute inset-0 w-16 h-16 mx-auto rounded-full border-4 border-transparent border-t-blue-400 animate-spin"
                    style={{
                      animationDuration: "1.5s",
                      animationDirection: "reverse",
                    }}
                  ></div>
                  <div
                    className="absolute inset-0 w-16 h-16 mx-auto rounded-full border-2 border-transparent border-b-blue-300 animate-spin"
                    style={{ animationDuration: "2s" }}
                  ></div>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-medium text-white animate-pulse">
                    Enviando mensagem...
                  </div>
                  <div className="text-sm text-zinc-400 animate-pulse">
                    Aguarde um momento
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Success Overlay */}
          {isSuccess && (
            <div className="absolute inset-0 bg-green-900/80 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
              <div className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500 flex items-center justify-center animate-pulse">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="absolute -inset-2 rounded-full border-4 border-green-400 animate-ping"></div>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-medium text-white animate-pulse">
                    Mensagem enviada!
                  </div>
                  <div className="text-sm text-green-300">
                    Retornarei em breve
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Error Overlay */}
          {isError && (
            <div className="absolute inset-0 bg-red-900/80 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
              <div className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500 flex items-center justify-center animate-pulse">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div className="absolute -inset-2 rounded-full border-4 border-red-400 animate-ping"></div>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-medium text-white animate-pulse">
                    Erro no envio
                  </div>
                  <div className="text-sm text-red-300">
                    Tente novamente mais tarde
                  </div>
                </div>
              </div>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-4">
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
                  className="bg-zinc-900/50 border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20 h-8"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Textarea
                name="message"
                placeholder="Sua Mensagem"
                rows={4}
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20 min-h-[105px]"
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
