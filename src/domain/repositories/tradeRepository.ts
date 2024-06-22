import prisma from "@infrastructure/prisma/client";
import { Share } from "@domain/models/share";

/**
 * Finds a share in the database by its symbol.
 * @param symbol The symbol of the share to find.
 * @returns A promise that resolves to the first share found matching the symbol,
 *          or null if no share is found.
 */
export const findShareBySymbol = async (symbol: string) => {
  return prisma.share.findFirst({ where: { symbol } });
};

/**
 * Finds a portfolio in the database by user ID.
 * @param userId The ID of the user whose portfolio is being searched for.
 * @returns A promise that resolves to the unique portfolio object associated with the provided user ID,
 *          or null if no portfolio is found.
 */
export const findPortfolioByUserId = async (userId: number) => {
  return prisma.portfolio.findUnique({ where: { userId } });
};

/**
 * Creates a new share entry in the database.
 * @param share The Share object containing the details of the share to be created.
 * @returns A promise that resolves to the newly created share object in the database.
 */
export const createShare = async (share: Share) => {
  return prisma.share.create({ data: share });
};

/**
 * Updates the quantity of shares for a given share ID.
 * @param shareId The ID of the share to update.
 * @param quantity The new quantity to set for the share.
 * @returns The updated share object.
 */
export const updateShareQuantity = async (shareId: number, quantity: number) => {
  return prisma.share.update({
    where: { id: shareId },
    data: { quantity }
  });
};
