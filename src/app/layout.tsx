import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <header>
          <Navbar></Navbar>
        </header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
