// const connection = require()
const mongoose= require("mongoose")
const citySchema = new mongoose.Schema({
    name:{
       type:String
    },
    state:{
       type:String
    },
    country:{
       type:String
    },
    population:{
       type:Number
    },
    area :{
        type:Number
        },
    official_language :{
        type:String
        },
    metro:{
       type:Boolean
    },

})
const city = mongoose.model("city",citySchema)
module.exports = city