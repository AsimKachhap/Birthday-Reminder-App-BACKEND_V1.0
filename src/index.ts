import express from "express";
import { Request, Response } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";

const app = express();

app.use(morgan("dev"));

dotenv.config();

(async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION, {
      useNewUrlParser: true,
    } as mongoose.ConnectOptions);
    console.log("CONNECTED TO MONGO DB SERVER");
  } catch (error) {
    console.log("MONGO DB CONNECTION ERROR");
    console.log(error);
  }
})();

app.get("/", (req: Request, res: Response) => {
  res.send("You are on HomePage");
  console.log("This point is reached.");
});

app.listen(8080, () => {
  console.log("Server running on http://localhost/8080 .");
});
