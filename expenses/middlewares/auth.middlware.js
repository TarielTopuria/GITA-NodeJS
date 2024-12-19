const authMiddlware = (req, res, next) => {
  const apiKey = req.headers["api-key"];
  const roles = req.headers["role"];
  if (
    (!apiKey || apiKey !== "12345") &&
    (!roles || !roles.includes("admin") || !roles.includes("editor"))
  ) {
    return res.status(401).json({ message: `Forbidden`, data: null });
  }

  next();
};

module.exports = authMiddlware;
