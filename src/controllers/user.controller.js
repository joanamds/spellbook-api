const { userService } = require('../services');

const createUser = async (req, res) => {
  const { status, message } = await userService.createUser(req.body);

  if(status) return res.status(status).json(message);

  return res.status(201).send(message);
};

const getUsers = async (req, res) => {
  const { message } = await userService.getUsers();
  res.status(200).json(message);
}

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await userService.getUserById(id);
  if(status) {
    return res.status(status).json(message);
  }

  return res.status(200).json(message)
}

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await userService.deleteUser(id);

  return res.status(204).json()
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteUser
}