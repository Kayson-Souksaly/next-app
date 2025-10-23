// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// (optional) next/font imports...

export const metadata: Metadata = {
  title: "next-app",
  description: "Next + Tailwind v4",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="winter">
      <body className={/* inter.className or undefined */ undefined}>
        <div className="flex flex-col min-h-screen max-w-[900px] mx-auto bg-white text-sm">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
