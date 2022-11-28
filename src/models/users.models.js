const { DataTypes } = require('sequelize')

const dbUsers = require('../utils/database')


const user =  dbUsers.define('user',{
//? USER
//* {
//*     id: 5,
//     email: 'email user',
//*     fisrt name: 'name user',
//     last name: lasts name users
//*     password:"password de user",
//      bithday: fecha de nacimiento del users
//* }
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull: true,
        unique:true
    },
    fisrt_Name:{
        type:DataTypes.STRING,
        allowNull:true,
        unique:true
    },
    last_Name:{
        type:DataTypes.STRING,
        allowNull:true,
        unique:true

    },
    password:{
        type:DataTypes.STRING,
        allowNull:true,
        unique:true
    },
    bithday:{
        type:DataTypes.STRING,
        allowNull:true,
        unique:true
    }
})
module.exports = user


