const Sequelize = require('sequelize');
var db = {}
const sequelize = new Sequelize('UsuariosPedidos','root','',{
    host:'localhost',
    dialect:'mysql',
    omitNull: true
})
db = {
    sequelize:sequelize
} 


module.exports = db;
