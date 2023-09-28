const { typeService } = require('../services');

const getAllTypes = async (_req, res) => {
  const types = await typeService.getAllTypes();
  res.status(types.status).json(types.message);
}

const getTypeById = async (req, res) => {
  const { id } = req.params;
  const type = await typeService.getTypeById(id);
  res.status(type.status).json(type.message);
}

const createType = async (req, res) => {
  const { name } = req.body;
  const type = await typeService.createType(name);
  
  res.status(type.status).json(type.message);
}

module.exports = {
  getAllTypes,
  getTypeById,
  createType
}