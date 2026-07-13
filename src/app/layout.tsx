import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | 素人沼のページ",
  description:
    "エンジニア素人沼のポートフォリオハブサイトです。私の制作物、プロフィールについてまとめています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <div className="fixed inset-0 z-[-1] bg-white blur-[1vh] dark:bg-zinc-950">
          <Image
            src="/images/hero-bg.jpeg"
            alt="Background Image"
            fill
            className="object-cover object-center opacity-55 scale-110 dark:opacity-30"
            priority
          />
        </div>
        <Header />
        <main className="flex-1 flex flex-col relative z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
