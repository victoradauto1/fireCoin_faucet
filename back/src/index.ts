import dotenv from "dotenv";
dotenv.config();

import express, { NextFunction, Request, Response } from "express";
import { mintAndTransfer } from "./Web3Provider";
import cors from "cors";
import helmet from 'helmet';

import morgan from "morgan";

const PORT: number = parseInt(`${process.env.PORT || 3001}`);

const app = express();

app.use(helmet());
app.use(morgan("tiny"));
app.use(
  cors({
    origin: process.env.CORS_ORIGINS || "*",
  })
);

const nextMint = new Map<string, number>()

app.post("/mint/:wallet",async (req: Request, res: Response, next: NextFunction): Promise<any>  => {
    
    const wallet = req.params.wallet;

    if(nextMint.has(wallet) && nextMint.get(wallet)! > Date.now())
      return res.status(400).json("Try it again tomorrow."); 
    try {
      const tx = await mintAndTransfer(wallet);
      res.json(tx);
    } catch (error: any) {
        console.error(error)
      res.status(500).json(error.message);
    }

    nextMint.set(wallet, Date.now()+(1000*60*60*24))
  }
);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}.`);
});
