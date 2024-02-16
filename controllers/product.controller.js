import { getProdutosModel, getNeighborhoodsModel} from "../models/product.model.js"

export async function getProdutos(req, res) {
    const products = await getProdutosModel()
    return res.json(products)
}
export async function getNeighborhoods(req, res) {
    const neighborhoods = await getNeighborhoodsModel()
    return res.json(neighborhoods)
}