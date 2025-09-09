"use client";

import { motion } from "framer-motion";

export default function About() {
    const skills = [
        "PHP",
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "MySQL",
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "Git & GitHub",
    ];

    return (
        <section id="about" className="py-100 px-35 md:px-35 max-w-screen-2xl text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-6"
            >
                About Me
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-300 leading-relaxed mb-10"
            >
                Hi, I’m <span className="font-semibold">Karthi</span> 👋, A passionate and results-driven web developerwith 6 years of hands-on experience in{" "}
                <b>PHP</b>, specializing in building robust web applications and dynamic websites for diverse clients. Adept with foundational technologies including <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>Bootstrap </b>, <b>TailwindCSS</b> and <b>MySQL</b>,
                with a proven track record of delivering clean, maintainable code and intuitive user interfaces.Over the past <b>3 years</b>, developed strong expertise in Node.js for scalable backend solutions, and recently expanded into modern frontend development using <b>ReactJS</b> and <b>Next.js</b> to create engaging, high-performance user experiences.
            </motion.p>

            {/* Skills Grid */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: { staggerChildren: 0.15 },
                    },
                }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
                {skills.map((skill, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5 }}
                        className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md hover:scale-105 transition"
                    >
                        {skill}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
