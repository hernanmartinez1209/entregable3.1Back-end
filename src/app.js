const express = require('express')

const dbUser = require('./utils/database')
const usersRoter = require('./users/users.Router')

//*inici del config
const port = 9000
const app = express()
// app.use(express.json())
app.use(express.json())


dbUser.authenticate()
 .then(()=>console.log('Database Autenticada Correctamente'))
 .catch((err)=>console.log(err))
 dbUser.sync()
.then(()=>console.log('Database Sincronizada Correctamente'))
.catch((err)=>console.log(err))

app.get('/api/v1', (req, res) => {
    res.json({message: 'Ok!'})
}) 
app.use('/api/v1', usersRoter)

app.listen(port,() => {
    console.log(`Server started at port ${port}`)
})
