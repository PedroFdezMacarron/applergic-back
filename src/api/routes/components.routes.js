const express = require('express');
const {getComponents, postComponents, putComponents, deleteComponents} = require('../controllers/components.controller');
const {isAuth} = require('../../middleware/auth');
// const {isAdmin} = require('../../middleware/auth');
const router = express.Router();

router.get('/', getComponents);
router.post('/',[isAuth], postComponents); // con autenticación
router.put('/:id',[isAuth], putComponents);// con autenticación y admin
router.delete('/:id',[isAuth], deleteComponents);// con autenticación y admin

module.exports = router;