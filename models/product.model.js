import {conexao} from '../conexao.js'
export async function getProdutosModel() {
    try {
        const [results, fields] = await conexao.query(`select * from produto`);
        return results;
    } catch (err) {
        console.log(err);
    }
}
export async function getProdutosCartModel(dados) {
    try {
        const [results, fields] = await conexao.query(`select * from pedido where `)
    } catch (err) {
        console.log(err);
    }
}