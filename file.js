const express = require('express');
const app = express()

app.get('/random/:min/:max',(req,res,next)=>{
    const min = parseInt(req.params.min) ;
    const max = parseInt(req.params.max);

     if(isNaN(min) || isNaN(max)){
         res.status(404).send('bad request')
     }
     const result = Math.round(Math.random()*(max-min) +min)
     res.status(200).send({result:result})
})

const server = require('http').Server(app)
server.listen(3000)