const asyncHandler = require("express-async-handler");
// description Register user
// Route POST /user
// access public6

const registerVehicle = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "Car Registered" });
});

const getVehicle = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "This is your Vehicle" });
});
module.exports = {
  registerVehicle,
  getVehicle,
};
