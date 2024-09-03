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

  return data;
};

// save course in database
export const saveCourse = async (course) => {
  const data = await fetchSecure("/course", "POST", course);
  return data;
};
// Update Course
export const updateCourse = async ({ id, course }) => {
  const data = await fetchSecure(`/course/${id}`, "PUT", course);
  return data;
};
// save course for user || CART
export const saveCourseForUser = async (courseId, userEmail) => {
  const data = await fetchSecure(`/cart`, "POST", { courseId, userEmail });
  return data;
};

// Save admissions course on db
export const saveAssignments = async (assignment) => {
  const data = fetchSecure("/assignments", "POST", { assignment });
  return data;
};

// get user cart
export const getUserCartItems = async (email) => {
  if (!email) return [];
  const data = await fetchSecure(`/cart/${email}`, "GET");
  return data || [];
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

// Get Admissions course by email
export const admissionsCourses = async (email, page = 1, limit = 10) => {
  const data = await fetchSecure(
    `/admissions/${email}?page=${page}&limit=${limit}`
  );
  return data;
};
// Get Payment Info for Admin
export const getPaymentInfo = async () => {
  const data = await fetchSecure(`/admin/payment`, "GET");
  return data;
};
// Remove Assignment from db for admin
export const removeAssignment = async (email) => {
  const data = await fetchSecure(`/remove/assignment/${email}`, "DELETE");
  return data;
};
// delete admision data from db
export const deleteAdmission = async (id) => {
  const data = await fetchSecure(`/delete/admission/${id}`, "DELETE");
  return data;
};
// Get all courses admin
export const getAllCourseforAdmin = async () => {
  const data = await fetchSecure(`/courses/admin`, "GET");
  return data;
};

// Update course status for live course
export const updateCourseStatus = async (id) => {
  const data = await fetchSecure(`/course/status/${id}`, "PUT");
  return data;
};

// Get Bookmarks Course for student
export const getBookmarksForStudent = async (email) => {
  const data = await fetchSecure(`/bookmarks/${email}`, "GET");
  return data;
};
// Remove course from bookmarks
export const removeCourseFromBookmarks = async (courseId, email) => {
  const data = await fetchSecure(`/bookmarks`, "DELETE", { courseId, email });
  return data;
};

// save bookmark course in db
export const saveCourseToBookmarks = async (courseId, userEmail) => {
  const data = await fetchSecure(`/bookmarks`, "POST", { courseId, userEmail });
  return data;
};

// // Get All courses from database
// export const getAllAdmissionsCourses = async (email) => {
//   const data = await fetchSecure(`/admissions/${email}`);
//   return data;
// };

// get assignment from db for students
export const getAssignmentsForStudent = async (email) => {
  const data = await fetchSecure(`/assignments/student/${email}`, "GET");
  return data;
};
// get assignment from db for teacher
export const getAssignmentsForTeacher = async (email) => {
  const data = await fetchSecure(`/assignments/teacher/${email}`, "GET");
  return data;
};

// update assignment
export const updateAssignment = async (id, assignmentData) => {
  const data = await fetchSecure(
    `/assignments/teacher/${id}`,
    "PUT",
    assignmentData
  );
  return data;
};

// Get Admissions course by id
export const getCoursesById = async (id) => {
  const data = fetchSecure(`/admissions/course/${id}`);
  return data;
};
