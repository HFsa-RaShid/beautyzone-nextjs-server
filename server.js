const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const SSLCommerzPayment = require("sslcommerz-lts");
const connectDB = require("./config/db");
require("dotenv").config();
const path = require("path");
PORT = 5001;

connectDB();

app.use(
  cors({
    origin: [
      // "http://127.0.0.1:5500",
      "http://localhost:3000",
      "http://localhost:5173",
      "http://localhost:3000",
    ],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// (Routes)
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/reviewRoutes"));
app.use("/api/payment", require("./routes/paymentRoutes"));

app.get("/", (req, res) => {
  res.send("Beauty Zone API is running...");
});

// module.exports = app;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
