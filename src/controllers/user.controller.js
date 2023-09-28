const { userService } = require('../services');

const createUser = async (req, res) => {
  const { status, message } = await userService.createUser(req.body);

  return res.status(status).send(message);
};

const getUsers = async (req, res) => {
  const { status, message } = await userService.getUsers();
  res.status(status).json(message);
}

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await userService.getUserById(id);

  return res.status(status).json(message)
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