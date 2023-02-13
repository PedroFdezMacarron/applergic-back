const express = require('express');
const {getSongs, postSongs, putSongs, deleteSongs} = require('../controllers/foods.controller');
const {isAuth} = require('../../middleware/auth');
const {isAdmin} = require('../../middleware/auth');
const router = express.Router();

router.get('/', getSongs);
router.post('/',[isAuth], postSongs); // con autenticación
router.put('/:id',[isAdmin], putSongs);// con autenticación y admin
router.delete('/:id',[isAdmin], deleteSongs);// con autenticación y admin

module.exports = router;