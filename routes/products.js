const express = require('express');
const router = express.Router();

const path = require('path');
const multer = require('multer');

/* controlador */
const {add, detail, edit, search, filter,store,update,destroy} = require('../controllers/productsController');

/* configuración de multer */
const storage = multer.diskStorage({
    destination : (req,file,callaback) => {
        callaback(null,'./public/images/products')
    },
    filename : (req,file,callaback) => {
        callaback(null,'img-phone-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage
})

/* validaciones */
const productAddValidator = require('../validations/productAddValidator')

/* /products */
router.get('/add',add);
router.post('/add',upload.single('image'),productAddValidator,store);
router.get('/detail/:id',detail);
router.get('/edit/:id',edit);
router.put('/update/:id',update)
router.get('/search',search);
router.get('/filter',filter);
router.delete('/destroy/:id',destroy)

module.exports = router;