import { getUsuariosModel } from "../models/user.model.js"

export async function getUsuarios(req, res) {
    const users = await getUsuariosModel()
    return res.status(200).json(users)
}