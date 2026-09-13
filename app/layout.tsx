import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Astha Singh — Fashion Management",
  description:
    "Astha Singh is a Fashion Management student at NIFT Mumbai with experience across product development, merchandising, e-commerce and marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}