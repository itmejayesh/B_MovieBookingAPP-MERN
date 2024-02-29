const BookingModel = require("../models/movieBookingSchema");

const storeBookingInDB = async (req, res) => {
  try {
    const { movie, slot, seats } = req.body;
    console.log(movie, slot, seats);
    const bookingData = new BookingModel({ movie, slot, seats });
    const data = await bookingData.save();

    return res.status(200).json({
      message: "Successful Booking",
      status: 200,
      data: data,
    });
  } catch (err) {
    console.error("Booking Failed", err);
    return res.status(500).json({
      message: "Internal Server Error: Unable to process the booking request",
      status: 500,
      data: {},
    });
  }
};

const getBoookingDetailsFromDB = async (req, res) => {
  try {
    const latestBooking = await BookingModel.findOne().sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Booking Found",
      status: 200,
      data: latestBooking,
    });
  } catch (error) {
    console.error("No Previous Booking Found", error);
    return res.status(500).json({
      message: "No Previous Booking Found",
      status: 500,
      data: {},
    });
  }
};

module.exports = { storeBookingInDB, getBoookingDetailsFromDB };
