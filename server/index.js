const express = require("express");
const app = express();





app.get("/",function(req,res){

    res.send("/index.html");
})


app.get("/sobre/:nome",function(req,res){
    var nome = req.params.nome;
    res.send("<h1>ola</h1>"+nome);
})


app.listen(3000, function(error){
    if(error){
        console.log("erro");
    }else{
        console.log("server rodando");
    }})
