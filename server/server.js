if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

const authroutes = require('./routes/AuthRoutes')
app.use('/api/auth', authroutes)

const server = require('http').createServer(app)
const MYPORT = process.env.PORT || 6100

const DB_URL = process.env.MONGO_URL
mongoose.connect(DB_URL)
    .then(() => console.log('Connection with MongoDB established successfully'))
    .catch(e => console.log(e))

server.listen(MYPORT, () => {
    console.log(`Server running on ${MYPORT}`)
})
