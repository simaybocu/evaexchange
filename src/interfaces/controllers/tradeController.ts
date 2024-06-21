import { Request, Response } from "express";
import * as tradeService from "@application/services/tradeService";

export const buyShares = async (req: Request, res: Response) => {
  try {
    const { userId, symbol, quantity } = req.body;
    const result = await tradeService.buyShares(userId, symbol, quantity);
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred" });
    }
  }
};

export const sellShares = async (req: Request, res: Response) => {
  try {
    const { userId, symbol, quantity } = req.body;
    const result = await tradeService.sellShares(userId, symbol, quantity);
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred" });
    }
  }
};
