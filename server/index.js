const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDataBase = require("./db/database");
require("dotenv").config();

const mainRouter = require("./routes/main.routes");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1", mainRouter);

app.listen(port, async () => {
  console.log("Connecting to DB......");
  await connectToDataBase();
  console.log("Connected to Database");
});
