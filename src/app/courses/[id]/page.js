import { getSingleCourse } from "@/api/courses";
import Container from "@/components/Shared/Container";
import { getCourseById } from "@/data/data";
import ProtectedRoute from "@/ProtectedRoute/ProtectedRoute";

const CourseDetailPage = async ({ params: { id } }) => {
  const course = await getSingleCourse(id);

  return (
    <ProtectedRoute>
      <section className="">
        <Container>
          <div className="">{course.name}</div>
        </Container>
      </section>
    </ProtectedRoute>
  );
};
export default CourseDetailPage;
