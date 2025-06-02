const express = require("express")
const cityController = require("../controllers/cityController")
const { populate } = require("../models/productModel")
const router = express.Router()
router.post("/",(req,res)=>{
    let c ={
          name:req.body.name,
  state:req.body.state ,
  country: req.body.country,
  population:req.body.population ,
  area:req.body.area ,
  official_language:req.body.official_language ,
  metro:req.body.metro    }
  cityController.addcity(c)
  res.send("city add")
})

router.get("/",async(req,res)=>{
    let city = await cityController.getcity()
    res.send(city)
})
router.get("/citybyname/:name",async(req,res)=>{
    let name =req.params.name
    let msg = await cityController.getcitybyname(name)
    res.send(msg)
})
router.get("/citybylanguage/:official_language",async(req,res)=>{
    let lname =req.params.official_language
    let msg = await cityController.getcitybylanguage(lname)
    res.send(msg)
})
router.get("/citybystate/:state",async(req,res)=>{
    let sname =req.params.state
    let msg = await cityController.getcitybystate(sname)
    res.send(msg)
})
router.delete("/:id",async(req,res)=>{
    let id = req.params.id
    let msg = await cityController.deletecity(id)
    res.send(msg)
})

router.put("/",async(req,res)=>{
    
    
    let cid = req.body.id;
    let cname = req.body.name;
  let cstate = req.body.state ;
  let ccountry =  req.body.country;
  let cpopulation = req.body.population;
  let carea = req.body.area;
  let cofficial_language = req.body.official_language;
  let cmetro = req.body.metro   

    let newcity = {name:cname,state:cstate,country:ccountry,population:parseInt(cpopulation),area:parseInt(carea),official_language:cofficial_language,metro:cmetro}
    let msg = await  cityController.updatecity(cid,newcity)
    res.send(msg)
})
module.exports= router