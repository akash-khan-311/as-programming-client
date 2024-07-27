import { getTeacherEarnings } from "@/api/api";
import useAuth from "./useAuth";
import { useQuery } from "react-query";

const useGetTeacherEarnings = () => {
  const { user, loading } = useAuth();
  const { data: totalEarnings, isLoading } = useQuery({
    queryKey: ["earnings"],
    queryFn: async () => await getTeacherEarnings(user?.email),
    enabled: !loading && !!user?.email,
  });
  return [totalEarnings, isLoading];
};
export default useGetTeacherEarnings;
