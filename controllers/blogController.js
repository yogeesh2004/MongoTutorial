const blogModel = require("../models/blogModel");
class BlogController{
    async addBlog(req,res){
        try {
            const response = await blogModel.create({
                title:"k ho yesto jindagi part 2",
                description:"Jindagi jhadawa fir vi ghamandawa part 2"
            });
            res.json(response);
          } catch (error) {
            console.log(error);
            res.json(error);
          }
    }

    async findBlog(req,res){
        const {id} = req.params;
        try {
         const response = await blogModel.findById(id);
         res.json(response);
        } catch (error) {
         res.json(error);
        }
    }

    async updateBlog(req,res){
        const {id} = req.params;
        try {
         const response = await blogModel.findOne({
             _id:id
         });
         response.title = "updated title";
         await response.save();
         res.json(response);
        } catch (error) {
         res.json(error);
        }
    }

    async deleteBlog(req,res){
        const {id} = req.params;
   try {
    const response = await blogModel.deleteOne({
        _id:id
    });
    res.json(response);
   } catch (error) {
    res.json(error);
   }
    }

}
module.exports = BlogController;