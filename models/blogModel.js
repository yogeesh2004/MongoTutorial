const mongoose = require('mongoose');

const blogSchema =  new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String
},
{
    timestamps:true
}
);

const blogModel = mongoose.model("blogs",blogSchema);

module.exports= blogModel;