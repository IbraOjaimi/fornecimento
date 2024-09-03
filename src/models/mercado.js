const cep_endereco = require('../middleware/cep_endereco.js')

let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.nome!= undefined &&
        body.endereco != undefined &&
        body.nome != "" &&
        body.endereco != ""
    ) {
        return {
            id,
            nome: body.nome,
            endereco: body.endereco,
            cep: body.endereco
        }
    }
}

module.exports = model