var express = require("express");
var http = require("http");
var qs = require("qs");

var app = express();

app.use(express.static("public"));

var port = process.env.PORT || 8025;
console.log("listening on port", port);
app.listen(port);

app.get("/api/*", function(req, res) {

  var apiKey = process.env.API_KEY;

  var base = "http://api.brewerydb.com/v2/"

  console.log("endpoint", req.params["0"])

  var url = base + req.params["0"] + "?key=" + apiKey;

  url += "&" + qs.stringify(req.query);

  loadJSON(url, function(err, data){

    if(err) {
      res.status(500).json({error: err.toString()});
    }
    else {
      res.json(data);
    }

  });

});

function loadJSON(url, cb) {

  http.get(url, function(res) {
      // initial data
      var body = '';

      // loading data in chunks
      res.on('data', function(chunk) {
          body += chunk;
      });

      // data is loaded invoke callback with data
      res.on('end', function() {
          var data = JSON.parse(body)
          cb(null, data);
      });
  }).on('error', function(e) {
    // invoke callback with error
    cb(e);
  });

}