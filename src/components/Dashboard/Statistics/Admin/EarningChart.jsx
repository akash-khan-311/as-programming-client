import EarningChartComponent from "@/components/Shared/EarningChart";
import Loader from "@/components/Shared/Loader";
import { useGetTotalEarningsForAdmin } from "@/hooks";

const EarningChart = () => {
  const [earnings, isLoading] = useGetTotalEarningsForAdmin();
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <EarningChartComponent
        earning={earnings}
        isLoading={isLoading}
        label={"Earning History"}
      />
    </>
  );
};
export default EarningChart;
