const classModel = require('../models/classModel');

const getClasses = async (req, res) => {
  try {
    const classes = await classModel.getAllClasses();
    res.status(200).json(classes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const createClass = async (req, res) => {
  const { recipe_id, chef_id, scheduled_date, duration, location } = req.body;
  try {
    const newClass = await classModel.addClass(recipe_id, chef_id, scheduled_date, duration, location);
    res.status(201).json(newClass);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const updateClass = async (req, res) => {
  const { id } = req.params;
  const { recipe_id, chef_id, scheduled_date, duration, location } = req.body;
  try {
    const updatedClass = await classModel.updateClass(id, recipe_id, chef_id, scheduled_date, duration, location);
    res.status(200).json(updatedClass);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const deleteClass = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedClass = await classModel.deleteClass(id);
    res.status(200).json(deletedClass);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

module.exports = { getClasses, createClass, updateClass, deleteClass };
