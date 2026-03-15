import type { Metadata } from "next";
import { Fasthand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "@fontsource/fasthand";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`antialiased`}
        style={{ fontFamily: 'Fasthand, cursive' }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
