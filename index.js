const express = require("express");
const app = express();
const mongoose = require("mongoose");
const blogRouter = require("./routes/blogRouter");

require("dotenv/config");

app.use("/blog/",blogRouter);
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(8000,async(req,res)=>{
    console.log("Server started successfully at port 8000");
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
        console.log("Connected to Database.");
    } catch (error) {
        console.log(error);
    }
    
});
