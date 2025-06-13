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
    .then((d)=>{
        msg = "record inserted"
       console.log(d.data)
    })
    .catch((err)=>msg=err)
    return msg
}