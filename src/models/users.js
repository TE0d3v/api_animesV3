const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Users = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        // poderia ser adicionado um validate para verificar a força da senha
    }

})

module.exports = Users;
// Sincroniza o modelo com o banco de dados