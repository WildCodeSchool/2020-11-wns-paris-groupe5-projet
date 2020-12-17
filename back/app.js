const express = require("express");
const cors = require("cors");
require("./db/mongoose");

const studentRouter = require("./routes/students");
const app = express();


app.use(cors());
app.use(express.json());
app.use(studentRouter);

module.exports = app;