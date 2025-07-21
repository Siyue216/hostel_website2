import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { NextThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Military Boys Hostel Karad",
  description:
    "Military Boys Hostel Karad - Providing discipline, education, and a nurturing environment for young minds to grow and excel.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </NextThemeProvider>
      </body>
    </html>
  );
}
