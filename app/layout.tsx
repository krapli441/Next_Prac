import "./globals.css";
import Header from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "previewpage",
  description: "introducing testpilot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          width: "100vw",
          height: "100vh",
        }}
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
