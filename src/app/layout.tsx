import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrimeTime Painting & Remodeling | Wichita, KS",
  description:
    "Professional painting and remodeling services in Wichita, KS. We specialize in residential and commercial renovations. Contact us today!",
  keywords: [
    "residential",
    "exterior",
    "interior",
    "painting",
    "cabinet painting",
    "remodeling",
    "home improvement",
    "Wichita KS",
    "PrimeTime Painting",
    "commercial",
    "renovations",
    "design",
    "construction",
  ],
  authors: [
    {
      name: "PrimeTime Painting & Remodeling",
      url: "https://primetimewichita.com",
    },
  ],
  robots: "index, follow",
  openGraph: {
    title: "PrimeTime Painting & Remodeling",
    description: "Expert painting and remodeling services in Wichita, KS.",
    url: "https://primetimewichita.com",
    type: "website",
    images: [
      {
        url: "https://primetimewichita.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PrimeTime Painting & Remodeling",
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
      <head>
        <meta
          name="google-site-verification"
          content="DpXEObJq1vGszFEXsW8HxAaJpkLQLqChtXvBoSNRZMA"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed z-50 w-full">
          <Navigation />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
