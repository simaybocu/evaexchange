import * as tradeRepository from "@domain/repositories/tradeRepository";
import { Share } from "@domain/models/share";
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from '@app/constants/messages';
import { logger } from '@app/logger';

/**
 * Attempts to buy shares for a user.
 * @param userId The ID of the user buying the shares.
 * @param symbol The symbol of the shares to buy.
 * @param quantity The quantity of shares to buy.
 * @returns An object containing either a success message or an error message.
 */
export const buyShares = async (userId: number, symbol: string, quantity: number) => {
  try {
    const share = await tradeRepository.findShareBySymbol(symbol);
    if (!share) throw new Error(ERROR_MESSAGES.SHARE_NOT_REGISTERED);

    const portfolio = await tradeRepository.findPortfolioByUserId(userId);
    if (!portfolio) throw new Error(ERROR_MESSAGES.PORTFOLIO_NOT_FOUND);

    logger.debug(`Creating new share: userId=${userId}, symbol=${symbol}, quantity=${quantity}`);
    const newShare = new Share(symbol, share.price, portfolio.id, quantity);
    const createdShare = await tradeRepository.createShare(newShare);
    // Check if share creation was successful
    if (!createdShare) throw new Error(ERROR_MESSAGES.SHARE_CREATION_FAILED);
  
    return { message: SUCCESS_MESSAGES.SHARES_BOUGHT_SUCCESS };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: ERROR_MESSAGES.UNKNOWN_ERROR_OCC };
  }
};

/**
 * Attempts to sell shares for a user.
 * @param userId The ID of the user selling the shares.
 * @param symbol The symbol of the shares to sell.
 * @param quantity The quantity of shares to sell.
 * @returns An object containing either a success message or an error message.
 */
export const sellShares = async (userId: number, symbol: string, quantity: number) => {
  try {
    const portfolio = await tradeRepository.findPortfolioByUserId(userId);
    if (!portfolio) throw new Error(ERROR_MESSAGES.PORTFOLIO_NOT_FOUND);

    const share = await tradeRepository.findShareBySymbol(symbol);
    if (!share || share.quantity < quantity) throw new Error(ERROR_MESSAGES.NOT_ENOUGH_SHARES);

    logger.debug(`Updating share quantity: shareId=${share.id}, newQuantity=${share.quantity - quantity}`);
    const updatedShare = await tradeRepository.updateShareQuantity(share.id, share.quantity - quantity);
    if (!updatedShare) {
      logger.error(`Failed to update share quantity: shareId=${share.id}`);
      return { error: ERROR_MESSAGES.SHARE_UPDATE_FAILED };
    }
    return { message: SUCCESS_MESSAGES.SHARES_SOLD_SUCCESS};
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: ERROR_MESSAGES.UNKNOWN_ERROR_OCC };
  }
};
