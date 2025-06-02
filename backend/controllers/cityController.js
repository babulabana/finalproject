const cityModel = require("../models/cityModel")
exports.addcity = async(city)=>{
 let newcity = new cityModel({
  name:city.name,
  state:city.state ,
  country: city.country,
  population:city.population ,
  area:city.area ,
  official_language:city.official_language ,
  metro:city.metro,

})
const existingCity = await cityModel.findOne({ name: city.name, state: city.state });
if(existingCity){
    return console.log("City already exists in this state"); 
}
else{
 newcity.save()
 .then(()=>console.log("city save"))
 .catch(()=>console.log("err"))
 }
}

exports.getcity = async()=>{
    let city = [];
    await cityModel.find()
    .then((d)=>{
        console.log(d)
        city= d
    })
    return city
}
exports.getcitybyname = async(cname)=>{
    let city ;
    await cityModel.find({name:cname})
    .then((d)=>{
        console.log(d)
        city= d
    })
    return city
}
exports.getcitybylanguage = async(lname)=>{
    let city =[];
    await cityModel.find({official_language:lname})
    .then((d)=>{
        console.log(d)
        city= d
    })
    return city
}

exports.getcitybystate = async(sname)=>{
    let city =[];
    await cityModel.find({state:sname})
    .then((d)=>{
        console.log(d)
        city= d
    })
    return city
}
exports.deletecity = async(id)=>{
    let msg= ""
    await cityModel.deleteOne({_id:id})
    .then((d)=>msg= d)
    .catch((err)=>msg = err)
    return msg
    
}

exports.updatecity = async(id,newdata)=>{
    let msg= ""
      const existingCity = await cityModel.findOne({ name: newdata.name, state: newdata.state, _id: { $ne: id } });
       if (existingCity) {
    return { error: "Another city with the same name already exists in this state" };
    }
    
    await cityModel.findByIdAndUpdate(id,newdata, { new: true })
    .then((d)=>msg= d)
    .catch((err)=>msg = err)
    return msg
    
    
}