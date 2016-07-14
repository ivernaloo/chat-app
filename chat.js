var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var open = require("open");

// default url router and redirect to the default user interface
app.get('/', function(req, res){
    res.sendFile(__dirname + '/chat.html');
});

// broadcast the news
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

// auto launch
open("http://localhost:3000");