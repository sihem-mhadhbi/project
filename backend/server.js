const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

//database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.error("could not connect to mongoDB", err.message));
app.use(express.json());
app.use("/api/user", require("./routes/userRoutes"));
const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log(`listenning on port ${port}`);
});
