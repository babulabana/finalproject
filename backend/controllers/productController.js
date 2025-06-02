const productModel = require("../models/productModel")
exports.addproduct = (product)=>{
 let newproduct = new productModel({
    name:product.name,
    price:product.price,
    title:product.title,
    category:product.category,
    company:product.company

 })

 newproduct.save()
 .then(()=>console.log("product save"))
 .catch(()=>console.log("err"))
}

exports.getproducts = async()=>{
    let products = [];
    await productModel.find()
    .then((d)=>{
        console.log(d)
        products= d
    })
    return products
}

exports.getcompanybyname = async(pcompany)=>{
    let p =[];
    await productModel.find({company:pcompany})
    .then((d)=>p =d)
    .catch((err)=>p = err)
    return p;
}

exports.deleteproduct = async(id)=>{
    let msg =""
    // await productModel.findByIdAndDelete({id})
    await productModel.deleteOne({_id:id})
    .then((d)=>msg = d)
    .catch((err)=>msg = err)
    return msg 
}
exports.updateproduct = async(id,newdata)=>{
    let msg =""
    await productModel.findByIdAndUpdate(id,newdata)
    .then((d)=>msg = d)
    .catch((err)=>msg = err)
    return msg 
}