const express = require("express");
require('dotenv').config()
require("./db/mongoose");
const studentRouter = require("./routes/students");
const app = express();
app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => console.log("Server is running on port  3000"));