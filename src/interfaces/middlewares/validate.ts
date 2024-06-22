import { ZodSchema, ZodError } from 'zod';
import { Request, Response, NextFunction } from 'express';

// Middleware to validate request body against a given schema
export const validate = (schema: ZodSchema<any>) => (req: Request, res: Response, next: NextFunction) => {
  try {
    // Parse and validate the request body
    schema.parse(req.body);
    next(); // If valid, proceed to the next middleware or route handler
  } catch (e) {
    // Check if error is an instance of ZodError
    if (e instanceof ZodError) {
      return res.status(400).json(e.errors); // Send a 400 response with validation errors
    }
    // Handle other types of errors
    return res.status(500).json({ message: "Internal server error" });
  }
};