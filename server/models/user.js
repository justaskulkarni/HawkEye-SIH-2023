const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema =  new Schema({
    email : {type : String},
    password : {type : String},
    role : {type : String, enum : ['BSF' , 'Intelligence Agency', 'Ministry of Defence']},
    latitude : {type: String},
    longitude : {type: String}
})

module.exports = mongoose.model('User', userSchema)