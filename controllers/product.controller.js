import { getProdutosModel, getNeighborhoodsModel, insertOrderModel, getOrders} from "../models/product.model.js"

export async function getProdutos(req, res) {
    const products = await getProdutosModel()
    return res.json(products)
}
export async function getNeighborhoods(req, res) {
    const neighborhoods = await getNeighborhoodsModel()
    return res.json(neighborhoods)
}
export async function insertOrder(req, res) {
    const dados = req.body
    const id = dados.id_usuario
    const cart = dados.cart
    const insertOrder = await insertOrderModel(id, cart)
    if (insertOrder) {
        return res.status(200).json(insertOrder)
    }
}
export async function getOrders(req, res) {
    const dados = req.body
    console.log(dados)
    const selectOrder = await getOrders()
    if (selectOrder) {
        return res.status(200).json(selectOrder)
    }
}