const express = require ("express");
const app = express();

app.get('/',function (req,res){
    res.send ("Hello World");
});

// app.get('/user-identifier/:id',function(req,res){
//     if (req.params.id == 1234) {
//         res.send("siva");
//     } else {
//         res.send("priya");
//     }
// });

app.get('/:id',function (req,res){
    let username = "hello " + req.params.id;
    let name = "hello " + req.query.name;
    res.send(name);
});

app.listen(8080);
// function add(a, b) {
//     return a + b;
// }

// let c= add (0,10);

// console.log("C value is " +c);