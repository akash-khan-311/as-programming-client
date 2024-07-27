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
import Loader from "@/components/Shared/Loader";

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
  if (isLoading) return <Loader />;

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

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        type: "category",
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Earnings",
        },
      },
    },
  };

  return (
    <div className="w-full h-full flex  backdrop-blur-sm bg-white/60 rounded-xl mt-10">
      <Line data={lineChartData} options={chartOptions} />
    </div>
  );
};

export default EarningChartForTeacher;
