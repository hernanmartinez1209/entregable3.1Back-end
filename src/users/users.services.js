
const userControllers = require('./users.controllers')
const getAllUsers = (req ,res) => {
    userControllers.findAllUsers()
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch((err) =>{
        res.status(400).json({message: err.message})
    })
}

const getUserById = (req ,res) => {
    const id = req.params.id
    userControllers.findUserById(id)
    .then((data)=>{
        if (data) {
            res.status(201).json(data)
        }else{
            res.status(404).json({message: "ID Fond not"})
        }
    })
}

const postUser = (req,res) => {
    const {email,fisrt_Name,last_Name,password,bithday} = req.body
    userControllers.createUser({email,fisrt_Name,last_Name,password,bithday})
    .then((data)=>{
        res.status(201).json(data)
    })
     .catch((err)=>{
        res.status(404).json({message: err.message})
     })
}
const patchUser = (req ,res) => {
      const id = req.params.id
      const {email,fisrt_Name,last_Name,password,bithday} = req.body

      userControllers.updateUser(id,{email,fisrt_Name,last_Name,password,bithday})
      .then((data)=>{
        if (data) {
            res.status(200).json({message: 'Task Modified Succesfully'})
        }else{
            res.status(404).json({message: "ID Fond not"})
        }
      })
      .catch((err)=>{
        res.status(400).json({message: err.message})
      })
}

const deleteUser = () => {
     const id = req.params.id
     const {email,fisrt_Name,last_Name,password,bithday} = req.body
     userControllers.deleteUser(id,{email,fisrt_Name,last_Name,password,bithday})
     .then((data)=>{
        if (data) {
            res.status(200).json({message: 'Task Delete Succesfully'})
        }else{
            res.status(404).json({message: "ID Fond not"})
        }
     })
     .catch((err)=>{
        res.status(400).json({message: err.message})
     })
}

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser
}


