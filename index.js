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
        //server tra ve cho tat ca
        // io.sockets.emit("server-send-data",data+"888")
        //server tra ve cho thang yeu cau
        // socket.emit("server-send-data",data+"88888");
        //server tra ve cho tat ca tru ngouoi yeu cau
        socket.broadcast.emit("server-send-data",data+'9999');
        io.to(socket.id).emit("server-send-data")
       
    }) 
    socket.on("send-color",function(data){
            console.log(data)
        })
})
app.get('/',(rep,res)=>{
    res.render("trangchu");
});