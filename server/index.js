const express = require("express");
const pessoaController = require("./controller/pessoaController");
const criancaController = require("./controller/criancaController");

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

server.delete("/pessoa/delete/:id",async function(req,res){
    const result = await pessoaController.delete(req.params.id)
    res.send({
        suceso: result > 0 ? true : false
    })
});

server.get("/pessoa/getById/:id",async function(req,res){
    const result = await pessoaController.find(req.params.id)
    res.send(result)
});

server.post("/crianca/cadastrar/:id",async function(req,res){
    const result = await criancaController.cadastrar(req.params.id,req.body)
    res.send(result)
})

server.listen(3000, function(error){
    if(error){
    console.log("erro");
    }else{
        console.log(`server rodando na porta 3000`);
    }})
