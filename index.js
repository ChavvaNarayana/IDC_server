let dotenv = require("dotenv").config();
const express = require("express");
const app = express();
let cors = require("cors");
require("./src/connection/connect");
const port = process.env.PORT || 5000;
const imageRoutes = require("./src/routes/imageRoutes");
app.use(cors());

app.use("/", express.static("./public"));

app.use("/newimage", imageRoutes);

app.listen(port, () =>
  console.log(`App listening on http://localhost:${port}!`)
);

module.exports = app;
