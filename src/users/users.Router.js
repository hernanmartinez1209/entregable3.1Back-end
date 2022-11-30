//!rutas que el profe da para ingresar
// - localhost:9000/api/v1/users
//     - localhost:9000/api/v1/users/:id
//     - localhost:9000/api/v1/users/:id
const router = require('express').Router()

const userServices = require('./users.services')

router.get('/users', userServices.getAllUsers)
router.post('/users', userServices.postUser)

router.get('/users/:id',userServices.getUserById)
router.patch('/users/:id', userServices.patchUser)
router.delete('/users/:id', userServices.deleteUserxx)

module.exports = router