"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio built with Next.js, TailwindCSS, and Framer Motion.",
        github: "https://github.com/karthi-06g/my-portfolio",
        demo: "https://my-portfolio-theta-three.vercel.app",
    },
    {
        title: "E-commerce App",
        description: "A modern e-commerce web app with shopping cart and payment integration.",
        github: "https://github.com/yourname/ecommerce",
        demo: "https://ecommerce-demo.com",
    },
    {
        title: "Chat App",
        description: "A real-time chat application built with Socket.IO and Next.js.",
        github: "https://github.com/yourname/chat-app",
        demo: "https://chat-demo.com",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.2, // 👈 delay between cards
                        },
                    },
                }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </motion.div>
        </section>
    );
}
