const express = require ("express");
const app = express();

app.get('/',function (req,res){
    res.send ("Hello World");
});

app.get('/user-identifier/:id',function(req,res){
    if (req.params.id == 1234) {
        res.send("siva");
    } else {
        res.send("priya");
    }
});

app.get('/:id',function (req,res){
    let html = "hello " + req.params.id + "<br>";
    html += "hello " + req.query.name;
    res.send(html);
});


/*
 promise async and await with setTimeInterval
*/

async function calc(){
    c= await add(a,b);
}
console.log ("Started");

function add(a,b){

    return new promise (function (resolve,reject) {

setInterval(function(){
    resolve (a + b);
    console.log("waiting");
},2000);
    });

}


console.log ("Ended");

app.listen(8080);
