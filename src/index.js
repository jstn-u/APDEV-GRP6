const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config");
const { read } = require("fs");

const app = express();
app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("login");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/editprofile", (req, res) => {
    res.render("editprofile")
});

app.get("/profile", (req, res) => {
    res.render("profile");
});

app.get("/lost", (req, res) => {
    res.render("lostandfound");
});

app.get("/adopt", (req, res) => {
    res.render("fosteradoption");
});

app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password,
        email: req.body.email
    }

    const existinguser = await collection.findOne({name: data.name});

    if(existinguser) {
        res.send("User already exists. Please choose a different username.");
    } else {
        const userdata = await collection.insertMany(data);
        console.log(userdata);
    }
})

app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({name: req.body.username});
        if(!check) {
            res.send("user name cannot be found");
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if(isPasswordMatch) {
            res.render("home");
        }else {
            req.send("wrong password")
        }
    }catch {
        res.send("wrong details");
    }
});


app.listen(3000, () => {
    console.log("Listening on port 3000");
})