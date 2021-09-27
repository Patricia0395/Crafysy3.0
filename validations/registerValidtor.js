const {body,check} = require('express-validator');
const users = require('../data/users.json');

module.exports = [

    check('name')
        .notEmpty().withMessage('El nombre es requerido'),

    check('email')
        .notEmpty().withMessage('Debes ingresar tu email').bail()
        .isEmail().withMessage('Email inválido'),

    body('email')
        .custom((value,{req}) => {
            let user = users.find(user => user.email === value);
            if(user){
                return false
            }else{
                return true
            }
        }).withMessage('el emai ya se encuentra registrado'),

    check('password')
        .isLength({
            min : 6,
            max : 12
        }).withMessage('La contraseña debe tener un mínimo de 6 y un máximo de 12 caracteres'),

    check('terms')
        .isString('on').withMessage('Debes aceptar los términos y condiciones')
    
]