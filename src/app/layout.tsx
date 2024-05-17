import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"
import "./globals.css";
import { Jura } from 'next/font/google'
import Script from "next/script";

const jura = Jura({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeFlix",
  description: "CodeFlix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={jura.className}>
        <header>
          <Navbar></Navbar>
        </header>
        {children}
        <Footer></Footer>


      </body>
    </html>
  );
}
