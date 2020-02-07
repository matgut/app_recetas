const  { Router }= require('express');
const router = Router();
const ctrCategoria = require('../controllers/CategoriaController');


router.route('/')
    .get(ctrCategoria.getCategorias)
    .post(ctrCategoria.insCategoria)


router.route('/:id')
    .get(ctrCategoria.getCategoriaById)
    .put(ctrCategoria.editCategoria)
    .delete(ctrCategoria.delCategoria)

module.exports = router;
