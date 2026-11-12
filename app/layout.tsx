import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://emmanuel-portfolio-pi-inky.vercel.app/"),

  title: {
    default: "Emmanuel Ose | Frontend Developer",
    template: "%s | Emmanuel Ose",
  },
  description: "Emmanuel Ose, Lagos Based web Developer, Frontend Developer, Product Builder with 1+ year experience building responsive, accessible, and user-friendly web applications using React, Next.js, TypeScript, and Tailwind CSS",

  keywords: [
    "Emmanuel Ose",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer Portfolio",
  ],

  authors:[{ name: "Emmanuel Ose" }],
  creator: "Emmanuel Ose",
  openGraph: {
    type:"website",
    url: "https://emmanuel-portfolio-pi-inky.vercel.app/",
    title: "Emmanuel Ose | Frontend Developer",
    description: "Emmanuel Ose, Lagos Based web Developer, Frontend Developer, Product Builder with 1+ year experience building responsive, accessible, and user-friendly web applications using React, Next.js, TypeScript, and Tailwind CSS",
    siteName: "Emmanuel Ose Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Ose | Frontend Developer",
    description: "Emmanuel Ose, Lagos Based web Developer, Frontend Developer, Product Builder with 1+ year experience building responsive, accessible, and user-friendly web applications using React, Next.js, TypeScript, and Tailwind CSS",
    creator: "@Iamemmaose",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
