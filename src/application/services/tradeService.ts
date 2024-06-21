import * as tradeRepository from "@domain/repositories/tradeRepository";
import { Share } from "@domain/models/share";

export const buyShares = async (userId: number, symbol: string, quantity: number) => {
  try {
    const share = await tradeRepository.findShareBySymbol(symbol);
    if (!share) throw new Error("Share not registered");

    const portfolio = await tradeRepository.findPortfolioByUserId(userId);
    if (!portfolio) throw new Error("Portfolio not found");

    const newShare = new Share(0, symbol, share.price, portfolio.id, quantity);
    await tradeRepository.createShare(newShare);

    return { message: "Shares bought successfully" };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unknown error occurred" };
  }
};

export const sellShares = async (userId: number, symbol: string, quantity: number) => {
  try {
    const portfolio = await tradeRepository.findPortfolioByUserId(userId);
    if (!portfolio) throw new Error("Portfolio not found");

    const share = await tradeRepository.findShareBySymbol(symbol);
    if (!share || share.quantity < quantity) throw new Error("Not enough shares");

    await tradeRepository.updateShareQuantity(share.id, share.quantity - quantity);

    return { message: "Shares sold successfully" };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unknown error occurred" };
  }
};
