import { getUsuariosModel } from "../models/user.models.js"

export async function getUsuario(req, res) {
    const user = await getUsuariosModel()
    return res.json(user)
}