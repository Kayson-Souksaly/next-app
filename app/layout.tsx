// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
// (optional) next/font imports...

export const metadata: Metadata = {
  title: "next-app",
  description: "Next + Tailwind v4",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={/* inter.className or undefined */ undefined}>
        {children}
      </body>
    </html>
  );
}
