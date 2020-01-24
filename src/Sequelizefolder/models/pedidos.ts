const Sequelize_pedi = require('sequelize');
const config_pedi = require('../config');
const Userr = require('./usuario');

const PedidoModulo = config_pedi.sequelize.define(
    'tblPedidos',
    {
        IdPedido: {
            type: Sequelize_pedi.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        telefono: {
            type: Sequelize_pedi.INTEGER,
            allowNull: false,
        },
        direccion: {
            type: Sequelize_pedi.STRING(100),
            allowNull: false,
        },
        hora_entrega: {
            type: Sequelize_pedi.DATE,
            allowNull: false,
        },
        franja_entrega: {
            type: Sequelize_pedi.TIME,
            allowNull: false,
        },     
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize_pedi.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize_pedi.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }
)
PedidoModulo.removeAttribute('id');

Userr.hasMany(PedidoModulo,{
    foreignKey:'idUsuario'
});

module.exports = PedidoModulo;
