const conexion = require('../database/db');

exports.save = (req, res)=>{
    const NombreProducto = req.body.NombreProducto;
    const DescripcionProducto = req.body.DescripcionProducto;
    const Precio = req.body.Precio;
    const Categoria = req.body.Categoria;
    const Marca = req.body.Marca;
    const Stock = req.body.Stock;

    console.log(NombreProducto +" - " +Marca);

    conexion.query('INSERT INTO productos SET ?',{NombreProducto:NombreProducto, DescripcionProducto:DescripcionProducto, Precio:Precio, Categoria:Categoria, Marca:Marca, Stock:Stock}, (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })

  
};

exports.update =(req, res)=>{
    const IdProducto = req.body.IdProducto;
    const NombreProducto = req.body.NombreProducto;
    const DescripcionProducto = req.body.DescripcionProducto;
    const Precio = req.body.Precio;
    const Categoria = req.body.Categoria;
    const Marca = req.body.Marca;
    const Stock = req.body.Stock;
    conexion.query('UPDATE productos SET ? WHERE IdProducto= ?', [{NombreProducto:NombreProducto, DescripcionProducto:DescripcionProducto, Precio:Precio, Categoria:Categoria, Marca:Marca, Stock:Stock}, IdProducto],  (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}