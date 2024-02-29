const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieBookingSchema = new Schema(
  {
    movie: { type: String, require: true },
    slot: { type: String, require: true },
    seats: {
      A1: { type: Number, default: 0 },
      A2: { type: Number, default: 0 },
      A3: { type: Number, default: 0 },
      A4: { type: Number, default: 0 },
      D1: { type: Number, default: 0 },
      D2: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ticketbooking", movieBookingSchema);
