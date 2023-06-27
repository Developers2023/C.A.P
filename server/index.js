const express = require("express");
const pessoaController = require("./controller/pessoaController");
const criancaController = require("./controller/criancaController");
const veiculoController= require('./controller/veiculoController')

const server = express();
server.use(express.json());

server.post("/pessoa/cadastrar",async function(req,res){
    const result = await pessoaController.cadastrar(req.body)
    res.send(result)
});

server.get("/pessoa/login",async function(req,res){
    const result = await pessoaController.login(req.body)
    res.send(result)
});

server.patch("/pessoa/deletar/:id",async function(req,res){
    const result = await pessoaController.deletar(req.id)
    res.send(result)
});

server.patch("/pessoa/atualizar/:id",async function(req,res){
    const result = await pessoaController.atualizar(req.body,req.params.id)
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
    const result = await criancaController.atualizar(req.params.id,req.body)
    res.send(result)
})

server.post("/veiculo/cadastrar/:id",async function(req,res){
    const result = await veiculoController.cadastrar(req.params.id,req.body)
    res.send(result)
})

server.listen(3002, function(error){
    if(error){
    console.log("erro");
    }else{
        console.log(`server rodando na porta 3002`);
    }})
