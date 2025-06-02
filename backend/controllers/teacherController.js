const teacherModel = require("../models/teacherModel")
exports.addteacher = (teacher)=>{
    let newteacher = new teacherModel({       
        name:teacher.name,
        age:teacher.age,
        department:teacher.department,
        salary:teacher.salary
    })
  newteacher.save()
  .then(()=>console.log("teacher save"))
  .catch(()=>console.log("err"))
}
exports.getteacher = async()=>{
    let teachers = [];
    await teacherModel.find()
    .then((d)=>{
        console.log(d)
        teachers = d
    })
    return teachers
}
exports.getteacherbyname= async(tname)=>{
  let r;
  await teacherModel.findOne({name:tname})
  .then((d)=>r =d)
  .catch(()=>r ="err")
  return r;
}

exports.deletetecher = async(id)=>{
    let msg= ""
    // await userModel.findByIdAndDelete(id)
    await teacherModel.deleteOne({_id:id})
    .then((d)=>msg= d)
    .catch((err)=>msg = err)
    return msg
    
}

exports.updateteacher = async(id,newdata)=>{
    let msg= ""
    await teacherModel.findByIdAndUpdate(id,newdata)
    .then((d)=>msg= d)
    .catch((err)=>msg = err)
    return msg
    
}