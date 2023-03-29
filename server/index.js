const api = require("./application/api");
const express = require("express");
const responsavelController = require("./controller/responsavelController");
const condutorController = require("./controller/condutorController");

const server = express();


server.use(express.json());

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


server.post("/responsavel/cadastrar",async function(req,res){
    const result = await responsavelController.cadastrar(req.body)
    res.send(result)
});

server.post("/responsavel/update",async function(req,res){
    const result = await responsavelController.update(req.body)
    res.send(result)
});

server.post("/responsavel/delete",async function(req,res){
    const result = await responsavelController.delete(req.body)
    res.send(result)
});


server.post("/responsavel/getById",async function(req,res){
    const result = await responsavelController.find(req.body)
    res.send(result)
});

server.post("/responsavel/findAll",async function(req,res){
    const result = await responsavelController.getAll(req.body)
    res.send(result)
});


server.listen(3000, function(error){
    if(error){
    console.log("erro");
    }else{
        console.log("server rodando");
    }})
