import {conexao} from '../conexao.js'
export async function getUsuariosModel() {
    return new Promise((resolve, reject) => {
        conexao.query(`select * from usuario`, (error, result) => {
            resolve(result)
        })
    })
}