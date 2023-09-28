const { loginService, typeService } = require('../services');

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

const validateSpellName = async(req, res, next) => {
  const { spellName } = req.body;
  if(!spellName) {
    return res.status(400).json({
      message: '"spellName" is required'
    })
  }
  if(spellName.length < 2) {
    return res.status(400).json({
      message: '"spellName" must be at least 2 characters long'
    })
  }
  next()
}

const validateDescription = async (req, res, next) => {
  const { description } = req.body;
  if(!description) {
    return res.status(400).json({
      message: '"description" is required'
    })
  }
  if(description.length < 10) {
    return res.status(400).json({
      message: '"description" must be at least 10 characters long'
    })
  }
  next()
}

const validateIncantation = async (req, res, next) => {
  const { incantation } = req.body;
  if(!incantation) {
    return res.status(400).json({
      message: '"incantation" is required'
    })
  }
  if(incantation.length < 3) {
    return res.status(400).json({
      message: '"incantation" must be at least 3 characters long'
    })
  }
  next()
}

const validateEffect = async (req, res, next) => {
  const { effect } = req.body;
  if(!effect) {
    return res.status(400).json({
      message: '"effect" is required'
    })
  }
  if(effect.length < 4) {
    return res.status(400).json({
      message: '"effect" must be at least 4 characters long'
    })
  }
  next()
}

const validateType = async(req, res, next) => {
  const { type } = req.body;
  if(!type) {
    return res.status(400).json({
      message: '"type" is required'
    })
  }
  const typeExists = await typeService.getTypeByName(type);
  if(typeExists.status === 404) {
    return res.status(400).json({
      message: '"type" must be an existing type'
    })
  }
  next()
}

const validateNewType = async (req, res, next) =>{
  const typeExists = await typeService.getTypeByName(req.body.name);
  const { name } = req.body;
  if(!name) {
    return res.status(400).json({
      message: '"name" is required'
    })
  }
  if(name.length < 3) {
    return res.status(400).json({
      message: '"name" must be at least 3 characters long'
    })
  }
  if(typeExists.status === 200) {
    return res.status(400).json({
      message: 'this "type" already exists'
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
  validateRole,
  validateSpellName,
  validateDescription,
  validateIncantation,
  validateEffect,
  validateType,
  validateNewType
}