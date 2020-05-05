const express = require('express');
const fs = require("fs");
const readFilePromise = require('fs-readfile-promise');
const unit = require('./unit');
const app = express();
const port = 3000;

app.get('/', function(req,res){
    res.send(`3 + 2 = ${unit.f(3, 2)}`);
});
unit.async_f(6);
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));