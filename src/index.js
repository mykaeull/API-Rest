const express = require('express')
const cors = require('cors')
//const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

require('./controllers/authController')(app)
require('./controllers/projectController')(app)

app.listen(3333, () => console.log('rodando'))