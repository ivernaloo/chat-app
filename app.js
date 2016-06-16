var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (req, res){ // server created from http package
    var parseUrl = url.parse(req.url, true);
    switch(parseUrl.pathname){
        case '/':
            // Read the file into memory and push it to the client
            fs.readFile('index.html', function(err, content){
                if (err) {
                    res.writeHead(500);
                    res.end();
                }
                else {
                    res.writeHead(200, {'Content-Type' : 'text/html'});
                    res.end(content, 'utf-8');
                }
            })
    }
});

server.listen(8080);