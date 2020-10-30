const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', async(req, res)=> new Promise(function(resolve, reject) {
  resolve(res.send("Hello World"));
}));

app.listen(PORT, () => {
  console.log("Sample App listening on Port 5000 ");
});
