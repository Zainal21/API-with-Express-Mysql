const express = require('express');
const router = express.Router();

// Required Controller
const BarangController = require('../controllers/BarangController');

// ROUTE API
router.get('/', BarangController.index);
router.get('/:id', BarangController.detail);
router.post('/', BarangController.store);
router.put('/:id', BarangController.update);
router.delete('/:id', BarangController.destroy);

module.exports = router;