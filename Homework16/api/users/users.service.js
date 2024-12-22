const userModel = require("../../models/user.model");
const { isValidObjectId } = require("mongoose");

const getAllUser = async (req, res) => {
  let { page = 1, take = 20 } = req.query;
  take > 20 ? (take = 20) : take;

  const response = await userModel
    .find()
    .skip((page - 1) * take)
    .limit(take)
    .sort({ createdAt: -1 });

  res.render("pages/users/users.home.ejs", { response });
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "Id format is incorrect" });
  }

  const user = await userModel.findById(id);

  if (!user) {
    return res.status(404).json({ message: "User not found!", data: null });
  }

  res.render("pages/users/users.details.ejs", { user });
};

const createUser = async (req, res) => {
  const { firstName, lastName, age, email, description } = req.body;
  if (!firstName || !lastName || !email) {
    return res.status(400).json({
      message: `First name, last name and email are required`,
      data: null,
    });
  }

  const newUser = await userModel.create({
    firstName,
    lastName,
    age,
    email,
    description,
  });

  res.status(201).json({ message: `User created successfully`, data: newUser });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "Id format is incorrect" });
  }

  const deletedUser = await userModel.findByIdAndDelete(id);

  if (!deletedUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({
    message: `user deleted successfully`,
    data: deletedUser,
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "Id format is incorrect" });
  }

  const updatedUser = await userModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({
    message: "User updated successfully",
    data: updatedUser,
  });
};

const addUser = (req, res) => {
  res.render("pages/users/users.add.ejs");
};

const findUser = async (id) => {
  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "Id format is incorrect" });
  }

  const user = await userModel.findById(id);

  if (!user) {
    return res.status(404).json({ message: "User not found!", data: null });
  }

  return user;
};

const putUser = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "Id format is incorrect" });
  }

  const user = await findUser(id);

  if (!user) {
    return res.status(404).send("User not found");
  }

  res.render("pages/users/users.update.ejs", { user });
};

module.exports = {
  getAllUser,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  addUser,
  putUser,
};
