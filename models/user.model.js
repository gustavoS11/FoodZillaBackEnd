import {conexao} from '../conexao.js'
export async function getUsuariosModel() {
    try {
        const [results, fields] = await conexao.query(`select * from usuario`);
        return results
    } catch (err) {
        console.log(err)
    }
}
export async function getUsuarioByEmailModel(dados) {
    try {
        const [results, fields] = await conexao.query(`select * from usuario where email = '${dados.email}'`);
        return results
    } catch (err) {
        console.log(err)
    }
}
export async function getUsuarioByIdModel(id) {
    try {
        const [results, fields] = await conexao.query(`select * from usuario where id = ${id}`);
        return results
    } catch (err) {
        console.log(err)
    }
}
export async function registerUserModel(dados) {
    try {
        const [results, fields] = await conexao.query(`insert into usuario set ?`, dados);
        return results
    } catch (err) {
        console.log(err)
    }
}