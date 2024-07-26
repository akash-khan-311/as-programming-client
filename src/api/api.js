import fetchSecure from ".";

/*
============> Fot Teacher <============
*/
export const getTeacherCourseCount = async (email) => {
  const data = await fetchSecure(`/teacher/${email}/courses/count`);
  return data;
};
export const getTeacherEarnings = async (email) => {
  const data = await fetchSecure(`/teacher/${email}/earnings`);
  return data;
};
/*
============> Fot Student <============
*/
export const getStudentMarks = async (email) => {
  const data = await fetchSecure(`/student/${email}/assignments/marks`);
  return data;
};

export const getStudentCourseCount = async (email) => {
  const data = await fetchSecure(`/student/${email}/courses/purchased`);
  return data;
};

/*
============> Fot Admin <============
*/

export const getTotalUsers = async () => {
  const data = await fetchSecure(`/admin/users/count`);
  return data;
};
export const getTotalCourses = async () => {
  const data = await fetchSecure(`/admin/courses/count`);
  return data;
};
export const getTotalEarnings = async () => {
  const data = await fetchSecure(`/admin/earnings`);
  return data;
};
