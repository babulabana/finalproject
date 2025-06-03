const express = require("express")
const  productController = require("../controllers/productController")
const router = express.Router()
router.post("/",(req,res)=>{
    let p = { name:req.body.name,
    price:req.body.price,
    title:req.body.title,
    category:req.body.category,
    company:req.body.company}
    productController.addproduct(p)
    res.send("product add")
})
router.get("/",async(req,res)=>{
    let products = await productController.getproducts()
    // res.send(products)
    res.send({products:products})

})

router.get("/companybyname/:company",async(req,res)=>{
    let company = req.params.company
    let products = await productController.getcompanybyname(company)
    res.send(products)
})

router.delete("/:id",async(req,res)=>{
    let id = req.params.id
    let msg = await productController.deleteproduct(id)
    res.send(msg)
})

router.put("/",async(req,res)=>{
     let pid = req.body.id;
    let pname = req.body.name;
    let pprice = req.body.price;
   let ptitle = req.body.title;
    let pcategory = req.body.category;
    let pcompany = req.body.company

    let newproduct = {name:pname,price:parseInt(pprice),title:ptitle,category:pcategory,company:pcompany}
    let msg = await productController.updateproduct(pid,newproduct)
    res.send(msg)
})
module.exports= router