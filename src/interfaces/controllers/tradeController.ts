import { Request, Response } from "express";
import * as tradeService from "@application/services/tradeService";
import { STATUS_CODES, ERROR_MESSAGES } from '@app/constants/messages';
import { logger } from '@app/logger';

/**
 * Handles the endpoint for buying shares based on request body data.
 * @param req The Express Request object containing userId, symbol, and quantity in the body.
 * @param res The Express Response object used to send the response back to the client.
 */
export const buyShares = async (req: Request, res: Response) => {
  try {
    const { userId, symbol, quantity } = req.body;
    // Check if userId, symbol, and quantity are provided
    if (!userId || !symbol || !quantity) {
      logger.error(ERROR_MESSAGES.INVALID_PARAMETERS);
      return res.status(STATUS_CODES.BAD_REQUEST).json({ error: ERROR_MESSAGES.INVALID_PARAMETERS });
    }

    const result = await tradeService.buyShares(userId, symbol, quantity);
    if (result.error) {
      logger.error(`Error buying shares: ${result.error}`);
      return res.status(STATUS_CODES.SERVER_ERROR).json({ error: result.error });
    }

    logger.info(`Shares bought successfully: userId=${userId}, symbol=${symbol}, quantity=${quantity}`);
    res.status(STATUS_CODES.SUCCESS).json(result);
  } catch (error) {
    if (error instanceof Error) {
      logger.error(`Error buying shares: ${error.message}`);
      res.status(STATUS_CODES.SERVER_ERROR).json({ error: error.message });
    } else {
      res.status(STATUS_CODES.SERVER_ERROR).json({ error: ERROR_MESSAGES.UNKNOWN_ERROR_OCC });
    }
  }
};

/**
 * Handles the endpoint for selling shares based on request body data.
 * @param req The Express Request object containing userId, symbol, and quantity in the body.
 * @param res The Express Response object used to send the response back to the client.
 */
export const sellShares = async (req: Request, res: Response) => {
  try {
    const { userId, symbol, quantity } = req.body;
    // Check if userId, symbol, and quantity are provided
    if (!userId || !symbol || !quantity) {
      logger.error(ERROR_MESSAGES.INVALID_PARAMETERS);
      return res.status(STATUS_CODES.BAD_REQUEST).json({ error: ERROR_MESSAGES.INVALID_PARAMETERS });
    }

    const result = await tradeService.sellShares(userId, symbol, quantity);
    if (result.error) {
      logger.error(`Error selling shares: ${result.error}`);
      return res.status(STATUS_CODES.SERVER_ERROR).json({ error: result.error });
    }

    logger.info(`Shares sold successfully: userId=${userId}, symbol=${symbol}, quantity=${quantity}`);
    res.status(STATUS_CODES.SUCCESS).json(result);
  } catch (error) {
    if (error instanceof Error) {
      logger.error(`Error selling shares: ${error.message}`);
      res.status(STATUS_CODES.SERVER_ERROR).json({ error: error.message });
    } else {
      res.status(STATUS_CODES.SERVER_ERROR).json({ error: ERROR_MESSAGES.UNKNOWN_ERROR_OCC});
    }
  }
};
