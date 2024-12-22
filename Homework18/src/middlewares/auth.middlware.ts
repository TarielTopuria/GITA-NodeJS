import { Request, Response, NextFunction } from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const apiKey = req.headers["api-key"] as string | undefined;
  const rolesHeader = req.headers["role"] as string | undefined;

  if (
    (!apiKey || apiKey !== "12345") &&
    (!rolesHeader || !rolesHeader.includes("admin") || !rolesHeader.includes("editor"))
  ) {
    res.status(401).json({ message: "Forbidden", data: null });
    return;
  }

  next();
};

export default authMiddleware;
