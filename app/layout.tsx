import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanish Panchal | AI + Systems Engineer",
  description: "Portfolio of Tanish Panchal - Building Intelligent Systems & Scalable Experiences",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {/* Cinematic Background Layer */}
        <div className="keynote-gradient-bg" />
        <div className="keynote-noise" />
        
        {/* Scroll Progress Indicator */}
        <div className="scroll-progress" />
        
        {children}
      </body>
    </html>
  );
}
