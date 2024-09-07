import { Session, getServerSession, SessionProvider } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
};

export const getUser = async () => {
  const session = await getSession();
  if (!session) {
    return null;
  }
  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });
  return user;
};

export const isLoggedIn = async () => {
  const session = await getSession();
  return !!session;
};