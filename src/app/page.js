import Image from "next/image";
import HeroSection from "./components/Shared/Home/HeroSection";
import Features from "./components/Shared/Home/Features/Features";
import About from "./components/Shared/Home/About/About";
import BeInstructor from "./components/Shared/Home/BeInstructor/BeInstructor";
import BestCourse from "./components/Shared/Home/BestCourse/BestCourse";
import Subscribe from "./components/Shared/Home/Subscribe/Subscribe";

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
