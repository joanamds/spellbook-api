const { loginService } = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { status, message } = await loginService.login(email, password);

  return res.status(status).send(message);
}

module.exports = {
  login
}