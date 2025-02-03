import type { Metadata } from "next";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Inter } from "next/font/google"
const inter = Inter({subsets :["latin"] , variable:"--font-inter"})
export const metadata: Metadata = {
  title: "Abhsihek's Portfolio",
  description: "Abhsihek's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={twMerge
        (inter.variable,
        "bg-[#0A192F] text-[#8892B0] antialiased font-sfMono html")}>
        {children}
      </body>
    </html>
  );
}

