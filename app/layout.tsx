import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "backtick",
  description: "A social network service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header/>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            {children}
          </main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
