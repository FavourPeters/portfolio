import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anjaFont = localFont({
  src: "../public/fonts/Anja Eliane.ttf",
  variable: "--font-anja",
  style: "normal",
});

export const metadata = {
  title: "Favour Peters",
  description: "Peters Ledum Favour Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anjaFont.variable} antialiased`}
      >
        <Navbar />
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
