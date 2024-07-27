import { useQuery } from "react-query";
import useAuth from "./useAuth";
import { getEarningsHistory } from "@/api/api";

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

export default useGetEarningsHistoryForTeacher;
