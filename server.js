let express = require('express');
let app = express();

let server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("App listening at http://%s:%s", host, port)
})

app.get('/greeting/:name', function (req, res) {
    res.send(`Hello there, ${req.params.name}`);
 })



 