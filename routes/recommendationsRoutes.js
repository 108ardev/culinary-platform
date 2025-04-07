// routes/recommendationsRoutes.js
const express = require('express');
const router = express.Router();
const recommendationsController = require('../controllers/recommendationsController');

router.get('/recommendations', recommendationsController.recommendations);

module.exports = router;
