import { getUsuariosModel, registerUserModel, getUsuarioByEmailModel } from "../models/user.model.js"

export async function cadastro(req, res) {
    const dados = req.body
    const user = await getUsuarioByEmailModel(dados)
    if (user) {
        return res.status(409).json({ erro : 'email já cadastrado'})   
    }
    const cadastro = await registerUserModel(dados)
    return res.status(204).json(cadastro)
}
export async function usuarios(req, res) {
    const users = await getUsuariosModel()
    return res.status(200).json(users)
}
export async function login(req, res) {
    const dados = req.body
    const user = await getUsuarioByEmailModel(dados)
    if (!user) {
        return res.status(404).json({ erro: 'email ou senha inválida' })
    }
    return res.status(200).json(user[0])
}