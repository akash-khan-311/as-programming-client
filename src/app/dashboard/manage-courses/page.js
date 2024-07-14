import { getCoursesForTeacher } from "@/api/courses";
import ManageCoursesForTeacher from "@/components/ManageCoursesForTeacher/ManageCoursesForTeacher";

export const metadata = {
    title: "Manage Courses | Dashbaord",
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
const ManageCoursePage = () => {

    return (
        <>
            <ManageCoursesForTeacher />
        </>
    )
}
export default ManageCoursePage;