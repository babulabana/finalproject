const express = require("express")
const teacherController = require("../controllers/teacherController")
const router =express.Router()
router.post("/",(req,res)=>{
    let t = {name:req.body.name,age:req.body.age,department:req.body.department,salary:req.body.salary}
    teacherController.addteacher(t)
    res.send({msg:"teacher added"})
})
router.get("/",async(req,res)=>{
    let teachers = await teacherController.getteacher()
    // res.send(teachers)
    res.send({teachers:teachers})

})
router.get("/teacherbyname/:name",async(req,res)=>{
    let name = req.params.name
    let t = await teacherController.getteacherbyname(name)
    res.send(t)
})

router.delete("/:id",async(req,res)=>{
    let id = req.params.id
    let msg = await teacherController.deletetecher(id)
    res.send(msg)
})

router.put("/",async(req,res)=>{
    let tid = req.body.id;
    let tname = req.body.name;
    let tage = req.body.age;
    let tdepartment = req.body.department;
    let tsalary = req.body.salary;
    let newteacher = {name:tname,age:parseInt(tage),department:tdepartment,salary:parseInt(tsalary)}
    let msg = await  teacherController.updateteacher(tid,newteacher)
    res.send(msg)
})

module.exports= router