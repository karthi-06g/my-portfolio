"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  github: string;
  demo: string;
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export default function ProjectCard({
  title,
  description,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 hover:shadow-xl transition"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex space-x-4">
        <a
          href={github}
          target="_blank"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
        >
          <FaGithub /> Code
        </a>
        <a
          href={demo}
          target="_blank"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition"
        >
          <FaExternalLinkAlt /> Live Demo
        </a>
      </div>
    </motion.div>
  );
}
