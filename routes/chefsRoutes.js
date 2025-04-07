const express = require('express');
const router = express.Router();
const chefsController = require('../controllers/chefsController');

router.get('/chefs', chefsController.getChefs);
router.post('/chefs', chefsController.createChef);
router.put('/chefs/:id', chefsController.updateChef);
router.delete('/chefs/:id', chefsController.deleteChef);

module.exports = router;
