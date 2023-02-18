const express = require('express');
const {register, login, update} = require('../controllers/user.controller');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.put('/update', update);

module.exports = router;