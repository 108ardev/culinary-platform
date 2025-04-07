// routes/groceryListRoutes.js
const express = require('express');
const router = express.Router();
const groceryListController = require('../controllers/groceryListController');

router.post('/grocery-list', groceryListController.generateGroceryList);

module.exports = router;
