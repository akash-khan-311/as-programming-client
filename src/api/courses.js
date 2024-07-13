
import fetchSecure from ".";




// Get All courses from database
export const getAllCourses = async () => {
  const data = await fetchSecure("/courses", "GET");

  return data;
};

export const getSingleCourse = async (id) => {
  const data = await fetchSecure(`/courses/${id}`, "GET");


  return data;
};

// save course in database
export const saveCourse = async (course) => {
  const data = await fetchSecure("/course", "POST", course);

  return data;
};
