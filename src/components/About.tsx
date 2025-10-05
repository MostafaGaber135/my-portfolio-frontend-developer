"use client";

import { motion, type Variants } from "framer-motion";

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
      <motion.div variants={group} className="max-w-2xl space-y-4 text-[17px] leading-8 text-gray-300">
        <motion.p variants={item}>
          Front-end Development graduate from the{" "}
          <strong className="text-white">Egyptian E-Learning University</strong>.
          Proficient in HTML, CSS, JavaScript (ES6+), TypeScript, and React.
        </motion.p>

        <motion.p variants={item}>
          Passionate about building responsive, accessible, and maintainable web
          applications. Completed a{" "}
          <strong className="text-white">Front-end and Cross-Platform Mobile Development</strong>{" "}
          training program at ITI, gaining hands-on experience building modern, responsive web solutions.
        </motion.p>

        <motion.p variants={item}>
          Consistently deliver high-quality, production-ready applications that
          highlight my ability to turn ideas into impactful digital solutions.
        </motion.p>
      </motion.div>

      <motion.div
        variants={card}
        className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
      >
        <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-gray-400">
          Dec 2024 — Apr 2025
        </p>

        <h3 className="mt-3 text-xl md:text-2xl font-extrabold text-white">
          Front-end and Cross-Platform Mobile Developer
        </h3>

        <p className="mt-1 text-sm md:text-base text-gray-400">Information Technology Institute (ITI)</p>

        <p className="mt-4 text-[15px] leading-7 text-gray-300">
          Developing modern web and mobile applications using React, Next.js, and cross-platform technologies.
          Focusing on creating responsive, user-friendly interfaces with best practices.
        </p>
      </motion.div>
    </motion.div>
  );
}
