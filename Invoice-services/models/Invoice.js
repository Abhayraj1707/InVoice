const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
        userName: {
            type: String,
            require: true
        },
        phoneNumber: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },

        status: {
            type: String,
            default: "unpaid",
        },
        amount: {
            type: Number,
        },
        description: [
            {
                itemName: {
                    type: String,
                    require: true
                },
                itemCost: {
                    type: Number,
                    require: true
                },
                itemQuantity: {
                    type: Number,
                    require: true
                },
                itemTotalCost: {
                    type: Number,
                    default: 0,
                    require: false
                }
            }
        ]
    },{timestamps:true}
);

InvoiceSchema.pre('save', async function(next){
    let sum=0;
    for(var x of this.description) {
        x.itemTotalCost = x.itemCost * x.itemQuantity;
        sum+=x.itemTotalCost;
    }
    this.amount=sum;
    next();
})

module.exports = mongoose.model("Invoice",InvoiceSchema);
