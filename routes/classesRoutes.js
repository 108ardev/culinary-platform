const express = require('express');
const router = express.Router();
const classesController = require('../controllers/classesController');

router.get('/classes', classesController.getClasses);
router.post('/classes', classesController.createClass);
router.put('/classes/:id', classesController.updateClass);
router.delete('/classes/:id', classesController.deleteClass);

module.exports = router;
