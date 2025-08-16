import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portafolio de Dario Achirica: Diseño Multimedia Creativo",
  description: "Servicios de diseño multimedia a tu medida. Explora mis trabajos como diseñador multimedia freelance.",
  openGraph: {
    title: "Portafolio de Dario Achirica: Diseño Multimedia Creativo",
    description: "Servicios de diseño multimedia a tu medida. Explora mis trabajos como diseñador multimedia freelance.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.variable} antialiased text-text-primary bg-white`}>
        {children}
      </body>
    </html>
  );
}
