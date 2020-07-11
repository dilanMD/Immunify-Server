const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

// Cloud DB Connection
mongoose
  .connect(process.env.CLOUD_DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo DB Connected"))
  .catch((err) => console.error(err));

// Import Routes
const authRoutes = require("./routes/auth");

// Middlewares
app.use(bodyParser.json());
app.use(cors({ origin: process.env.CLIENT_URL }));

// Routes
app.use("/api", authRoutes);

const port = process.env.port;

app.listen(port, () => console.log(`API is running in port ${port}`));
