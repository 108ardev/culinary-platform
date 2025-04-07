// controllers/recommendationsController.js
const classModel = require('../models/classModel');

const recommendations = async (req, res) => {
  // Если понадобится, можно получить user_id через req.query или req.params
  // const { user_id } = req.query;

  try {
    let classes = await classModel.getAllClasses();
    // Фильтруем мастер-классы, оставляем только те, что запланированы в будущем
    classes = classes.filter(cls => new Date(cls.scheduled_date) > new Date());
    // Здесь можно добавить дополнительную логику (например, на основе user_id и истории)
    res.status(200).json({ recommendations: classes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

module.exports = { recommendations };
