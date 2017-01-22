require('fetch-everywhere')
var express = require('express');  

var app = express();  

app.use(express.static(__dirname + '/client/public'));

app.get('/proxy', function(req, res) {  
  // proxy that gets around CORS stuff when trying to call API from browser 

  // strip off beginning part of query string from client to get correct URL
  var url = req.url.replace('/proxy?url=','')

  fetch(url).then((resp) => resp.json()).then((out) => res.status(200).send(out));

});

app.listen(process.env.PORT || 8080);

console.log("listening on port 8080")
















