const userRModel = require("../models/userRModel")
exports.adduserr = async(userr)=>{
    let newuserr = new userRModel({
        fullname:userr.fullname,
        email:userr.email,
        contact:userr.contact,
        password:userr.password
    })
    let data = []
    let msg = ""
    await newuserr.save()
    .then(async()=>{
        msg = "record inserted"
      await userRModel.find()
       .then((d)=>data = d)
    })
    .catch((err)=>msg=err)
    return{ data:data,msg:msg}
}

exports.loginUser= async(user)=>{
    let msg = "login failed"
    let condition ={email:user.email,password:user.password}
    await userRModel.findOne(condition)
    .then((d)=>{
        if(d){
            msg = "login Successfully"
        }
    })
    console.log(msg)
    return{msg:msg}

}


exports.getusers =async ()=>
{
    let users = [];
    await userRModel.find()
    .then((d)=>{
        console.log(d)
        users = d
    })
    return users
}
exports.getuserbyName =async (uname)=>
{
    let r ;
    await userRModel.findOne({fullname:uname})
    .then((d)=>r = d)
    .catch(()=>r="err")
    return r;
}
exports.deleteuser =async (id)=>
{
    let msg = ""
    let data = []
//    await userModel.findByIdAndDelete(id)
    await userRModel.deleteOne({_id:id})
   .then(async ()=>{
    msg = "record deleted"
    await userRModel.find()
    .then((d)=>data = d)
}
)
.catch((err)=>msg = err)
    return {msg:msg,users:data }
}
exports.updateuser = async(id,newdata)=>
{
    let msg = "";
    console.log(id)
    let data = []
    await userRModel.findByIdAndUpdate(id,newdata)
    .then(async (d)=>
        {
           msg = "record updated"
            await userRModel.find()
            .then((d)=>data = d)
        })
    .catch((err)=>msg = err)
    
return {data:data,msg:msg}
}