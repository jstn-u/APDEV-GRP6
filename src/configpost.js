const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/postdb");

connect.then(() => {
    console.log("Database connected Successfully");
})

.catch(() => {
    console.log("Database cannot be connected");
});



const PostSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    }
})

const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;