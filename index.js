const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Appointment Management Syatem Api is running...");
});

app.listen(() => console.log(`port is running at : ${port}`));
