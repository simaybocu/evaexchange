import { Request, Response } from "express";
import * as tradeService from "@application/services/tradeService";
import { STATUS_CODES, ERROR_MESSAGES } from '@app/constants/messages'

export const buyShares = async (req: Request, res: Response) => {
  try {
    const { userId, symbol, quantity } = req.body;
    const result = await tradeService.buyShares(userId, symbol, quantity);
    res.status(STATUS_CODES.SUCCESS).json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(STATUS_CODES.BAD_REQ).json({ error: error.message });
    } else {
      res.status(STATUS_CODES.BAD_REQ).json({ error: ERROR_MESSAGES.UNKNOWN_ERROR_OCC });
    }
  }
};

export const sellShares = async (req: Request, res: Response) => {
  try {
    const { userId, symbol, quantity } = req.body;
    const result = await tradeService.sellShares(userId, symbol, quantity);
    res.status(STATUS_CODES.SUCCESS).json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(STATUS_CODES.BAD_REQ).json({ error: error.message });
    } else {
      res.status(STATUS_CODES.BAD_REQ).json({ error: ERROR_MESSAGES.UNKNOWN_ERROR_OCC});
    }
  }
};
