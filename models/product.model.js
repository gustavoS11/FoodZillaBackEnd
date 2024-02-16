import {conexao} from '../conexao.js'
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