const users = [
  {
    id: 1,
    firstName: "Tato",
    lastName: "Topuria",
    age: 27,
    email: "tatotophuria@gmail.com",
    description: "Test Description V1",
  },
  {
    id: 2,
    firstName: "Giorgi",
    lastName: "Giorgadze",
    age: 33,
    email: "giorgigiorgadze@mail.com",
    description: "Test Description V2",
  },
];

const getAllUser = (req, res) => {
  let { page = 1, take = 20 } = req.query;
  take > 20 ? (take = 20) : take;

  let response = users.slice((page - 1) * take, take * page);
  res.render("pages/users/users.home.ejs", { response });
};

const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find((x) => x.id === Number(id));

  if (!user) {
    return res.status(404).json({ message: "user not found!", data: null });
  }

  res.render("pages/users/users.details.ejs", { user });
};

const createUser = (req, res) => {
  const { firstName, lastName, age, email, description } = req.body;
  if (!firstName || !lastName || !email) {
    return res.status(400).json({
      message: `First name, last name and email are required`,
      data: null,
    });
  }

  const lastId = users[users.length - 1]?.id || 0;
  const newuser = {
    id: lastId + 1,
    firstName,
    lastId,
    age,
    email,
    description,
  };

  users.push(newuser);

  res.status(201).json({ message: `user created successfully`, data: newuser });
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  const index = users.findIndex((x) => x.id === Number(id));

  if (index === -1) {
    return res.status(400).json({ message: `user not found!`, data: null });
  }

  const deleteduser = users.splice(index, 1);
  res.json({
    message: `user deleted successfully`,
    data: null,
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age, email, description } = req.body;
  const index = users.findIndex((x) => x.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ message: "User not found", data: null });
  }

  if (firstName) users[index].firstName = firstName;
  if (lastName) users[index].lastName = lastName;
  if (age) users[index].age = age;
  if (email) users[index].email = email;
  if (description) users[index].description = description;

  res.json({
    message: "User updated successfully",
    data: users[index],
  });
};

const findExistingUser = (id) => users.find((user) => user.id === Number(id));

const addUser = (req, res) => {
  res.render("pages/users/users.add.ejs");
};

const putUser = (req, res) => {
  const { id } = req.params;
  const user = findExistingUser(id);

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
