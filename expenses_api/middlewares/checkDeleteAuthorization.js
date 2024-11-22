const checkDeleteAuthorization = (req, res, next) => {
  const authKey = req.headers.authorization;
  const validKey = "admin123";

  if (authKey !== validKey) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

export default checkDeleteAuthorization;
