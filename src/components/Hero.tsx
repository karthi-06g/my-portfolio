"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-20">
            {/* Profile Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Image
                    src="/profile.jpg" // 👈 put your profile image in public/profile.jpg
                    alt="Karthi"
                    width={150}
                    height={150}
                    className="rounded-full border-4 border-gray-300 dark:border-gray-700 shadow-lg"
                />
            </motion.div>

            {/* Text */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="mt-6"
            >
                <h1 className="text-3xl font-bold">Hey, I’m <span className="text-blue-500">Karthi 👋</span></h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl">
                    I’m a frontend developer who loves building modern web apps with <b>Next.js</b>, <b>TypeScript</b>, and <b>TailwindCSS</b>.
                </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex gap-6 mt-6 text-2xl"
            >
                <a href="https://github.com/yourusername" target="_blank" className="hover:text-blue-500">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-blue-500">
                    <FaLinkedin />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" className="hover:text-blue-500">
                    <FaTwitter />
                </a>
            </motion.div>
        </section>
    );
}
