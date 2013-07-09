
var express = require('express');
var fs      = requure('fs')
var buf     = new buffer(30)
var html    = ""

fs.readFileSync('index.html',,function(err, buf))
    {
    if (err)
       {
       console.log(err);
       html = err;
       }
    else
       {
       html = buf.toString();
       console.log(html);
       }
    }

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
