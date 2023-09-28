const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const validateToken = async (req, res, next) => {
  const bearerToken = req.header('authorization');
  if (!bearerToken) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  try {
    const token = bearerToken.split(' ')[1]
    const decoded = jwt.verify(token, secret);
    const user = await userService.getUserById(decoded.data.userId);
    if (!user) {
      console.log('caí no if !user')
      return res.status(401).json({
        message: 'Expired or invalid token',
      });
    }
  } catch (err) {
    console.log('caí no catch', err)
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

const decodedToken = (authorization) => {
  const token = authorization.split(' ')[1]
  const decoded = jwt.verify(token, secret);
  return decoded.data;
};

module.exports = {
  secret,
  jwtConfig,
  jwt,
  decodedToken,
  validateToken
}