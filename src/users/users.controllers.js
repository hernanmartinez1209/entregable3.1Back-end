// const { where } = require('sequelize')
const { Sequelize, where } = require('sequelize')
const user = require('../models/users.models')



const findAllUsers = async () => {
  const data = await user.findAll()
  return data
}

const findUserById = async (id) => {
    const userId = await user.findOne({
        where: {
            id: id
        }
        })
        return userId
}

const createUser = async (obj) => {
    const newUser = await user.create({
         
    email: obj.email,
    fisrt_Name: obj.fisrt_Name,
   last_Name: obj.last_Name,
   password: obj.password,
   bithday: obj.bithday

    })
    return newUser
}

const updateUser = async (id,obj) => {
    const data = await user.update(obj,{
        where:{
            id: id
        }
    })
    return data[0]
}

const deleteUsers = async(id) => {
    const userId = user.destroy({
      
        where:{
           id:id
        }
    })
    // const userIdDelete = await user.destroy({
    //     where:{
    //         id:id
    //     }
    // })
    //    return userIdDelete[0]
  
   return userId
}
module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUsers
}


