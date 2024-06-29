const mongoose = require('mongoose');
const {mongo} = require('mongoose');
const {Schema}=mongoose;


const customerSchema = new Schema({
    phone: {type:String},
    name: {type:String}

});

module.exports =mongoose.model('Customers', customerSchema);

