import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeedbackButton } from "@/components/FeedbackButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alongside AI Basics - Free AI Education for Families",
  description: "Learn to use AI safely and effectively. Free comprehensive courses from The AI Ark covering AI basics, practical applications, safety, and accessibility.",
  keywords: ["AI education", "learn AI", "AI for families", "AI safety", "ChatGPT tutorial", "Claude tutorial"],
  openGraph: {
    title: "Alongside AI Basics - Free AI Education for Families",
    description: "Learn to use AI safely and effectively. Free comprehensive courses covering AI basics, prompts, and practice guides.",
    url: "https://alongside-ai-basics.netlify.app",
    siteName: "Alongside AI Basics",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alongside AI Basics - Free AI Education",
    description: "Learn AI safely with free courses for families. 40+ prompts, practice guides, and resources.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        {/* Plausible Analytics - Privacy-friendly, GDPR compliant */}
        <script
          defer
          data-domain="alongside-ai-basics.netlify.app"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FeedbackButton />
      </body>
    </html>
  );
}
