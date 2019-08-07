const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser')
const path = require('path')


const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('views',path.resolve(__dirname,"public"));
app.use('view engine','ejs');

const entries = []
app.get('/',(req,res,next)=>{
    res.render("index")
})
app.get('/entry',(res,rep,next)=>{
    res.statusCode(200).send("index")
})
app.post('/newentry',(req,res,next)=>{
    if(!req.body.title || !req.body.body){
        res.status(400).send(" entries must a title and body")
        return;
    }
    entries.push({
        title:req.body.title,
        contend:req.body.body,
        published:new Date()
    })
    res.redirect('/')
})
const server = require('http').Server(app);
server.listen(3000,()=>console.log("3000"))