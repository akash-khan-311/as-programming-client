import fetchSecure from ".";

// Get All courses from database
export const getAllCourses = async (page, productsPerPage) => {
  const skip = (page - 1) * productsPerPage;
  const data = await fetchSecure(
    `/courses?limit=${productsPerPage}&skip=${skip}`,
    "GET"
  );
  return data;
};

// Get All courses for Teacher
export const getCoursesForTeacher = async (email) => {
  const data = await fetchSecure(`/courses/${email}`, "GET");
  return data;
};

// Get Single Course
export const getSingleCourse = async (id) => {
  const data = await fetchSecure(`/course/${id}`, "GET");
  return data;
};

// Get beginners courses
export const getBeginnerCourses = async () => {
  const data = await fetchSecure("/beginners", "GET");
  console.log(data.data);
  return data;
};

// save course in database
export const saveCourse = async (course) => {
  const data = await fetchSecure("/course", "POST", course);
  return data;
};

// save course for user || CART
export const saveCourseForUser = async (courseId, userEmail) => {
  const data = await fetchSecure(`/cart`, "POST", { courseId, userEmail });
  return data;
};

// get user cart
export const getUserCartItems = async (email) => {
  const data = await fetchSecure(`/cart/${email}`, "GET");
  return data;
};

// Remove from cart
export const removeCourseFromCart = async (courseId, email) => {
  const data = await fetchSecure(`/cart`, "DELETE", { courseId, email });
  return data;
};

// remove course from db
export const removeCourse = async (id) => {
  const data = await fetchSecure(`/course/${id}`, "DELETE");
  return data;
};
