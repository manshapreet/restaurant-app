const mongoose = require('mongoose');
const {mongo} = require('mongoose');
const {Schema}=mongoose;


const orderSchema = new Schema({
    custID: {type:String},
    orderItems: {type:Array},
    tableNum: {type:String},
    totalPrice: {type:String},
    status: {type:Boolean},
});

module.exports =mongoose.model('Orders', orderSchema);