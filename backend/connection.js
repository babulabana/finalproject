const mongoose = require("mongoose")
// mongoose.connect("mongodb://localhost:27017/finalproject")
const connectionstring = "mongodb://localhost:27017/finalproject"

mongoose.connect(connectionstring)
.then(()=>console.log("db connection"))
.catch(()=>console.log("err"))