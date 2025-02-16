import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import Navbar from "./components/Navbar.tsx"
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Triivu",
  description: "Website of Triivu app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
