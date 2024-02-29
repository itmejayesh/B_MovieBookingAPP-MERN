const express = require("express");
const controller = require("../controller/movieController.js");

const router = express.Router();

// Store booking (using POST method)
router.post("/booking", controller.storeBookingInDB);

// Retrieve booking details (using GET method)
router.get("/booking", controller.getBoookingDetailsFromDB);

module.exports = router;
