import type { Metadata } from "next";
import { Roboto , Geist_Mono } from "next/font/google";
import "@/app/styles/globals.css";

const robotoSans = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkyeMarvel Innovations",
  description: "SkyeMarvel Innovations...the art of digital excellence - is a unique and innovative company that specializes in providing cutting-edge solutions to meet the needs of our clients. Our team of experts is dedicated to delivering high-quality products and services that exceed expectations.",
  openGraph: {
    title: "SkyeMarvel Innovations",
    description: "The art of digital excellence. Discover cutting-edge solutions tailored to your needs.",
    url: "https://skyemarvelinnovations.com",
    siteName: "SkyeMarvel Innovations",
    type: "website",
    images: [
      {
        url: "https://skyemarvelinnovations.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "SkyeMarvel Innovations",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
