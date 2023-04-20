import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("You are on HomePage");
  console.log("This point is reached.");
});

app.listen(8080, () => {
  console.log("Server running on http://localhost/8080 .");
});
