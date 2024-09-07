import { useQuery } from "react-query";
import useAuth from "./useAuth";
import {
  getAssignmentCount,
  getAssignmentMarks,
  getAverageAssignmentMark,
  getEarningsHistory,
  getPurchasedCourseCount,
  getStudentCountForTeacher,
  getStudentCourseCount,
  getSubmittedAssignmetCount,
  getTeacherCourseCount,
  getTeacherEarnings,
  getTotalCourses,
  getTotalTeachers,
  getTotalUsers,
} from "@/api/api";
import { admissionsCourses } from "@/api/courses";
// import { getUserDetail } from "@/api/auth";

// For Teacher

const useGetAssignmentCountForTeacher = () => {
  const { user, loading } = useAuth();
  const { data: assignments, isLoading } = useQuery({
    queryKey: ["assignments"],
    queryFn: async () => await getAssignmentCount(user?.email),
    enabled: !loading && !!user?.email,
  });

  return [assignments, isLoading];
};

const useGetCourseCount = () => {
  const { user, loading } = useAuth();
  const { data: courseCount, isLoading } = useQuery({
    queryKey: ["courseCount"],
    queryFn: async () => await getTeacherCourseCount(user?.email),
    enabled: !loading && !!user?.email,
  });
  return [courseCount, isLoading];
};

const useGetEarningsHistoryForTeacher = () => {
  const { user, loading } = useAuth();
  const { data: earningsHistory, isLoading } = useQuery({
    queryKey: ["earningsHistory"],
    queryFn: async () => await getEarningsHistory(user?.email),
    enabled: !loading && !!user?.email,
  });
  console.log(earningsHistory?.earningsHistory);
  return [earningsHistory, isLoading];
};

const useGetTeacherEarnings = () => {
  const { user, loading } = useAuth();
  const { data: totalEarnings, isLoading } = useQuery({
    queryKey: ["earnings"],
    queryFn: async () => await getTeacherEarnings(user?.email),
    enabled: !loading && !!user?.email,
  });
  return [totalEarnings, isLoading];
};

const useGetTotalStudentFotTeacher = () => {
  const { user, loading } = useAuth();
  const { data: studentCount, isLoading } = useQuery({
    queryKey: ["studentCount"],
    queryFn: async () => await getStudentCountForTeacher(user?.email),
    enabled: !loading && !!user?.email,
  });

  return [studentCount, isLoading];
};

// for student

const useGetAssignmentMarks = () => {
  const { user, loading } = useAuth();
  const { data: marksDistribution, isLoading } = useQuery({
    queryKey: ["assignmentMarks"],
    queryFn: async () => await getAssignmentMarks(user?.email),
    enabled: !loading && !!user?.email,
  });

  return [marksDistribution, isLoading];
};
const useGetPurchasedCourseCount = () => {
  const { user, loading } = useAuth();
  const { data: courseCount, isLoading } = useQuery({
    queryKey: ["purchasedCourseCount"],
    queryFn: async () => await getStudentCourseCount(user?.email),
    enabled: !loading && !!user?.email,
  });

  return [courseCount, isLoading];
};

const useGetSubmittedAssignmentCount = () => {
  const { user, loading } = useAuth();
  const { data: assignmentCount, isLoading } = useQuery({
    queryKey: ["submittedAssignmentCount"],
    queryFn: async () => await getSubmittedAssignmetCount(user?.email),
    enabled: !loading && !!user?.email,
  });

  return [assignmentCount, isLoading];
};

const useGetAverageAssignmentMark = () => {
  const { user, loading } = useAuth();
  const { data: averageMark, isLoading } = useQuery({
    queryKey: ["averageAssignmentMark"],
    queryFn: async () => await getAverageAssignmentMark(user?.email),
    enabled: !loading && !!user?.email,
  });
  console.log(averageMark);
  return [averageMark, isLoading];
};

const useAdmissionsCourses = (email) => {
  const { user, loading } = useAuth();
  const { data: addmisionscourses, isLoading } = useQuery({
    queryKey: ["admissionsCourses"],
    queryFn: async () => await admissionsCourses(user?.email),
    enabled: !loading && !!user?.email,
  });
  console.log(addmisionscourses);
  return [addmisionscourses, isLoading];
};

// // Get usr Details using react query
// const useGetUserDetails = () => {
//   const { user, loading } = useAuth();
//   const { data: userDetails, isLoading } = useQuery({
//     queryKey: ["userDetails", user?.email],
//     queryFn: async () => await getUserDetail(user?.email),
//     enabled: !loading && !!user?.email,
//   });
//   console.log(userDetails);
//   return [userDetails, isLoading];
// };

// For Admin
const useGetTotalUsers = () => {
  const { user, loading } = useAuth();
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await getTotalUsers(),
    enabled: !loading && !!user?.email,
  });

  return [users, isLoading]; // Ensure this returns an array
};
const useGetTotalCourses = () => {
  const { user, loading } = useAuth();
  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => await getTotalCourses(),
    enabled: !loading && !!user?.email,
  });

  return [courses, isLoading]; // Ensure this returns an array
};
const useGetTotalTeachers = () => {
  const { data: teachers, isLoading } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => await getTotalTeachers(),
  });

  return [teachers, isLoading];
};
export {
  useGetAssignmentCountForTeacher,
  useGetCourseCount,
  useGetEarningsHistoryForTeacher,
  useGetTeacherEarnings,
  useGetTotalStudentFotTeacher,
  useGetPurchasedCourseCount,
  useGetAssignmentMarks,
  useGetSubmittedAssignmentCount,
  useGetAverageAssignmentMark,
  useGetTotalUsers,
  useAdmissionsCourses,
  useGetTotalCourses,
  useGetTotalTeachers,
};
