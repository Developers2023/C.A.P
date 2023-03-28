const responsavelRepository = require("../repos/responsavel");

module.exports = {

    async login(body) {
        const Responsavel = await Responsavel.findAll(body.email, body.senha);
        return res.json(Responsavel);
    },
}