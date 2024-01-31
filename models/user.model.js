import {conexao} from '../conexao.js'
export async function getUsuariosModel() {
    try {
        const [results, fields] = await conexao.query(`select * from usuario`);
        return results;
    } catch (err) {
        console.log(err);
    }
}
export async function getUsuarioByIdModel() {
    try {

    } catch (err) {
        
    }
}