const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminRoutes = require("./admin")
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render("shop", { products: adminRoutes.products, pageTitle: "Shop", path: "/" })
});

module.exports = router;
