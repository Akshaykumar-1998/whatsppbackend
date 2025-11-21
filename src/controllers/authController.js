const User = require("../models/User");
const status = require("../utils/statusCodes");
const { success, error } = require("../utils/response");
const generateToken = require("../utils/generateToken");
exports.registerUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    if (!email || !phone) {
      return error(res, status.BAD_REQUEST, "Email and phone are required");
    }
    if (phone.length !== 10) {
      return error(res, status.BAD_REQUEST, "Invalid phone number");
    }
    if (!password) {
      return error(res, status.BAD_REQUEST, "Invalid Password");
    }
    let user = await User.findOne({ 
      $or: [{ email }, { phone }] 
    });

    if (user) {
      return error(res, status.CONFLICT, "User already registered");
    }
    const newUser = await User.create({ name, email, phone, password });
    const token = generateToken(newUser._id);
    return success(res, status.CREATED, "User registered successfully", {
      user: newUser,
      token,
    });

  } catch (err) {
    console.error(err);
    return error(res, status.SERVER_ERROR, "Server error");
  }
};
