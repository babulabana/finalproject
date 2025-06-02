const connection = require("../connection")
const mongoose = require("mongoose")
const teacherSchema = new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    department:{
        type:String
    },
    salary:{
        type:Number
    }
    
})
const Teacher = mongoose.model("teacher",teacherSchema)
module.exports= Teacher
// console.log("teachermodel run")