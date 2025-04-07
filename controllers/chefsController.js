const chefModel = require('../models/chefModel');

const getChefs = async (req, res) => {
  try {
    const chefs = await chefModel.getAllChefs();
    res.status(200).json(chefs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const createChef = async (req, res) => {
  const { name, bio, rating } = req.body;
  try {
    const newChef = await chefModel.addChef(name, bio, rating);
    res.status(201).json(newChef);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const updateChef = async (req, res) => {
  const { id } = req.params;
  const { name, bio, rating } = req.body;
  try {
    const updatedChef = await chefModel.updateChef(id, name, bio, rating);
    res.status(200).json(updatedChef);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const deleteChef = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedChef = await chefModel.deleteChef(id);
    res.status(200).json(deletedChef);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

module.exports = { getChefs, createChef, updateChef, deleteChef };
