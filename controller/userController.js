const asyncHandler = require("express-async-handler");
const client = require("../config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// description Register user
// Route POST /user
// access public6

const db = client.db("carKhareedo");
const collection = db.collection("user");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const userExits = await collection.findOne({ email });
  if (userExits) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create User

  const user = await collection.insertOne({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.insertedId,
      name,
      email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});
// Login user

const LoginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // check for user email

  const user = await collection.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  LoginUser,
};
