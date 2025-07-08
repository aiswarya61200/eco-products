const express = require('express');
const router = express.Router();
const EvProduct = require('../models/EvProduct');

// Get all EV products
router.get('/', async (req, res) => {
  try {
    const products = await EvProduct.find();
    console.log(JSON.stringify(products)
    )
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single EV product
router.get('/:id', async (req, res) => {
  try {
    const product = await EvProduct.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;