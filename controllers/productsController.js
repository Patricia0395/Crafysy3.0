const fs = require('fs');
const path = require('path');
let  products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'))


module.exports = {
    add : (req,res) => {
        return res.render('productAdd')
    },
    detail : (req,res) => {
    
        return res.render('productDetail',{
            product : products.find(product => product.id === +req.params.id)
        })
    }
}