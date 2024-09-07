import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId, goalId } = req.query;

  if (!userId || !goalId) {
    return res.status(400).json({ message: "Missing userId or goalId" });
  }

  try {
    const workouts = await prisma.workout.findMany({
      where: {
        userId: parseInt(userId as string),
        goalId: parseInt(goalId as string),
      },
      orderBy: {
        date: "desc",
      },
    });

    return res.status(200).json(workouts);
  } catch (error) {
    console.error("Error fetching progress data:", error);
    return res.status(500).json({ message: "Failed to fetch progress data" });
  }
}

export const fetchGoals = async (userId: number) => {
  try {
    const goals = await prisma.goal.findMany({
      where: {
        userId,
      },
    });
    return goals;
  } catch (error) {
    console.error("Error fetching goals:", error);
    throw new Error("Failed to fetch goals");
  }
};

export const createGoal = async (userId: number, goalData: any) => {
  try {
    const goal = await prisma.goal.create({
      data: {
        ...goalData,
        userId,
      },
    });
    return goal;
  } catch (error) {
    console.error("Error creating goal:", error);
    throw new Error("Failed to create goal");
  }
};

export const fetchProgress = async (userId: number, goalId: number) => {
  try {
    const workouts = await prisma.workout.findMany({
      where: {
        userId,
        goalId,
      },
      orderBy: {
        date: "desc",
      },
    });
    return workouts;
  } catch (error) {
    console.error("Error fetching progress data:", error);
    throw new Error("Failed to fetch progress data");
  }
};