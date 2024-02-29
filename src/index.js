const connectDB = require("./db/index.js");
const express = require("express");
const cors = require("cors");
const bookingRoutes = require("./routes/booking.routes.js");
require(`dotenv`).config({ path: "./env" });

//some configuration
const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Db connection
connectDB();

const port = process.env.PORT || 8001;

app.use("/api/v1", bookingRoutes);

app.listen(port, () => {
  console.log("server is running");
});
