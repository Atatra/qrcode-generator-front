import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const segoeui = localFont({
  src: "../../public/fonts/segoe-ui.woff",
  variable: "--font-segoe-ui",
  weight: "400 600 700",
});

export const metadata: Metadata = {
  title: "QRCode Generator",
  description: "A QRCode Generator App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${segoeui.variable} ${segoeui.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
