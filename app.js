const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(cors());

//Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//Routes
app.get("/", (req, res) => {
  res.send("hi");
});

//Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected to MongoDB...");
});

//Start server
app.listen(9999);
