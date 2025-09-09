"use client";

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-12">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center px-6">

                {/* Copyright */}
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    © {new Date().getFullYear()} Karthick. All rights reserved.
                </p>

            </div>
        </footer>
    );
}
