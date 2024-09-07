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

  const { type, target, timeframe } = req.body;

  if (!type || !target || !timeframe) {
    return res.status(400).json({ message: "Missing goal data" });
  }

  try {
    const goal = await prisma.goal.create({
      data: {
        type,
        target: parseFloat(target),
        timeframe: parseInt(timeframe),
        userId: parseInt(userId as string),
      },
    });

    return res.status(201).json(goal);
  } catch (error) {
    console.error("Error creating goal:", error);
    return res.status(500).json({ message: "Failed to create goal" });
  }
}