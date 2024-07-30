import CourseList from "@/components/CourseList/CourseList";
import Container from "@/components/Shared/Container";

export const metadata = {
  title: "Courses | AS Programming",
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

const CoursesPage = () => {
  // console.log(courses);
  return (
    <section className="">
      <Container>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl my-6 text-center  font-bold">
            Explore Our Courses
          </h1>
        </div>

        {/* Courses List */}
        <CourseList />
      </Container>
    </section>
  );
};
export default CoursesPage;
