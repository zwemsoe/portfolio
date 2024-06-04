import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";
import { getCurrentTrack } from "@/lib/spotify";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Zwe Min Soe",
  description: "React & Node Enthusiast.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const track = await getCurrentTrack();

  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Navbar track={track} />
            {children}
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </>
  );
}
