const express = require("express");
const mongoose = require("mongoose");


const connect = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/Ecom_data")
}

const app = express();


//product Schema
const ProductSchema =new mongoose.Schema({
    prod_name :{type:String,required:true},
    color:{type:String,required:true},
    price:{type:Number,required:true}
   
},{
    versionKey:false,
    timestamps:true
});


const Product = mongoose.model("product",ProductSchema)


app.post("products",async(res,req)=>{

    try{
        const product = await Product.create(req.body);
    return res.send(product);
    }
    catch(err){
return res.statusCode(500).json({message: err.message});
    }
    
})

app.get("/products",async(req,res)=>{

    try{
        const products = await Product.find().lean().exac();
        return res.send(products);
    }
    catch(err){
        return res.statusCode(500).json({message: err.message});
    }
})












app.listen(2345,async()=>{
    await connect()
    console.log("connecting to server 2345")
})