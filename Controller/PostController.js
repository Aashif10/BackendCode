const Schema = require("../Models/PostSchema");

// Using the model to create a document
exports.sendData = async (req, res) => {
  const { firstName, lastName, email, phone, date, time } = req.body;

  try {
    await Schema.create({ firstName, lastName, email, phone, date, time });
    res.status(200).json({ message: "Data successfully uploaded!" });
  } catch (error) {
    res.status(404).json(error)
  }
};
