const BlogModel = require("../models/BlogModel")
exports.addBlog=async (blog)=>
{
    let msg = "blog not created "
    let newblog = new BlogModel(
        {
        title: blog.title,
        content: blog.content,
        category: blog.category,
        imageUrl:blog.imageUrl,
        user_id:blog.user_id,
                })
    await newblog.save()
    .then(()=>msg = "blog created")
return msg 
}

exports.getblogs = async()=>{
    let data = [];
    await BlogModel.find()
    .then((d)=>{
        console.log(d)
        data = d
    })
    return data
}