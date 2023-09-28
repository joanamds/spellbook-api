const { spellService } = require('../services');
const { decodedToken } = require('../auth/validateJWT');

const getAllSpells = async (req, res) => {
  const { status, message} = await spellService.getAllSpells();
  return res.status(status).json(message)
}

const getSpellById = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await spellService.getSpellById(Number(id));
  return res.status(status).json(message);
}

const deleteSpell = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const data = decodedToken(authorization)

  if(data.role === 'admin') {
    await spellService.deleteSpell(id)
    return res.status(204).json()
  }

  return res.status(401).json({ message: 'Unauthorized user'})
}

module.exports = {
  getAllSpells,
  deleteSpell
}