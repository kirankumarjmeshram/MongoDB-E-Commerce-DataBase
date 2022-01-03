const express = require("express");
const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect(" mongodb://127.0.0.1:27017/")
}

const app = express();

app.listen(2345,async()=>{
    console.log("connecting to server 2345")
})