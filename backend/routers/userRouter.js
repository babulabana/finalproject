const express = require("express")
const userController = require("../controllers/userController")
const router = express.Router()
router.post("/",(req,res)=>{
    // let u = {name:req.body.name,age:req.body.age}
    let u = {name:req.body.name,age:parseInt(req.body.age)}
    userController.adduser(u)
    res.send({msg:"user added"})
})
router.get("/",async(req,res)=>{
    let users = await userController.getusers()

    res.send({users:users})
})

router.get("/userbyname/:name",async(req,res)=>{
    let name = req.params.name
    let users = await userController.getuserbyname(name)
    res.send(users)
})
router.delete("/:id",async(req,res)=>{
    let id = req.params.id
    let msg = await userController.deleteuser(id)
    res.send(msg)
})

router.put("/",async(req,res)=>{
    let uid = req.body.id;
    let uname = req.body.name;
    let uage = req.body.age;
    let newuser = {name:uname,age:parseInt(uage)}
    let msg = await  userController.updateuser(uid,newuser)
    res.send(msg)
})

module.exports= router