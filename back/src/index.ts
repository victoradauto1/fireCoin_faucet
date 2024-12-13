import dotenv from "dotenv";
dotenv.config();

import express, { NextFunction, Request, Response } from "express";
import { mintAndTransfer } from "./Web3Provider";

import morgan from "morgan";

const PORT: number = parseInt(`${process.env.PORT || 3001}`);

const app = express();

app.use(morgan("tiny"));

import cors from "cors";

app.use(
  cors({
    origin: process.env.CORS_ORIGINS || "*",
  })
);

app.post(
  "/mint/:wallet",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tx = await mintAndTransfer(req.params.wallet);
      res.json(tx);
    } catch (error: any) {
        console.error(error)
      res.status(500).json(error.message);
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}.`);
});
