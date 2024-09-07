import { useState } from "react";
import { useRouter } from "next/router";
import { useStore } from "@/store";
import { validateGoalData } from "@/utils/validation";
import { createGoal } from "@/utils/api";

interface GoalInputProps {
  userId: number;
}

const GoalInput: React.FC<GoalInputProps> = ({ userId }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    type: "",
    target: "",
    timeframe: "",
  });
  const [errors, setErrors] = useState({});
  const { setNotification } = useStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateGoalData(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        await createGoal(userId, formData);
        setNotification({
          message: "Goal created successfully!",
          type: "success",
        });
        router.push("/dashboard");
      } catch (error: any) {
        setNotification({
          message: error.message,
          type: "error",
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="type" className="font-bold">
          Goal Type:
        </label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Goal Type</option>
          <option value="weight loss">Weight Loss</option>
          <option value="muscle gain">Muscle Gain</option>
          <option value="distance">Distance</option>
        </select>
        {errors.type && (
          <span className="text-red-500 text-sm">{errors.type}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="target" className="font-bold">
          Target:
        </label>
        <input
          type="number"
          id="target"
          name="target"
          value={formData.target}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.target && (
          <span className="text-red-500 text-sm">{errors.target}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="timeframe" className="font-bold">
          Timeframe (Days):
        </label>
        <input
          type="number"
          id="timeframe"
          name="timeframe"
          value={formData.timeframe}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.timeframe && (
          <span className="text-red-500 text-sm">{errors.timeframe}</span>
        )}
      </div>
      <button
        type="submit"
        className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Create Goal
      </button>
    </form>
  );
};

export default GoalInput;