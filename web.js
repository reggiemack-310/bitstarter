
var express = require('express');
var fs      = require('fs');
// var buf     = new Buffer(30);
var html    = "";

buf  = fs.readFileSync('index.html');
html = buf.toString();
console.log(html);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
