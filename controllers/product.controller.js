import { getProdutosModel } from "../models/product.model.js"

export async function getProdutos(req, res) {
    const products = await getProdutosModel()
    return res.json(products)
}
export async function getAddress(req, res) {
    const address = await getAddressModel()
    return res.json(address)
}