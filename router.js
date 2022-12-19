const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/', (req, res)=>{

    conexion.query('SELECT * FROM productos', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index', {results:results});
            }
        
    })
})


router.get('/create', (req, res)=>{
    res.render('create');
})

router.get('/edit/:IdProducto', (req, res)=> {
    const IdProducto = req.params.IdProducto;
    conexion.query('SELECT * FROM productos WHERE IdProducto=?', [IdProducto], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit', {user:results [0]});
            }
    })
})

router.get('/delete/:IdProducto', (req, res)=>{
    const IdProducto = req.params.IdProducto;
    conexion.query('DELETE FROM productos WHERE IdProducto = ?', [IdProducto], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
            }
    })

});



const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update',crud.update);

module.exports = router;