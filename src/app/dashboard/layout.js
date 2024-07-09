import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import Footer from "@/components/Shared/Footer";
import Loader from "@/components/Shared/Loader";
import ProtectedRoute from "@/ProtectedRoute/ProtectedRoute";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default function DashboardLayout({ children }) {
  return (
    <section className={`${inter.className} relative min-h-screen md:flex`}>
      <ProtectedRoute>
        <Sidebar />
        <Toaster />
        <Suspense fallback={<Loader />}>
          <div className="flex-1  md:ml-64">
            <div className="p-5">{children}</div>
          </div>
        </Suspense>
      </ProtectedRoute>
    </section>
  );
}
