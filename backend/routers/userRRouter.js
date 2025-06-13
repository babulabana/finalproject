const express = require("express")
const userRController = require("../controllers/userRController")
const router = express.Router()
router.post("/",(req,res)=>{
 let u = {fullname:req.body.fullname,email:req.body.email,contact:req.body.contact,password:req.body.password}
 userRController.adduserr(u)
 res.send("register added")
})

module.exports= router