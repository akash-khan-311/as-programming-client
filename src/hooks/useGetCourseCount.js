import { getTeacherCourseCount } from "@/api/api";
import useAuth from "./useAuth";
import { useQuery } from "react-query";

const useGetCourseCount = () => {
  const { user, loading } = useAuth();
  const { data: courseCount, isLoading } = useQuery({
    queryKey: ["courseCount"],
    queryFn: async () => await getTeacherCourseCount(user?.email),
    enabled: !loading && !!user?.email,
  });
  return [courseCount, isLoading];
};
export default useGetCourseCount;
