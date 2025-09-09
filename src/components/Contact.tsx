"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");

        emailjs
            .send(
                "service_karthi0605", // replace with EmailJS service ID
                "template_2p14kl9", // replace with template ID
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                },
                "y7QffWP5YxwM7D38N" // replace with EmailJS public key
            )
            .then(
                () => {
                    setStatus("✅ Message sent successfully!");
                    setForm({ name: "", email: "", message: "" });
                },
                (error) => {
                    console.error(error);
                    setStatus("❌ Failed to send message. Try again later.");
                }
            );
    };

    return (
        <section id="contact" className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-6"
            >
                📩 Contact Me
            </motion.h2>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
                {status && <p className="text-center mt-2">{status}</p>}
            </form>
        </section>
    );
}
