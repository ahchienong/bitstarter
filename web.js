var express = require('express');
var app = express();
var fs = require('fs');
var infile = "index.html";
var indexhtml = fs.readFileSync(infile);
var buffer = new Buffer(indexhtml,"utf-8");
app.use(express.logger());

app.get('/', function(request, response) {
    //response.send('Hello World 2!');
    response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
