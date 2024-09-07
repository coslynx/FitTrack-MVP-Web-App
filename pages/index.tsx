import { useSession } from "next-auth/react";
import { useStore } from "@/store";
import { useState, useEffect } from "react";
import { fetchGoals, fetchProgress } from "@/utils/api";
import GoalInput from "@/components/GoalInput";
import ProgressChart from "@/components/ProgressChart";
import { useRouter } from "next/router";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { setNotification } = useStore();
  const [goals, setGoals] = useState([]);
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (session?.user.id) {
          const goals = await fetchGoals(session.user.id);
          setGoals(goals);
          const progress = await fetchProgress(session.user.id);
          setProgressData(progress);
        }
      } catch (error: any) {
        setNotification({
          message: error.message,
          type: "error",
        });
      }
    };
    if (session) {
      fetchUserData();
    }
  }, [session, setNotification]);

  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-primary">Dashboard</h2>
      <div className="flex flex-col gap-4">
        <GoalInput userId={session.user.id} />
        {goals.map((goal: any) => (
          <div key={goal.id} className="bg-white shadow-md rounded p-4">
            <h3 className="text-lg font-bold mb-2">
              {goal.type} Goal
            </h3>
            <p className="text-gray-700 mb-2">
              Target: {goal.target}
            </p>
            <p className="text-gray-700 mb-2">
              Timeframe: {goal.timeframe} days
            </p>
            <ProgressChart userId={session.user.id} goalId={goal.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;