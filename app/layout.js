import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import AuthProvider from "@/src/components/AuthProvider";
import { UserProvider } from "@/app/context/user";

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
          <UserProvider>
              {children}
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}