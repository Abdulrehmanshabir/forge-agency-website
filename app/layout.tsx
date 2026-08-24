import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Forge & Co. — Software, Web & Digital Marketing Agency",
  description:
    "We build digital experiences that grow businesses: software development, web & mobile apps, e-commerce, UI/UX and digital marketing for ambitious companies.",
  keywords: [
    "software agency",
    "web development",
    "digital marketing agency",
    "mobile app development",
    "UI UX design",
    "e-commerce development",
  ],
  openGraph: {
    title: "Forge & Co. — We Build Digital Experiences That Grow Businesses",
    description:
      "Software development, web & mobile apps, digital marketing and AI automation for ambitious companies.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} antialiased bg-ink text-fg flex flex-col min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
