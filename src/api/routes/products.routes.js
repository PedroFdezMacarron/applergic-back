const express = require('express');
const {getProducts, getUserProducts, postProducts, putProducts, deleteProducts} = require('../controllers/products.controller');
const {isAuth} = require('../../middleware/auth');
// const {isAdmin} = require('../../middleware/auth');
const router = express.Router();

router.get('/', getProducts);
router.post('/user', getUserProducts);
router.post('/',[isAuth], postProducts); // con autenticación
router.put('/:id',[isAuth], putProducts);// con autenticación 
router.delete('/:id',[isAuth], deleteProducts);// con autenticación y admin

module.exports = router;