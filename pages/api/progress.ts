import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: "Missing userId" });
  }

  try {
    const workouts = await prisma.workout.findMany({
      where: {
        userId: parseInt(userId as string),
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