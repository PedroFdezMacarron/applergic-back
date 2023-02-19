const express = require('express');
const {register, login, update, update2} = require('../controllers/user.controller');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.put('/update', update);
router.patch('/update2', update2);

module.exports = router;