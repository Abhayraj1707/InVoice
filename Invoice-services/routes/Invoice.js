const router = require("express").Router();
const Invoice = require("../models/Invoice");

router.post("/addInvoice",async(req,res)=>{
    const newInvoice = new Invoice(req.body);
    try{
        const savedInvoice = await newInvoice.save();
        res.status(200).json({
            status: "success",
            data: savedInvoice
        });
    }catch(err){
        res.status(500).json({
            status: "failed",
            data: err
        });
    }
})


router.get("/getInvoice",async(req,res)=>{
    try{
        const invoiceData = await Invoice.find();
        res.status(200).json({
            status: "success",
            data: invoiceData
        });
    }catch(err){
        res.status(500).json({
            status: "failed",
            data: err
        });
    }
})

router.delete("/deleteInvoice/:id",async(req,res)=>{
    try{
        const deletedInvoice = await Invoice.deleteOne({_id: req.params.id});
        res.status(200).json({
            status: "success",
            data: deletedInvoice
        });
    }catch(err){
        res.status(500).json({
            status: "failed",
            data: err
        });
    }
})

module.exports = router ;