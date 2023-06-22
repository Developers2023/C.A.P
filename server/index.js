const express = require("express");
const pessoaController = require("./controller/pessoaController");
const criancaController = require("./controller/criancaController");
const vaiculoController= require('./controller/veiculoController')

const server = express();
server.use(express.json());

server.post("/pessoa/cadastrar",async function(req,res){
    const result = await pessoaController.cadastrar(req.body)
    res.send(result)
});

server.put("/pessoa/atualizar/:id",async function(req,res){
    const result = await pessoaController.atualizar(req.params.id, req.body)
    res.send(result)
});

server.get("/pessoa/buscarTodos",async function(req,res){
    const result = await pessoaController.buscarTodos(req.body)
    res.send(result)
});

server.post("/crianca/cadastrar/:id",async function(req,res){
    const result = await criancaController.cadastrar(req.params.id,req.body)
    res.send(result)
})

server.patch("/crianca/atualizar/:id",async function(req,res){
    const result = await criancaController.cadastrar(req.params.id,req.body)
    res.send(result)
})

server.post("/veiculo/cadastrar/:id",async function(req,res){
    const result = await vaiculoController.cadastrar(req.params.id,req.body)
    res.send(result)
})

server.listen(3001, function(error){
    if(error){
    console.log("erro");
    }else{
        console.log(`server rodando na porta 3001`);
    }})
