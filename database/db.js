const mysql = require('mysql');
const router = require('../router');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'proyectosammy'
});


conexion.connect((error)=>{
    if (error){
        console.error('El error de conexion es:' +error);
        return 
    }
    console.log('!conectado a bd');
})

module.exports = conexion;
