const Product = require('./../model/model.product')
require('express')
const mongoose = require('mongoose')
// module.exports = {
//     get:(req,res,next)=>{
//         Product.find({})
//         .then(result=>{
//             res.status(200).send(result)
//         })
//         .catch(err=>{
//             next(err)
//         })
//     },
//     post:(req,res,next)=>{
//         const product = new Product({
//             title:req.body.title,
//             contend:req.body.contend
//         })
//         product.save()
//         .then(result=>{
//             res.status(200).json({
//                  message:'congr post',
//                  result
//             })
//             console.log(result)
//         })
//         .catch(err=>{

//             res.status(500).json({
//                 err
//             })
//         })
//     },
//     getById:(req,res,next)=>{
//         let id = req.params.lamID;
//         console.log(id)
         // Product.findOne({},(err,result)=>{
         //     console.log(result)
         // })
//          Product.findById(id)
//         .then(product=>{
//             res.status(200).json(product)
//         })
//         .catch(err=>{
//             next(err)
//         })
//     },
//     patchById:(req,res,next)=>{
//         const id = req.params.lamID;
//         Product.update({_id:id},{$set:{title:req.body.title,contend:req.body.contend}})
//         .then(result=>{
//             res.status(200).json({
//                 message:'congr update',
//                 require
//             })
//             console.log(result)
//         })
//         .catch(err=>{
//             res.status(500).json({
//                 err
//             })
//         })
//     }
// }
const  missing = require('../../helper/missing') 
const create = async (req,resp)=>{
    try{
        if(missing.body(req,resp,'label')) return ;
        const doc = new Product({title:req.body.title,contend:req.body.contend})
        await doc.save()
        return resp.status(200).send({
            success:true,
            label:doc
        })
    }catch(err){
        if(err.code ===11000){
            return resp.status(400).send({
                success:false,
                code:err.code,
                error:'Duplicate key'
            })
        }
        return resp.status(500).send({
            status:'error',
            message:'Internet server error'
        })
    }
}
module.exports = create