const mongoose = require("mongoose")
const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user_id:String,
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog