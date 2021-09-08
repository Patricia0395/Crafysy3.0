const express = require('express');
const router = express.Router();

const {add, detail, edit, search, filter,store,update} = require('../controllers/productsController');

/* /products */
router.get('/add',add);
router.post('/add',store);
router.get('/detail/:id',detail);
router.get('/edit/:id',edit);
router.put('/update/:id',update)
router.get('/search',search);
router.get('/filter',filter);

module.exports = router;