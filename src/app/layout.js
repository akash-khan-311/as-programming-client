import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "react-hot-toast";

import AuthProvider from "@/Providers/AuthProvider";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <div className="min-h-[calc(100vh-268px)]">
            <Toaster position="top-center" />
            {children}
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
