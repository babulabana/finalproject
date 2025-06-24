const  express = require("express")
const connection = require("./connection")
const userRouter = require("./routers/userRouter")
const teacherRouter = require("./routers/teacherRouter")
const productRouter = require("./routers/productRouter")
const cityRouter = require("./routers/cityRouter")
const userRRouter = require("./routers/userRRouter")
const app = express()
const multer = require('multer');
const path = require('path');
const blogrouter = require("./routers/BlogRouter")
const cors =require("cors")
app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
 
    // res.send("this is api home")
    res.send({msg:"this is api home  use user for users "})
})
app.use("/userr",userRRouter)
app.use("/blogs",blogrouter)

app.use("/user",userRouter)
app.use("/teacher",teacherRouter)
app.use("/product",productRouter)
app.use("/city",cityRouter)
app.listen(8080,()=>console.log("server runing get method 8080"))