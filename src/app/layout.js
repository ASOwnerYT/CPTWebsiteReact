import localFont from "next/font/local";
import "./globals.css";
import "highlight.js/styles/github-dark.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import BackToTopButton from "./components/BackToTopButton";

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
  title: "Learn Computer Programming",
  description: "Learn HTML, CSS, Javascript, Python and more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <BackToTopButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
