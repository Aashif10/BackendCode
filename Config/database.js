let mongoose = require("mongoose");
const { MONGODB } = require(".");

exports.connectDB = async () => {
  await mongoose.connect(MONGODB);
  console.log("Cloud Database successfully created!");
};
