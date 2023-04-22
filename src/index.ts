import express from "express";
import { Request, Response } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";

import reminderRoutes from "./routes/reminderRoutes";

const app = express();

app.use(express.json());

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
});

// ROUTES

app.use("/api/v1/:user_id/reminders", reminderRoutes);

app.listen(8080, () => {
  console.log("Server running on http://localhost/8080 .");
});
