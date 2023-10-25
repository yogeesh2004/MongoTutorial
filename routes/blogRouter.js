const {Router} = require("express");
const BlogController = require("../controllers/blogController");
const router = Router();

const  blogController = new BlogController();
router.post("/add",blogController.addBlog);
router.get("/search/:id",blogController.findBlog);
router.patch("/update/:id",blogController.updateBlog);
router.delete("/delete/:id",blogController.deleteBlog);




module.exports = router;