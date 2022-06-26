const express = require('express');
const router = express.Router();

const AuthorController= require("../controllers/authorController")
const BlogController= require("../controllers/blogController")
const Middleware = require("../middleware/auth")

router.post("/authors", AuthorController.createAuthor)

router.post("/blogs",Middleware.authentication, BlogController.createBlog)

router.get("/blogs",Middleware.authentication,BlogController.blogList)

router.put("/blogs/:blogId",Middleware.authentication,Middleware.authorization,BlogController.updateBlog)

router.delete("/blogs/:blogId",Middleware.authentication,Middleware.authorization,BlogController.deleteBlogById)

router.delete("/blogs",Middleware.authentication, Middleware.deleteByquerying, BlogController.deleteByQuerying)

router.post("/login", AuthorController.authorLogIn)

module.exports = router;