const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');
const users = require(path.join(__dirname,'../data/users.json'));
const {validationResult} = require('express-validator')

module.exports = {
    register : (req,res) => {
        return res.render('register')
    },
    processRegister : (req,res) => {
        const {name,email,password} = req.body;
        let user = {
            id : users.length != 0 ? users[users.length - 1].id + 1 : 1,
            name : name.trim(),
            email : email.trim(),
            password : bcrypt.hashSync(password,10),
            avatar : 'default.png',
            rol : "user"
        }
        users.push(user);
        fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(users,null,3),'utf-8');
        return res.redirect('/')
    },
    login : (req,res) => {
        return res.render('login')
    },
    processLogin : (req,res) => {
        let errors = validationResult(req);
        
        if(errors.isEmpty()){
            let user = users.find(user => user.email === req.body.email);
            req.session.userLogin = {
                id : user.id,
                name : user.name,
                avatar : user.avatar,
                rol : user.rol
            }
        }
    }
}