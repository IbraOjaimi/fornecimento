let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.nome != undefined &&
        body.quantidade != undefined &&
        body.nome!= "" &&
        body.quantidade != "" &&
        body.quantidade != isNaN(body.quantidade)
    ) {
        return {
            id,
            nome: body.nome,
            quantidade: body.quantidade,
            mercado: body.id_mercado,
            fornecedor: body.id_fornecedor
        }
    }
}

module.exports = model