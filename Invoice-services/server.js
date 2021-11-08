require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app=express();
const invoiceRoutes = require("./routes/Invoice");
const PORT = process.env.PORT || 5000;


app.use(express.json());
console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}).then(()=>{
    console.log("MONGODB Connected!!!!");
}).catch((err)=>console.log("error with mongodb ",err));

app.get("/",(req,res)=>{
    res.send(` running `);
})

app.use("/Invoice", invoiceRoutes);
app.listen(PORT,()=>console.log("backend server is running ",PORT));