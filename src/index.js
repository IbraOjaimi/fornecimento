const express = require('express')
const mercado_router = require('../routers/mercado.js')
const fornecedor_router = require('../routers/fornecedor.js')
const produto_router = require('../routers/produto.js')

const app = express()
const port = 5000

app.use(express.json())
app.use('/mercado', mercado_router)
app.use('/fornecedor', fornecedor_router)
app.use('/produto', produto_router)

app.listen(port, () =>(
    console.log(`Server running in ${port} port`)
))