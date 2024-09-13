import EarningChartComponent from "@/components/Shared/EarningChart";
import { useGetEarningsHistoryForTeacher } from "@/hooks";

const EarningChartForTeacher = () => {
  const [earningsHistory, isLoading] = useGetEarningsHistoryForTeacher();
  return (
    <>
      <EarningChartComponent
        earning={earningsHistory}
        isLoading={isLoading}
        label={"Earning History"}
      />
    </>
  );
};
export default EarningChartForTeacher;
