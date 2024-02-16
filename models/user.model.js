import { conexao } from '../conexao.js'
export async function getUsuarioByEmailModel(dados) {
    try {
        const [results, fields] = await conexao.query(`select * from usuario where email = '${dados.email}'`)
        if (results.length === 0) {
            return null;
        }
        return results;
    } catch (err) {
        console.log(err)
    }
}
export async function getUsuarioByEmailAdminModel(dados) {
    try {
        const [results, fields] = await conexao.query(`select * from usuario where email = '${dados.email} and id_tipo_usuario = 2'`);
        return results
    } catch (err) {
        console.log(err)
    }
}
export async function getUsuarioByIdModel(id) {
    try {
        const [results, fields] = await conexao.query(`select * from usuario where id = ${id}`)
        return results
    } catch (err) {
        console.log(err)
    }
}
export async function getEnderecoByIdModel(id) {
    try {
        const [results, fields] = await conexao.query(`select endereco from usuario where id = ${id}`)
        return results
    } catch (err) {
        console.log(err)
    }
}
export async function registerUserModel(dados) {
    try {
        const [results, fields] = await conexao.query(`insert into usuario set ?`, dados)
        return results
    } catch (err) {
        console.log(err)
    }
}
export async function updateEnderecoById(endereco, id) {
    try {
        const [results, fields] = await conexao.query(`update usuario set endereco = '${endereco}' where id = ${id}`)
        return results
    } catch (err) {
        console.log(err)
    }
}