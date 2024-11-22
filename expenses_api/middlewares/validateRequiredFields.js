const validateRequiredFields = (req, res, next) => {
  const { title, amount, date } = req.body;
  if (!title || !amount || !date) {
    return res
      .status(400)
      .json({ error: "Title, amount, and date are required" });
  }
  next();
};

export default validateRequiredFields;
