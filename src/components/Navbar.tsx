"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <nav className="flex justify-between items-center py-4 px-6 shadow-md bg-white/70 dark:bg-gray-900/70 backdrop-blur-md fixed top-0 left-0 w-full z-50">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
                Karthi
            </Link>

            {/* Links */}
            <div className="flex gap-6">
                <Link href="/" className="hover:text-blue-500 dark:hover:text-blue-400">
                    Home
                </Link>
                <Link href="/projects" className="hover:text-blue-500 dark:hover:text-blue-400">
                    Projects
                </Link>
                <Link href="/about" className="hover:text-blue-500 dark:hover:text-blue-400">
                    About
                </Link>
            </div>

            {/* Theme Toggle */}
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
            >
                {mounted && theme === "dark" ? (
                    <FaSun className="text-yellow-400" />
                ) : (
                    <FaMoon className="text-gray-800" />
                )}
            </button>
        </nav>
    );
}
