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
export async function insertOrderModel(dados) {
    try {
        const [results, fields] = await conexao.query(`INSERT INTO pedido (id, id_usuario, id_status, data, total, endereco) VALUES (NULL, '${dados.id_usuario}', '1', NULL, '${dados.total}', '${dados.endereco}')`)
        const insertId = results.insertId
        for (let i in dados.cart) {
            const productId = dados.cart[i].id
            const quantity = dados.cart[i].quantidade
            const [resultados, campos] = await conexao.query(`insert into produto_pedido (id, id_pedido, id_produto, produto_quantidade) values (null, '${insertId}', '${productId}', '${quantity}')`)
        }
        const [pedido, c] = await conexao.query(`select * from pedido where id = '${insertId}'`)
        return pedido
    } catch (err) {
        console.log(err)
    }
}
export async function getOrdersModel() {
    try {
        const [results, fields] = await conexao.query(`SELECT * FROM pedido where id_status = 1`)
        const pedidos = []
        const produto = []
        const allPedidos = []
        for (let i of results) {
            const [produto_pedido, campos] = await conexao.query(`select * from produto_pedido where id_pedido = ${i.id}`);
            for (let item of produto_pedido) {
                const [produtoQuery, fiels] = await conexao.query(`select * from produto where id = ${item.id_produto}`)
                produto.push(produtoQuery[0])
                const findPed = pedidos.find((ped) => ped.pedido == item.id_pedido)
                if (!findPed) {
                    pedidos.push({ pedido: item.id_pedido, total : i.total, endereco : i.endereco})
                }
            }

            produto_pedido.forEach((item) => {
                const ped = pedidos.find((ped) => ped.pedido == item.id_pedido)
                const prods = produto.find((prod) => prod.id == item.id_produto)
                allPedidos.push({ pedido: ped, produtos: prods })
            })
        }
        return allPedidos
    } catch (err) {
        console.log(err)
    }
}
export async function updateStatusModel(id) {
    try {
        const [results, fields] = await conexao.query(`update pedido set id_status = '2' where id = '${id}'`)
        return results
    } catch (err) {
        console.log(err)
    }
}