const express = require('express');
const app = express();
const app2 = express();
const path = require('path');
const PORT = 5000;
const page1 = "<h1> Hello World </h1>";

app.use(express.static('public'));

app.get('/', async(req, res)=> new Promise(function(resolve, reject) {
  resolve(res.send(page1));
}));

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/home.html'));
});

app.get('/hello', function(req, res){
    res.send("<h1>Hello from Hello!!</h1>");
});

app.listen(PORT, () => {
  console.log("Sample App listening on Port 5000 ");
});
