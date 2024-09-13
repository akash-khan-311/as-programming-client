import ProtectedRoute from "@/ProtectedRoute/ProtectedRoute";
import About from "@/components/Home/About/About";
import BeInstructor from "@/components/Home/BeInstructor/BeInstructor";
import BestCourse from "@/components/Home/BestCourse/BestCourse";
import Features from "@/components/Home/Features/Features";
import HeroSection from "@/components/Home/HeroSection";
import Subscribe from "@/components/Home/Subscribe/Subscribe";
import Loader from "@/components/Shared/Loader";
import Head from "next/head";
import { Suspense } from "react";

export default function Home() {
  return (
    // <Suspense fallback={<Loader />}>
    <>
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <HeroSection />
      <Features />
      <About />
      <BestCourse />
      <BeInstructor />
      <Subscribe />
    </>
    // </Suspense>
  );
}
