const express= require('express');

const app=express();


app.get('/',(req,res)=>{
    res.send("Invoice Application");
})

app.listen(3000,()=>{
    console.log(`server is running on http://localhost:${3000}`)
})