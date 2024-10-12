import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";
import MainNavbar from "@/app/components/ui/MainNavbar";
import Footer from "./components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Futbolify",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen w-full`}>
        <NextUIProvider>
          <main>
            <MainNavbar />
            {children}
            <Footer />
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
