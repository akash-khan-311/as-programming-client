import ProtectedRoute from "@/ProtectedRoute/ProtectedRoute";
import About from "@/components/Home/About/About";
import BeInstructor from "@/components/Home/BeInstructor/BeInstructor";
import BestCourse from "@/components/Home/BestCourse/BestCourse";
import Features from "@/components/Home/Features/Features";
import HeroSection from "@/components/Home/HeroSection";
import Subscribe from "@/components/Home/Subscribe/Subscribe";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <About />
      <BestCourse />
      <BeInstructor />
      <Subscribe />
    </>
  );
}
