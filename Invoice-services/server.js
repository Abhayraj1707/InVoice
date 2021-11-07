const express = require("express");
const mongoose = require("mongoose");
const app=express();
const invoiceRoutes = require("./routes/Invoice");
const PORT = process.env.PORT || 5000;
MONGO_URL = "mongodb://127.0.0.1:27017/InvoiveLocalDataBase"

app.use(express.json());

mongoose.connect(MONGO_URL,{
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