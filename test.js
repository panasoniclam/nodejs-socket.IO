const express = require('express');
const app = express();
const logger = require('morgan')
app.use(logger('common'))
app.use((req,res,next)=>{
   console.log(req.method+req.url)
   next();
})
app.use((req,res,next)=>{
   const minutes =(new Date()).getMinutes();
   if((minutes%2)===0){
      next();
   }else{
      res.statusCode = 403;
      res.end("not authorized");
   }
   next();
})
app.use((req,res,next)=>{
   res.end("Secret info: the password is")

})

const server = require('http').Server(app)
server.listen(3000)
