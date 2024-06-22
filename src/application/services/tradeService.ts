import * as tradeRepository from "@domain/repositories/tradeRepository";
import { Share } from "@domain/models/share";
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from '@app/constants/messages'

export const buyShares = async (userId: number, symbol: string, quantity: number) => {
  try {
    const share = await tradeRepository.findShareBySymbol(symbol);
    if (!share) throw new Error(ERROR_MESSAGES.SHARE_NOT_REGISTERED);

    const portfolio = await tradeRepository.findPortfolioByUserId(userId);
    if (!portfolio) throw new Error(ERROR_MESSAGES.PORTFOLIO_NOT_FOUND);

    const newShare = new Share(0, symbol, share.price, portfolio.id, quantity);
    await tradeRepository.createShare(newShare);

    return { message: SUCCESS_MESSAGES.SHARES_BOUGHT_SUCCESS };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: ERROR_MESSAGES.UNKNOWN_ERROR_OCC };
  }
};

export const sellShares = async (userId: number, symbol: string, quantity: number) => {
  try {
    const portfolio = await tradeRepository.findPortfolioByUserId(userId);
    if (!portfolio) throw new Error(ERROR_MESSAGES.PORTFOLIO_NOT_FOUND);

    const share = await tradeRepository.findShareBySymbol(symbol);
    if (!share || share.quantity < quantity) throw new Error(ERROR_MESSAGES.NOT_ENOUGH_SHARES);

    await tradeRepository.updateShareQuantity(share.id, share.quantity - quantity);

    return { message: SUCCESS_MESSAGES.SHARES_SOLD_SUCCESS};
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: ERROR_MESSAGES.UNKNOWN_ERROR_OCC };
  }
};
