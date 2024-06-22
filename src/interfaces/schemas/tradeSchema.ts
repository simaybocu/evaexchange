import { z } from "zod";

// Define the schema for trade operations using Zod
export const tradeSchema = z.object({
  userId: z.number().int().positive(), // The user ID must be a positive integer
  symbol: z.string().nonempty(), // The stock symbol must be a non-empty string
  quantity: z.number().int().positive()  // The quantity of shares must be a positive integer
});
