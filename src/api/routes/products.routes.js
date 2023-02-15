const express = require('express');
const {getProducts, postProducts, putProducts, deleteProducts} = require('../controllers/products.controller');
const {isAuth} = require('../../middleware/auth');
const {isAdmin} = require('../../middleware/auth');
const router = express.Router();

router.get('/', getProducts);
router.post('/',[isAuth], postProducts); // con autenticación
router.put('/:id',[isAdmin], putProducts);// con autenticación y admin
router.delete('/:id',[isAdmin], deleteProducts);// con autenticación y admin

module.exports = router;