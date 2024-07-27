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

import { convertTimestampToDate } from "@/lib";
import Loader from "@/components/Shared/Loader";
import { useGetEarningsHistoryForTeacher } from "@/hooks";

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
        label: "Teacher Earnings",
        data: earningsHistory?.earningsHistory?.map((item) => item.amount),
        borderColor: "#ffff",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "rgba(255, 255, 255, 0.8)", // Legend text color
          font: {
            size: 14, // Font size for legend labels
          },
        },
        display: true,
      },
      title: {
        display: true,
        text: "Earnings Over Time",
        color: "rgba(255, 255, 255, 0.8)", // Chart title color
        font: {
          size: 18, // Font size for chart title
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#fff", // Date color
          font: {
            size: 14, // Font size for X-axis ticks
          },
        },
        type: "category",
        title: {
          display: true,
          text: "Date",
          font: {
            size: 14, // Font size for X-axis title
          },
          color: "#fff", // Text color for X-axis title
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // Grid line color for X-axis
        },
      },
      y: {
        ticks: {
          color: "rgba(255, 255, 255, 0.8)", // Y-axis text color
          font: {
            size: 14, // Font size for Y-axis ticks
          },
        },
        title: {
          display: true,
          text: "Earnings",
          color: "#fff", // Text color for Y-axis title
          font: {
            size: 14, // Font size for Y-axis title
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // Grid line color for Y-axis
        },
      },
    },
  };

  return (
    <div className="w-full h-full flex backdrop-blur-xl bg-white/10 rounded-xl mt-10 p-2 md:p-4 lg:p-6 ">
      <div className="w-full h-96">
        <Line data={lineChartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default EarningChartForTeacher;
