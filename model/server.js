const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "htmls")));

mongoose.connect("mongodb://localhost:27017/postdb")

//create a data schema
const postSchema = {
    title: String,
    caption: String,
    //image: String
}

const Post = mongoose.model("posts", postSchema)

app.get("/home", function(req,res){
    res.sendFile(dirname + "/htmls/home.html") 
})

app.post("/", function (req,res) {
    let newPost = new Post({
        title: req.body.title,
        caption: req.body.caption,
        //image: req.body.image
    });
    newPost.save();
    res.redirect('/home');
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
