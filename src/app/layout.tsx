import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "../components/Providers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Karthi Portfolio",
  description: "My personal portfolio built with Next.js + Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Providers>
          <Navbar />
          <div className="pt-20">{children}</div> {/* 👈 padding to avoid overlap */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
