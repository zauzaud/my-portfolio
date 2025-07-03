"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 h-full transition-all duration-300 hover:border-blue-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-blue-800/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative">
          <div className="text-center font-medium text-lg">{name}</div>
        </div>
      </div>
    </motion.div>
  );
}
