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

export const getStudentCountForTeacher = async (email) => {
  const data = await fetchSecure(`/teacher/${email}/students/count`);
  return data;
};

export const getAssignmentCount = async (email) => {
  const data = await fetchSecure(`/teacher/${email}/assignment/count`);
  return data;
};

export const getEarningsHistory = async (email) => {
  const data = await fetchSecure(`/teacher/${email}/earnings/history`);
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

export const getAssignmentMarks = async (email) => {
  const data = await fetchSecure(`/student/${email}/assignments/marks`);
  return data;
};

export const getSubmittedAssignmetCount = async (email) => {
  const data = await fetchSecure(`/student/${email}/assignments/count`);
  return data;
};

export const getAverageAssignmentMark = async (email) => {
  const data = await fetchSecure(`/student/${email}/assignments/average-mark`);
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
