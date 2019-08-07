const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongodb = require('mongoose')
const app = express();
require('dotenv').config()
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(logger('dev'))

console.log(process.env.PASSWD)
mongodb.connect(
    'mongodb+srv://admin:'+process.env.PASSWD+'@cluster0-nh64w.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser:true
    }
)
const Product = require('./app/route/product');
const Order = require('./app/route/order')
app.use('/product',Product)
app.use('/order',Order)
app.get('/',(req,res,next)=>{
    res.send("ahihihik")
})
app.use((req,res,next)=>{
    const err = new Error('not found');
    err.status = 404;
    next(err)
})
app.use((req,res,next)=>{
    const err = app.get('env') === 'development' ?  err : {}
    const status = err.status || 500;
    res.status(status).send({
        message:err.message
    })
})
module.exports = app;