const express = require('express');
const app = express();


app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");


const server = require('http').Server(app);
const io = require('socket.io')(server);
server.listen(3000);

io.on("connection",function(socket){
    console.log("co nguoi ket noi",socket.id);
    socket.on("disconnect",function(){
        console.log(socket.id,"ngat ket noi")
    })
    socket.on("client-send-data",function(data){
        console.log(data);
        io.sockets.emit("server-send-data",data+"888")
    })
})
app.get('/',(rep,res)=>{
    res.render("trangchu");
});