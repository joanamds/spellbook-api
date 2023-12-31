const { User } = require('../models');
const { jwt, secret, jwtConfig } = require('../auth/validateJWT');

const createUser = async ({ userName, house, email, password, role }) => {
  const newUser = await User.create({ userName, house, email, password, role });
  const newUserId = newUser.dataValues.id;

  if (newUser.type) {
    return { status: 409, message: newUser.message }
  }

  const token = jwt.sign({ data: { userId: newUserId, role } }, secret, jwtConfig);

  return { status: null, message: token }
}

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] }});
  return { status: null, message: users };
}

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  if(!user) {
    return { status: 404, message: { message: 'User not found'}}
  }
  return { status: null, message: user };
}

const deleteUser = async (userId) => {
  await User.destroy({
    where: { id: userId },
  });
};


module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteUser
}