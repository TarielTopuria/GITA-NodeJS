const randomRequestMiddleware = (req, res, next) => {
  if (Math.random() < 0.5) {
    return res.status(403).json({ error: "Request failed the random check" });
  }
  next();
};

export default randomRequestMiddleware;
