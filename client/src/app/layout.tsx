import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FeeditBack",
  description: "Collect feedbacks and share easily over social media",
  openGraph: {
    title: "FeeditBack",
    description: "Collect feedbacks and share easily over social media",
    type: "website",
    locale: "en_US",
    url: "https://feeditback-snehasahu.vercel.app/",
    images: [
      {
        url: "https://res.cloudinary.com/dhnkuonev/image/upload/v1722158086/Screenshot_2024-07-28_144256_sbny2d.png",
        width: 1200,
        height: 630,
        alt: "FeeditBack",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen bg-grid-zinc-50">
            <div className="bg-transparent rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 p-4">
              <div className="container mx-auto flex flex-row justify-between items-center gap-4 sm:gap-0">
                <Link href="/" className="text-xl font-bold">
                  FeeditBack
                </Link>
              </div>
            </div>

            <main className="flex-grow container mx-auto px-4 py-4">
              {children}
            </main>

            <div className="bg-transparent text-black p-4">
              <div className="container mx-auto text-center flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
                <p className="text-sm sm:text-base">
                  &copy; 2024 FeeditBack. All rights reserved.
                </p>
                <div className="">
                  <a
                    href="https://github.com/SnehaSahu17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 hover:text-gray-800"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sneha-sahu-7117691b7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 hover:text-gray-800"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://x.com/SSneha1712"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 hover:text-gray-800"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Providers>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
