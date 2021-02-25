module.exports = (err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ err, message: err.message || "internal server error" });
};
