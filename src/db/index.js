const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const ConnectionIntance = await mongoose.connect(
      `${process.env.MONGODB_URL}/movies`,
      {
        dbName: "movies",
      }
    );
    console.log(
      `\n MONGODB Connected!! DB Host:${ConnectionIntance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB Connection Failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;
