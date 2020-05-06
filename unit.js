const fs = require("fs");
const readFilePromise = require('fs-readfile-promise');
let unit = {};
unit.f = function(a, b){
    if(arguments.length != 2)
        return undefined;
    return Math.abs(a) * Math.abs(b);
};

unit.async_f =  function(a){
    if(arguments.length != 2)
        return undefined;
    readFilePromise('E:/wamp64/www/3843/tests/text.txt','utf-8').then(function (data){
        return Number(data) - a;
    }).catch( function (err){
        console.log(err)
    })
};
module.exports = unit;