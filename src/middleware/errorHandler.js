const status = require("../utils/statusCodes");

const errorHandler = (err, req, res, next) => {
  console.error("ERROR:", err);

  res.status(err.statusCode || status.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message || "Server Error",
  });
};

module.exports = errorHandler;
