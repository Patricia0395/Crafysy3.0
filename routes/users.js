var express = require('express');
var router = express.Router();
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidtor');

const {register,processRegister,login, processLogin,logout} = require('../controllers/usersController')

/* /users */
router
    .get('/register', register)
    .post('/register',registerValidator, processRegister)
    .get('/login',login)
    .post('/login',loginValidator, processLogin)
    .get('/logout',logout)

module.exports = router;
