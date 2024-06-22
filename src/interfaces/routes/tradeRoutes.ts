import { Router } from "express";
import { buyShares, sellShares } from "@interfaces/controllers/tradeController";
import { validate } from "@interfaces/middlewares/validate";
import { tradeSchema } from "@interfaces/schemas/tradeSchema";

const router = Router();

router.post("/buy", validate(tradeSchema), buyShares);
router.post("/sell", validate(tradeSchema), sellShares);

export default router;
