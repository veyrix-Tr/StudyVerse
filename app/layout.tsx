import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: "Studyverse - Career Guidance Platform",
  description: "Studyverse: Bridging the gap between education and career success with AI-powered guidance",
  viewport: "width=device-width, initial-scale=1",
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
          <Toaster 
            position="top-right"
            toastOptions={{
              style: {
                background: '#1f2937',
                color: '#f3f4f6',
                border: '1px solid #374151',
              },
              success: {
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#f3f4f6',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#f3f4f6',
                },
              },
            }}
          />
      </body>
    </html>
  );
}
