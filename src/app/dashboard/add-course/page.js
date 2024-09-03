import AddCourseCom from "@/components/Dashboard/AddCourse/AddCourseCom";
export const metadata = {
  title: "Add Course | Dashbaord",
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

const AddCoursePage = () => {
  return (
    <div className="mt-10 lg:mt-0">
      <AddCourseCom />
    </div>
  );
};
export default AddCoursePage;
