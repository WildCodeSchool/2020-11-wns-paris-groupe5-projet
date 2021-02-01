import express from "express";
import "express-async-errors";
import cors from "cors";
import { start } from "./db/mongoose";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

import { userRouter } from "./routes/students";
const app = express();
start();

app.use(cors());
app.use(express.json());
app.use(userRouter);

app.all("*", async (req, res, next) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
