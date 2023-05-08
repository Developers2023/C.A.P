const api = require("./application/api");
const express = require("express");
const pessoaController = require("./controller/pessoaController");

const server = express();
server.use(express.json());

server.get("/",function(req,res){

    res.send("/index.html");
})

server.get("/pokemon", async(req,res) => {
    try {
        const {data} =  await api.get("pokemon/1")
        return res.send({name: data.name});
    } catch (error) {
        res.send({error: error.message});
    }
});

server.post("/pessoa/cadastrar",async function(req,res){
    const result = await pessoaController.cadastrar(req.body)
    res.send(result)
});

server.put("/pessoa/update:id",async function(req,res){
    const result = await pessoaController.update(req.body)
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

server.listen(3000, function(error){
    if(error){
    console.log("erro");
    }else{
        console.log("server rodando");
    }})
