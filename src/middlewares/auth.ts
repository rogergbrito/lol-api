import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';

dotenv.config();

const accessToken = process.env.AUTH_TOKEN;

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Token not found" });
  }

  const token = authorization.split(' ')[1];

  if (token !== accessToken) {
    return res.status(401).json({ error: "Invalid token" });
  }

  next();
};
