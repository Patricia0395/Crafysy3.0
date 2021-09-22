const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerImageProduct')

/* controlador */
const {add, detail, edit, search, filter,store,update,destroy} = require('../controllers/productsController');

/* validaciones */
const productValidator = require('../validations/productValidator')

/* /products */
router.get('/add',add);
router.post('/add',upload.array('image'),productValidator,store);
router.get('/detail/:id',detail);
router.get('/edit/:id',edit);
router.put('/update/:id',productValidator,update)
router.get('/search',search);
router.get('/filter',filter);
router.delete('/destroy/:id',destroy)

module.exports = router;