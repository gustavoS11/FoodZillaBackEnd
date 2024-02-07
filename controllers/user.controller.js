import { getUsuariosModel, registerUserModel,getUsuarioByEmailModel } from "../models/user.model.js"

export async function cadastro(req, res) {
    const dados = req.body
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
    return res.status(200).json(user)
}
export async function loginAdmin(req, res) {
    const dados = req.body
    const user = await getUsuarioByEmailAdminModel(dados)
    return res.status(200).json(user)
}