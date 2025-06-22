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
                })
    await newblog.save()
    .then(()=>msg = "blog created")
return msg 
}

exports.getublog = async()=>{
    let blogs = [];
    await BlogModel.find()
    .then((d)=>{
        console.log(d)
        blogs = d
    })
    return blogs
}