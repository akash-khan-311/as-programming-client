import { getSingleCourse } from "@/api/courses";
import Container from "@/components/Shared/Container";
import { getCourseById } from "@/data/data";
import ProtectedRoute from "@/ProtectedRoute/ProtectedRoute";
import Image from "next/image";
import { MdMarkEmailRead } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { Suspense } from "react";
import CourseDetails from "@/components/CourseDetails/CourseDetails";
import Loader from "@/components/Shared/Loader";

export const metadata = {
  title: "Course Details | AS Programming",
  description: "AS Programming offers a wide range of IT-related courses, including web development, data science, cybersecurity, cloud computing, and full-stack JavaScript development. Start your learning journey with us and achieve your career goals.",
  keywords: "AS Programming, IT courses, web development, data science, cybersecurity, cloud computing, full-stack development, programming courses, online learning",
  author: "Md Akash Khan",
  openGraph: {
    type: "website",
    url: "https://yourwebsite.com",
    title: "AS Programming - Learn and Master IT Skills",
    description: "AS Programming offers a wide range of IT-related courses, including web development, data science, cybersecurity, cloud computing, and full-stack JavaScript development. Start your learning journey with us and achieve your career goals.",


    site_name: "AS Programming",
  },

};

const CourseDetailPage = async ({ params: { id } }) => {
  const course = await getSingleCourse(id);

  console.log(course)
  console.log(course)
  return (
    <ProtectedRoute>
      <Suspense fallback={<Loader />}>
        <CourseDetails course={course} />
      </Suspense>
    </ProtectedRoute>
  );
};
export default CourseDetailPage;
