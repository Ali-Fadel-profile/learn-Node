const express = require('express');

const router = express.Router();
const productsController = require("../controller/products");

// /admin/add-product => GET
router.get('/add-product', productsController.getAddedProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddedProduct);

exports.routes = router;
