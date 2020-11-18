const express = require("express");
const cors = require("cors");
require('dotenv').config()
require("./db/mongoose");

let PORT = process.env.PORT || 5000;
const studentRouter = require("./routes/students");
const app = express();
app.use(cors());
app.use(express.json());
app.use(studentRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));