const { User } = require('../models');
const { jwt, secret, jwtConfig } = require('../auth/validateJWT');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) return { status: 400, message: 'Invalid fields' };
  
  const token = jwt.sign({ data: { userId: user.id, role: user.role } }, secret, jwtConfig);

  return { status: 200, message: { token } };
};

module.exports = {
  login
}