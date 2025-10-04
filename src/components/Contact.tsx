"use client";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const email = "mostafagaber1234560@gmail.com";
  const github = "https://github.com/MostafaGaber135";
  const linkedin = "https://www.linkedin.com/in/mostafagaber135";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.25, margin: "-10% 0px -10% 0px" }}
      className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 md:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] max-w-3xl"
    >
      <motion.h3
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.6 }}
        className="text-3xl font-extrabold text-white"
      >
        Let’s work together
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        viewport={{ once: true, amount: 0.6 }}
        className="mt-4 text-[15px] leading-7 text-gray-300"
      >
        I’m currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
      </motion.p>

      <div className="mt-6 space-y-4">
        <motion.a
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.6 }}
          href={`mailto:${email}`}
          className="flex items-center gap-3 text-gray-200 hover:text-white"
          aria-label="Send me an email"
        >
          <FaEnvelope className="text-xl" />
          <span>{email}</span>
        </motion.a>

        <motion.a
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
          viewport={{ once: true, amount: 0.6 }}
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-200 hover:text-white"
          aria-label="Open my GitHub"
        >
          <FaGithub className="text-xl" />
          <span>github.com/MostafaGaber135</span>
        </motion.a>

        <motion.a
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          viewport={{ once: true, amount: 0.6 }}
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-200 hover:text-white"
          aria-label="Open my LinkedIn"
        >
          <FaLinkedin className="text-xl" />
          <span>linkedin.com/in/mostafagaber135</span>
        </motion.a>
      </div>

      <motion.a
        initial={{ opacity: 0, y: 10, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        viewport={{ once: true, amount: 0.6 }}
        href={`mailto:${email}`}
        className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-black hover:opacity-90"
      >
        Get In Touch
      </motion.a>
    </motion.div>
  );
}
