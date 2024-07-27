import { getAssignmentCount } from "@/api/api";
import useAuth from "./useAuth";
import { useQuery } from "react-query";

const useGetAssignmentCountForTeacher = () => {
  const { user, loading } = useAuth();
  const { data: assignments, isLoading } = useQuery({
    queryKey: ["assignments"],
    queryFn: async () => await getAssignmentCount(user?.email),
    enabled: !loading && !!user?.email,
  });

  return [assignments, isLoading];
};
export default useGetAssignmentCountForTeacher;
