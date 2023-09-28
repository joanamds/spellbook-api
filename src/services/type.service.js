const { Type } = require('../models');

const getAllTypes = async () => {
  const types = await Type.findAll();
  return { status: 200, message: types};
}

const getTypeById = async (id) => {
  const type = await Type.findByPk(id);
  if(!type) return { status: 404, message: 'Type not found' };
  return { status: 200, message: type };
}

const createType = async (name) => {
  const type = await Type.create({ name });
  return { status: 201, message: type };
}

const getTypeByName = async (name) => {
  const type = await Type.findOne({ where: { typeName: name } });
  if(!type) return { status: 404, message: 'Type not found' };
  return { status: 200, message: type };
}

module.exports = {
  getAllTypes,
  getTypeById,
  createType,
  getTypeByName
};
