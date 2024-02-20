import { conexao } from '../conexao.js'
export async function getProdutosModel() {
    try {
        const [results, fields] = await conexao.query(`select * from produto`);
        return results;
    } catch (err) {
        console.log(err);
    }
}
export async function getNeighborhoodsModel() {
    try {
        const [results, fields] = await conexao.query(`select * from bairro`);
        return results;
    } catch (err) {
        console.log(err);
    }
}
export async function insertOrderModel(id, cart) {
    try {
        const [results, fields] = await conexao.query(`INSERT INTO pedido (id, id_usuario, id_status) VALUES (NULL, '${id}', '1')`)
        const insertId = results.insertId
        for (let i in cart) {
            const productId = cart[i].id
            const quantity = cart[i].quantidade
            const [resultados, campos] = await conexao.query(`insert into produto_pedido (id, id_pedido, id_produto, produto_quantidade) values (null, '${insertId}', '${productId}', '${quantity}')`)
        }
        const [pedido, c] = await conexao.query(`select * from pedido where id = '${insertId}'`)
        return pedido
    } catch (err) {
        console.log(err)
    }
}
export async function selectOrderByIdModel(id) {
    try {
        const [results, fields] = await conexao.query(`select * from pedido where id = ${id} and id_status = 1`)
    } catch (err) {
        console.log(err)
    }
}