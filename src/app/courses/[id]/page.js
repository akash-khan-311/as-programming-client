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

const CourseDetailPage = async ({ params: { id } }) => {
  const course = await getSingleCourse(id);

  const { name, img, description, price } = course;

  return (
    <ProtectedRoute>
      <Suspense fallback={<Loader />}>
        <CourseDetails course={course} />
      </Suspense>
    </ProtectedRoute>
  );
};
export default CourseDetailPage;
