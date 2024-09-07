import { useState, useEffect } from "react";
import { Line } from "chart.js";
import { fetchProgress } from "@/utils/api";

interface ProgressChartProps {
  userId: number;
  goalId: number;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ userId, goalId }) => {
  const [progressData, setProgressData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProgress(userId, goalId);
        setProgressData(data);
      } catch (error) {
        console.error("Error fetching progress data:", error);
      }
    };
    fetchData();
  }, [userId, goalId]);

  useEffect(() => {
    const canvas = document.getElementById(
      `progress-chart-${goalId}`
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    if (ctx && progressData.length > 0) {
      new Line(ctx, {
        data: {
          labels: progressData.map((item) => item.date),
          datasets: [
            {
              label: "Progress",
              data: progressData.map((item) => item.value),
              borderColor: "#3B82F6",
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [progressData, goalId]);

  return (
    <div className="w-full h-64">
      <canvas id={`progress-chart-${goalId}`} />
    </div>
  );
};

export default ProgressChart;