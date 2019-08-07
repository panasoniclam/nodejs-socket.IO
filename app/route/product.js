const express = require('express');
const route = express.Router();
const Product = require('../model/model.product')
const Product_controller = require('./../controller/controller.product')
route.get('/product',Product_controller.get)
route.post('/product',Product_controller.post)

route.get('/:lamID',Product_controller.getById)

// route.patch('/lamID',Product_controller.patchById)
// route.patch('/:lamID',(req,res,next)=>{
    // res.status(200).json({
    //     message:'you have patch'
    // })
//     const id = req.params.lamID
  
   
//     Product.update({_id:id},{$set:{title:req.body.title,contend:req.body.contend}})
//     .then(result=>{
//         console.log(result)
//         res.status(200).json({
//             message:'update confg',
//             result
//         })
//         .catch(err=>{
//             next(err)
//         })
//     })
     
// })

route.delete('/:lamID',(req,res,next)=>{
    const id= req.params.lamID;
    Product.remove({_id:id})
    .then(result=>{
        res.status(200).json({
            message:'delete conrg',
            result
        })
    })
    .catch(err=>{
       next(err)
    })
    // res.status(200).json({
    //     message:'you delete method'
    // })
})
module.exports = route