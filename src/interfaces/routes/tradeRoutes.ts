import { Router } from "express";
import { buyShares, sellShares } from "@interfaces/controllers/tradeController";

const router = Router();

router.post("/buy", buyShares);
router.post("/sell", sellShares);

export default router;
