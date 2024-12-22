import { Request, Response } from "express";
import userModel from "../../models/user.model";
import { isValidObjectId } from "mongoose";

const getAllUser = async (req: Request, res: Response): Promise<void> => {
  let { page = 1, take = 20 } = req.query;
  take = Math.min(Number(take), 20);

  const response = await userModel
    .find()
    .skip((Number(page) - 1) * take)
    .limit(take)
    .sort({ createdAt: -1 });

    res.status(200).json(response);
};

const getUserById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    res.status(400).json({ message: "Id format is incorrect" });
    return;
  }
  const user = await userModel.findById(id);

  if (!user) {
    res.status(404).json({ message: "User not found!", data: null });
    return;
  }

  res.status(200).json(user);
};

const createUser = async (req: Request, res: Response): Promise<void> => {
  const { firstName, lastName, age, email, description } = req.body;

  if (!firstName || !lastName || !email) {
    res.status(400).json({ message: `firstName, lastName and email are required`, data: null });
    return;
  }

  const newUser = await userModel.create({ firstName, lastName, age, email, description });

  res.status(201).json({ message: `User created successfully`, data: newUser });
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    res.status(400).json({ message: "Id format is incorrect" });
    return;
  }

  const deletedUser = await userModel.findByIdAndDelete(id);

  if (!deletedUser) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  res.status(200).json({ message: `User deleted successfully`, data: deletedUser });
};

const updateUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    res.status(400).json({ message: "Id format is incorrect" });
    return;
  }

  const updatedUser = await userModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedUser) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  res.status(200).json({ message: `User updated successfully`, data: updatedUser });
};

export {
  getAllUser,
  getUserById,
  createUser,
  deleteUser,
  updateUser
};