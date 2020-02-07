const mysqlConnection = require('../database');
const categoriaCtrl = {}

categoriaCtrl.getCategorias = (req,res) => {
    mysqlConnection.query('CALL rec_obt_categoria(0)',(err, fila, campos) =>{
        if(!err){
            res.json(fila[0]);
        }else{
            console.log(err)
        }
    });
}

categoriaCtrl.getCategoriaById = (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('CALL rec_obt_categoria(?)',[id], (err, fila, campos) =>{
        if(!err){
            res.json(fila[0]);
        }else{
            console.log(err)
        }
    });
}

categoriaCtrl.insCategoria = (req,res) =>{
    const {name,description} = req.body;
    mysqlConnection.query('CALL rec_edit_in_categoria(0,?,?)',[name,description], (err,fila,campos) =>{
        if (!err) {
            res.json({Status: 'Categoria agregada'})
        } else {
            console.log(err);
        }
    });
}

categoriaCtrl.editCategoria = (req,res) =>{
    const { id } = req.params;
    const {name,description} = req.body;
    mysqlConnection.query('CALL rec_edit_in_categoria(?,?,?)',[id,name,description], (err,fila,campos) =>{
        if (!err) {
            res.json({Status: 'Categoria actualizada'})
        } else {
            console.log(err);
        }
    });
}

categoriaCtrl.delCategoria = (req,res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM APP_CATEGORIA WHERE ID = ?',[id], (err, fila, campos) =>{
        if(!err){
            res.json({Status: 'Categoria Eliminada'})
        }else{
            console.log(err)
        }
    });
}



module.exports = categoriaCtrl;