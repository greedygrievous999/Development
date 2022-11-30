const express = require("express");
const app = express();
const mongoose = require("mongoose")
const productRoute = require("./routes/product")

mongoose
    .connect("mongodb+srv://user:userpassword@cluster0.jjgonja.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>console.log("DB Connection Successful"))
    .catch((err)=>{
        console.log(err);
    });

app.use(express.json())
app.use("/api/products", productRoute);

app.listen(5000, ()=>{
    console.log("Backend server is running!");
});