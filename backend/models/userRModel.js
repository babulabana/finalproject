const mongoose = require("mongoose")
const userRSchema = new mongoose.Schema({
    fullname:{
        type:String
    },
    email:{
        type:String
    },
    contact:{
        type:Number
    },
    password:{
        type:String
    },
})
const UserR =mongoose.model("userr",userRSchema)
module.exports= UserR
console.log("model run")