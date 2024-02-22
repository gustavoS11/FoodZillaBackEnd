import { conexao } from '../conexao.js'
export async function getUsuarioModel(dados) {
    try {
        const [results, fields] = await conexao.query(`select * from usuario where email = '${dados.email}' and senha = '${dados.senha}'`)
        return results;
    } catch (err) {
        console.log(err)
    }
}
export async function getUsuarioAdminModel(dados) {
    try {
        const [results, fields] = await conexao.query(`select * from usuario where email = '${dados.email}' and senha = '${dados.senha}' and id_tipo_usuario = '2'`);
        return results
    } catch (err) {
        console.log(err)
    }
}
export async function getUsuarioByEmail() {
    try {
        const [result, fields] = await conexao.query(`select * from usuario where email = ${dados.email}`)
    } catch (err) {
        console.log(err);
    }
}
export async function getUsuarioByIdModel() {
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