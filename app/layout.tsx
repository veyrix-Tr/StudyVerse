import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studyverse - Career Guidance Platform",
  description: "Studyverse: Bridging the gap between education and career success with AI-powered guidance",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
          {children}
      </body>
    </html>
  );
}
