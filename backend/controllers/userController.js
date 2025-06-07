const userModel = require("../models/userModel")
exports.adduser =async(user)=>{
    let newuser = new userModel({
        name:user.name,
        age:user.age
    })
    // newuser.save()
    // .then(()=>console.log("user saved"))
    // .catch(()=>console.log("err"))

    let data = []
    let msg =""
    await newuser.save()
    .then(async()=>{
        msg = "record inserted"
        await userModel.find()
        .then((d)=>data =d)
    })

    .catch((err)=>msg = err)
    return{data:data,msg:msg}
}

exports.getusers = async()=>{
    let users = [];
    await userModel.find()
    .then((d)=>{
        console.log(d)
        users = d
    })
    return users
}

exports.getuserbyname= async(uname)=>{
  let r;
  await userModel.find({name:uname})
  .then((d)=>r =d)
  .catch((err)=>r = err)
  return r;
}

exports.deleteuser = async(id)=>{
    let msg= ""
    let data =[]
    // await userModel.findByIdAndDelete(id)
    await userModel.deleteOne({_id:id})
    // .then((d)=>msg= d)
    // .catch((err)=>msg = err)
    // return msg
      .then(async ()=>{
        msg = "record deleted"
        await userModel.find()
        .then((d)=>data = d) 
        })
    .catch((err)=>msg = err)
        return {msg:msg,users:data }
        
}

exports.updateuser = async(id,newdata)=>{
    let msg= ""
    await userModel.findByIdAndUpdate(id,newdata)
    .then((d)=>msg= d)
    .catch((err)=>msg = err)
    return msg
    
}