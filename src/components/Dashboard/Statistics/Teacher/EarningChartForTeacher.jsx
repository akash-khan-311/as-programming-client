import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";
import useGetEarningsHistoryForTeacher from "@/hooks/useGetEarningHistoryForTeacher";
import { convertTimestampToDate } from "@/lib";

ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ArcElement
);

const EarningChartForTeacher = () => {
  const [earningsHistory, isLoading] = useGetEarningsHistoryForTeacher();
  if (isLoading) return <div className="text-7xl text-white">Loading...</div>;

  // Assuming earningsHistory is an array of objects with date and amount
  const lineChartData = {
    labels: earningsHistory?.earningsHistory?.map((item) => {
      const date = convertTimestampToDate(item.date);
      return date;
    }),
    datasets: [
      {
        label: "Earnings",
        data: earningsHistory?.earningsHistory?.map((item) => item.amount),
        borderColor: "#ffff",
        fontSize: "30px",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return (
    <div className="w-full h-full flex  backdrop-blur-lg bg-white/20 rounded-xl mt-10">
      <div className="">
        <Line data={lineChartData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default EarningChartForTeacher;
