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
        },
        unique: true // garante que o email seja único
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        // poderia ser adicionado um validate para verificar a força da senha
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'),
        defaultValue: 'user'
    }

})

module.exports = Users;
// Sincroniza o modelo com o banco de dados