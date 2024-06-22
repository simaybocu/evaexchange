import express from "express";
import bodyParser from "body-parser";
import tradeRoutes from "@interfaces/routes/tradeRoutes";
import 'tsconfig-paths/register';
import { logger } from './logger';

const app = express();
app.use(bodyParser.json());

// Set up the route for trade-related endpoints
app.use("/trade", tradeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
