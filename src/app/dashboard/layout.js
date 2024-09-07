import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import Footer from "@/components/Shared/Footer";
import Loader from "@/components/Shared/Loader";
import ProtectedRoute from "@/ProtectedRoute/ProtectedRoute";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard || AS Programming",
  description:
    "AS Programming offers a wide range of IT-related courses, including web development, data science, cybersecurity, cloud computing, and full-stack JavaScript development. Start your learning journey with us and achieve your career goals.",
  keywords:
    "AS Programming, IT courses, web development, data science, cybersecurity, cloud computing, full-stack development, programming courses, online learning",
  author: "Md Akash Khan",
  openGraph: {
    type: "website",
    url: "https://yourwebsite.com",
    title: "AS Programming - Learn and Master IT Skills",
    description:
      "AS Programming offers a wide range of IT-related courses, including web development, data science, cybersecurity, cloud computing, and full-stack JavaScript development. Start your learning journey with us and achieve your career goals.",

    site_name: "AS Programming",
  },
};

export default function DashboardLayout({ children }) {
  return (
    <div className={`${inter.className} relative min-h-screen lg:flex`}>
      <ProtectedRoute>
        <Sidebar />
        <Toaster />
        {/* <Suspense fallback={<Loader />}> */}
        <div className="flex-1  lg:ml-64">
          <div className="p-5">{children}</div>
        </div>
        {/* </Suspense> */}
      </ProtectedRoute>
    </div>
  );
}
