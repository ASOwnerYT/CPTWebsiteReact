import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ChatwootWidget from "./components/ChatwootWidget"

// Add spyware
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Te Atatu Computer Repair, IT Support & Web Design",
  description: "Your Local Experts for PCs, Laptops & More.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ChatwootWidget />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-TN7ZL1Y4CC" />
      </body>
    </html>
  );
}
