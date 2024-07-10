import { getAllCourses } from "@/api/courses";
import Container from "@/components/Shared/Container";
import CourseCard from "@/components/Shared/CourseCard";

const CoursesPage = async () => {
  const courses = await getAllCourses();

  return (
    <section className="">
      <Container>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl my-6 text-center  font-bold">
            Explore Our Courses
          </h1>
        </div>

        {/* Courses List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {courses.map((course) => (
            <CourseCard key={course._id} data={course} />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default CoursesPage;
