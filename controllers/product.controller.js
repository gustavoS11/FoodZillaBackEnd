import { getProdutosModel, getNeighborhoodsModel, insertOrderModel, getOrdersModel, updateStatusModel} from "../models/product.model.js"

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
    const insertOrder = await insertOrderModel(dados)
    if (insertOrder) {
        return res.status(200).json(insertOrder)
    }
}
export async function getOrders(req, res) {
    const selectOrder = await getOrdersModel()
    if (selectOrder) {
        return res.status(200).json(selectOrder)
    }
}
export async function updateStatus(req, res) {
    const dados = req.body
    const id = dados.id
    const updateStatus = await updateStatusModel(id)
    return res.status(200).json(updateStatus)
}