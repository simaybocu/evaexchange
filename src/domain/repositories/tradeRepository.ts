import prisma from "@infrastructure/prisma/client";
import { Share } from "@domain/models/share";

export const findShareBySymbol = async (symbol: string) => {
  return prisma.share.findFirst({ where: { symbol } });
};

export const findPortfolioByUserId = async (userId: number) => {
  return prisma.portfolio.findUnique({ where: { userId } });
};

export const createShare = async (share: Share) => {
  return prisma.share.create({ data: share });
};

export const updateShareQuantity = async (shareId: number, quantity: number) => {
  return prisma.share.update({
    where: { id: shareId },
    data: { quantity }
  });
};
