import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/src/Landingpages/layout/navbar";
import Footer from "@/src/Landingpages/layout/footer";
import { SessionProvider } from 'next-auth/react'
import AuthProvider from "@/src/components/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ideavate",
  description: "Next Enterprise Web Development Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <AuthProvider>
        <Navbar/>
        {children}
        <Footer/>
        </AuthProvider>

       
      </body>
    </html>
  );
}
