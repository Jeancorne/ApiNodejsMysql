const Sequelize_us = require('sequelize');
const config_us = require('../config');

const UsuarioModulo = config_us.sequelize.define(
    'tblUsuario',
    {
        idusuario: {
            type: Sequelize_us.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_usuario: {
            type: Sequelize_us.STRING(50),
            allowNull: false,
        },
        apellido_usuario: {
            type: Sequelize_us.STRING(50),
            allowNull: false,
        },
        email_usuario: {
            type: Sequelize_us.STRING(100),
            allowNull: false,
        },
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize_us.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize_us.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }
)
UsuarioModulo.removeAttribute('id');


module.exports = UsuarioModulo;