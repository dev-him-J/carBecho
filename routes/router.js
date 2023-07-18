const express = require("express");
const router = express.Router();
const { registerUser, LoginUser } = require("../controller/userController");
const {
  registerVehicle,
  getVehicle,
} = require("../controller/vehicleController");
router.post("/user", registerUser);
router.post("/Login", LoginUser);

router.post("/vehicle", registerUser);
router.get("/vehicle", LoginUser);

module.exports = router;
