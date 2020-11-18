const express = require("express");
const cors = require("cors");
require('dotenv').config()
require("./db/mongoose");
const studentRouter = require("./routes/students");
const app = express();
app.use(cors());
app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => console.log("Server is running on port  3000"));