"use client";

import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { PROJECTS } from "../lib/projects";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.08 } },
};

const card: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "circle(0% at 50% 50%)",
    filter: "blur(8px)",
    scale: 0.98,
  },
  show: {
    opacity: 1,
    clipPath: "circle(150% at 50% 50%)",
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const inner: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm text-gray-100">
      {children}
    </span>
  );
}

export default function Projects() {
  return (
    <motion.div
      className="space-y-8 max-w-3xl"
      variants={list}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      {PROJECTS.map((p, i) => (
        <motion.article
          key={p.id}
          variants={card}
          whileHover={{ y: -2, rotate: i % 2 ? 0.2 : -0.2, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.4 }}
          className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 md:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
        >
          <motion.h3 variants={inner} className="text-2xl md:text-3xl font-extrabold text-white">
            {p.title}
          </motion.h3>

          <motion.p variants={inner} className="mt-2 text-[15px] leading-7 text-gray-300">
            {p.blurb}
          </motion.p>

          <motion.div variants={inner} className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </motion.div>

          <motion.div variants={inner} className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            {p.liveUrl && (
              <Link
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-white hover:opacity-90"
                aria-label={`Open live demo for ${p.title}`}
              >
                View Project <FiExternalLink className="text-lg" />
              </Link>
            )}

            <Link
              href={p.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white"
              aria-label={`Open GitHub repo for ${p.title}`}
            >
              <FaGithub className="text-lg" />
              <span>View on GitHub</span>
            </Link>
          </motion.div>
        </motion.article>
      ))}
    </motion.div>
  );
}
