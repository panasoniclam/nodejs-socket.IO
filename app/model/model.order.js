const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
   
    product:{type:Schema.Types.ObjectId,ref:'pruduct',required:true},
    quantity:{type:Number,default:1}

})
const order = mongoose.model("order",orderSchema)
module.exports = order