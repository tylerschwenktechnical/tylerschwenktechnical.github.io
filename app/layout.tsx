import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tyler Schwenk Technical LLC | Full-Stack Software Development",
  description: "Professional full-stack software development services specializing in bioacoustics, machine learning, and wildlife conservation technology.",
  keywords: ["software development", "bioacoustics", "machine learning", "full-stack", "Tyler Schwenk"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
