import { GoalData } from "@/types";

export const validateGoalData = (data: GoalData): { [key: string]: string } => {
  const errors: { [key: string]: string } = {};

  if (!data.type) {
    errors.type = "Goal type is required";
  }

  if (!data.target || isNaN(parseFloat(data.target))) {
    errors.target = "Valid target is required";
  }

  if (!data.timeframe || isNaN(parseInt(data.timeframe))) {
    errors.timeframe = "Valid timeframe is required";
  }

  return errors;
};