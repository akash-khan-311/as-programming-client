import { useQuery } from "react-query";
import useAuth from "./useAuth";
import { getStudentCountForTeacher } from "@/api/api";

const useGetTotalStudentFotTeacher = () => {
  const { user, loading } = useAuth();
  const { data: studentCount, isLoading } = useQuery({
    queryKey: ["studentCount"],
    queryFn: async () => await getStudentCountForTeacher(user?.email),
    enabled: !loading && !!user?.email,
  });

  return [studentCount, isLoading];
};

export default useGetTotalStudentFotTeacher;
