const { loginService } = require('../services');

const validateLoginBody = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({
      message: 'Some required fields are missing',
    });
  }
  next();
};

const validateUserName = (req, res, next) => {
  const { userName } = req.body;
  if(!userName) {
    return res.status(400).send({
      message: '"userName" field is required'
    })
  }
  if(userName.length < 6) {
    return res.status(400).json({
      message: '"userName" length must be at least 6 characters long'
    })
  }
  next()
}

const validateEmail = async (req, res, next) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const { email, password } = req.body;
  const hasUser = await loginService.login(email, password);
  console.log(hasUser.status)
  if(hasUser.status !== 400) {
    return res.status(409).json({
      message: "Email already used"
    })
  }
  if(!emailRegex.test(email)) {
    return res.status(400).json({
      message: '"email" must be a valid email'
    })
  }
  next()
}

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if(!password) {
    return res.status(400).json({
      message: '"password" field is required'
    })
  }
  if(password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be 6 characters long'
    })
  }
  next()
}

const validateHouse = (req, res, next) => {
  const { house } = req.body;
  const houses = ['Griffyndor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']
  if(!house) {
    return res.status(400).json({
      message: '"house" field is required'
    })
  }
  if(!houses.includes(house)) {
    return res.status(400).json({
      message: '"house" must be a existing Hogwarts House'
    })
  }
  next()
}

const validateRole = (req, res, next) => {
  const { role } = req.body;
  if(!role) {
    return res.status(400).json({
      message: 'you must provide a "role" field'
    })
  }
  if(role !== 'admin' && role !== 'student') {
    return res.status(400).json({
      message: 'you must provide a valid "role", admin or student'
    })
  }
  next()
}

module.exports = {
  validateLoginBody,
  validateUserName,
  validateEmail,
  validatePassword,
  validateHouse,
  validateRole
}