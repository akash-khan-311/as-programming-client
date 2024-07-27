import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import Loader from "@/components/Shared/Loader";
import { useGetAssignmentMarks, useGetPurchasedCourseCount } from "@/hooks";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [marksDistribution, isLoadingMarks] = useGetAssignmentMarks();
  const [courseCount, isLoadingCourses] = useGetPurchasedCourseCount();

  console.log(marksDistribution);
  const hasMarksData =
    marksDistribution?.marksDistribution &&
    Object.keys(marksDistribution.marksDistribution).length > 0;
  const pieChartData = {
    labels: hasMarksData
      ? Object.keys(marksDistribution?.marksDistribution)
      : ["No data"],
    datasets: [
      {
        label: "Assignment Marks",
        data: hasMarksData
          ? Object.values(marksDistribution.marksDistribution)
          : [1],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="w-full  flex flex-col items-center justify-center backdrop-blur-2xl bg-white/5 p-6 rounded-xl mt-5">
      <h2 className="text-2xl text-white mb-6">Student Statistics</h2>
      <div className="w-1/2 h-1/2 mb-6">
        <Pie data={pieChartData} options={{ responsive: true }} />
      </div>
      <div className="text-white">
        <h3 className="text-xl">
          Courses Purchased: {courseCount?.courseCount}
        </h3>
      </div>
    </div>
  );
};

export default PieChart;
