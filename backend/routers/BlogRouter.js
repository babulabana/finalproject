const express = require("express")
const router = express.Router()
const multer = require("multer")
const fs = require("fs")
const blogController= require("../controllers/BlogController")
// for file saving start
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = 'uploads/';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage: storage });
//for file saving end
router.post("/",upload.single('image'),async (req,res)=>
{
     try {
    const { title, content, category,user_id } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

    const blog = {"title": title,"content": content,
         "category":category, "imageUrl":imageUrl ,"user_id":user_id};
    // await blog.save();
    let msg = await  blogController.addBlog(blog)

    res.status(201).json({ message: msg });
  } catch (err) {
    console.error('Error saving blog:', err);
    res.status(500).json({ error: 'Server error' });
  }
})
router.get("/",async(req,res)=>{
    let data = await blogController.getblogs()

    res.send(data)
})
module.exports = router