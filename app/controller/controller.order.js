const Order = require('../model/model.order')
const mongoose = require('mongoose')
module.exports = {
    findAll:(req,res,next)=>{
        Order.find({})
        .select('product quantity _id')
        .exec()
        .then(result=>{
            res.status(200).json({
                // count:docs.length,
                // orders: docs.map(doc=>{
                //     return {
                //         _id:doc._id,
                //         product:doc.product,
                //         quantity:doc.quantity,
                //         request:{
                //             type:'GET',
                //             url:'http://localhost:3000/order/'+doc._id
                //         }
                //     }
                // })
                result
            })
           
        })
        .catch(err=>{
            res.status(500).json(err)
            
        })
    },
    create:(req,res,next)=>{
        const order = new Order({
           
            product:req.body.product,
            quantity:req.body.quantity
        })
        order.save()
        .then(result=>{
            res.status(200).json(result)
            console.log(result)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }
}