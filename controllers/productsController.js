module.exports = {
    add : (req,res) => {
        return res.render('productAdd')
    },
    detail : (req,res) => {
        return res.render('productDetail')
    }
}