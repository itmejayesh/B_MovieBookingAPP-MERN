const BookingModel = require("../models/movieBookingSchema");
const Joi = require("joi");
const logger = require("winston");

const schema = Joi.object({
  movie: Joi.string().required(),
  slot: Joi.string().required(),
  seats: Joi.object()
    .pattern(/^(A1|A2|A3|A4|D1|D2)$/, Joi.number().default(0))
    .required(),
});

const storeBookingInDB = async (req, res) => {
  try {
    // Validate input data

    const { error, value } = schema.validate(req.body);
    if (error) {
      logger.error("Invalid input data", error);
      return res.status(400).json({
        message: "Bad Request: Invalid input data",
        status: 400,
        data: {},
      });
    }

    const { movie, slot, seats } = value;
    logger.info("Received booking request:", { movie, slot, seats });

    // Save booking data to database
    const bookingData = new BookingModel({ movie, slot, seats });
    const data = await bookingData.save();

    // Save booking data to cookie
    res.cookie("bookingdata", JSON.stringify({ movie, slot, seats }), {
      httpOnly: true,
      secure: true,
    });

    return res.status(200).json({
      message: "Booking Successful ",
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
    // const bookingdata = req.cookies.bookingdata;
    // console.log("Booking Data: " + bookingdata, req.cookies);
    // if (!bookingdata) {
    //   return res.status(404).json({
    //     message: "No booking found",
    //     status: 404,
    //     data: {},
    //   });
    // }
    // Parse booking data from cookie
    // const { movie, slot, seats } = JSON.parse(bookingdata);

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
