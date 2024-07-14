
import fetchSecure from ".";




// Get All courses from database
export const getAllCourses = async (page, productsPerPage) => {
  const skip = (page - 1) * productsPerPage;
  const data = await fetchSecure(`/courses?limit=${productsPerPage}&skip=${skip}`, "GET");
  return data;
};

// Get All courses for Teacher
export const getCoursesForTeacher = async (email) => {
  const data = await fetchSecure(`/courses/${email}`, "GET");
  return data;
};

export const getSingleCourse = async (id) => {
  const data = await fetchSecure(`/course/${id}`, "GET");
  return data;
};

// save course in database
export const saveCourse = async (course) => {
  const data = await fetchSecure("/course", "POST", course);
  return data;
};
