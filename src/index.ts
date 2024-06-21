import express from "express";
import bodyParser from "body-parser";
import tradeRoutes from "@interfaces/routes/tradeRoutes";
import 'tsconfig-paths/register';

const app = express();
app.use(bodyParser.json());

app.use("/trade", tradeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
