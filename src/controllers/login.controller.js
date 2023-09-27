const { loginService } = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { status, message } = await loginService.login(email, password);

  if (status) {
    return res.status(status).send(message);
  }

  return res.status(200).send({ token: message});
}

module.exports = {
  login
}