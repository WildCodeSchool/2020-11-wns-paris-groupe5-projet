import express from "express";
import cors  from "cors";
import { start } from "./db/mongoose";


// const studentRouter = require("./routes/students");
import { userRouter } from './routes/students';
const app = express();
start();

app.use(cors());
app.use(express.json());
app.use(userRouter);


export { app };