"use client";

import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { EXPERIENCE } from "../lib/experience";
import { motion, type Variants } from "framer-motion";

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
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

const inner: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  return (
    <motion.div
      className="space-y-8 max-w-3xl"
      variants={list}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {EXPERIENCE.map((item) => (
        <motion.article
          key={item.id}
          variants={card}
          className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 md:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
        >
          {item.badge ? (
            <motion.p variants={inner} className="text-xs md:text-sm uppercase tracking-widest font-semibold text-gray-400">
              {item.badge}
            </motion.p>
          ) : item.dateRange ? (
            <motion.p variants={inner} className="text-xs md:text-sm uppercase tracking-widest font-semibold text-gray-400">
              {item.dateRange}
            </motion.p>
          ) : null}

          <motion.h3 variants={inner} className="mt-3 text-xl md:text-2xl font-extrabold text-white">
            {item.title}
          </motion.h3>

          {item.org && (
            <motion.p variants={inner} className="mt-1 text-sm md:text-base text-gray-400">
              {item.org}
            </motion.p>
          )}

          {item.description && (
            <motion.p variants={inner} className="mt-4 text-[15px] leading-7 text-gray-300">
              {item.description}
            </motion.p>
          )}

          {item.linkHref && item.linkLabel && (
            <motion.div variants={inner}>
              <Link
                href={item.linkHref}
                className="mt-5 inline-flex items-center gap-2 font-semibold text-white hover:opacity-90"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.linkLabel} <FiExternalLink className="text-lg" />
              </Link>
            </motion.div>
          )}
        </motion.article>
      ))}
    </motion.div>
  );
}
