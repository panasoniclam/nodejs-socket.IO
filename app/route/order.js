const express = require('express');
const route = express.Router();
const Order = require('../controller/controller.order')
route.get('/findall',Order.findAll)
route.post('/create',Order.create)
// route.post('/order',(req,res,next)=>{
    // res.status(200).json({
    //     message:'this is post mothod'
    // })

// })


route.get('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message:'this is get order by ID',
        id:req.params.orderId
    })
});

route.delete('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message:'this is delete order by id',
        id:req.params.orderId
    })
})
module.exports = route;