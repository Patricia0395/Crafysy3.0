var express = require('express');
var router = express.Router();
const loginValidator = require('../validations/loginValidator');

const {register,processRegister,login, processLogin} = require('../controllers/usersController')

/* /users */
router
    .get('/register', register)
    .post('/register',processRegister)
    .get('/login',login)
    .post('/login',loginValidator, processLogin)

module.exports = router;
