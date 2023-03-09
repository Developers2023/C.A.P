const express = require("express");
const server = express();
const api = require("./api");


server.use(express.json());

// rotas
server.get("/",function(req,res){

    res.send("/index.html");
})


server.get("/sobre/:nome",function(req,res){
    var nome = req.params.nome;
    res.send("<h1>ola</h1>"+nome);
})

server.get("/pokemon", async(req,res) => {
    try {
        const {data} =  await api.get("pokemon/1")
        return res.send({name: data.name});
    } catch (error) {
        res.send({error: error.message});
    }
});

// teste de servidor 
server.listen(3000, function(error){
    if(error){
        console.log("erro");
    }else{
        console.log("server rodando");
    }})
