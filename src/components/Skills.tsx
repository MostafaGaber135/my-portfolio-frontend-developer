"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { TECH_SKILLS, INTERPERSONAL, LANGUAGES } from "../lib/skills";

const titleReveal: Variants = {
  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  show: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const chipList: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

const chipItem: Variants = {
  hidden: { opacity: 0, rotateX: -90, y: 10 },
  show: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { type: "spring", stiffness: 600, damping: 30, mass: 0.6 },
  },
};

function Chip({ children }: { children: ReactNode }) {
  return (
    <motion.span
      variants={chipItem}
      style={{ transformPerspective: 600 }}
      whileHover={{ y: -2, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 20, mass: 0.3 }}
      className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-gray-100 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
    >
      {children}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <div className="space-y-10 max-w-3xl">
      <section>
        <motion.h3
          variants={titleReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-2xl font-bold text-white"
        >
          Technical Skills
        </motion.h3>
        <motion.div
          variants={chipList}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 flex flex-wrap gap-3"
        >
          {TECH_SKILLS.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </motion.div>
      </section>

      <section>
        <motion.h3
          variants={titleReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-2xl font-bold text-white"
        >
          Interpersonal Skills
        </motion.h3>
        <motion.div
          variants={chipList}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 flex flex-wrap gap-3"
        >
          {INTERPERSONAL.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </motion.div>
      </section>

      <section>
        <motion.h3
          variants={titleReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-2xl font-bold text-white"
        >
          Languages
        </motion.h3>
        <motion.div
          variants={chipList}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 flex flex-wrap gap-3"
        >
          {LANGUAGES.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
