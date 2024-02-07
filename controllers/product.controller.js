import { getProdutosModel } from "../models/product.model.js"

export async function getProdutos(req, res) {
    const products = await getProdutosModel()
    return res.json(products)
}
export async function getProdutosCart(req, res) {
    const dados = req.body
    const products = await getProdutosCartModel(dados)
    return res.json(products)
}