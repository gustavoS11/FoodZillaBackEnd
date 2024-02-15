import { getUsuarioByIdModel, registerUserModel, getUsuarioByEmailModel, getEnderecoByIdModel} from "../models/user.model.js"

export async function cadastro(req, res) {
    const dados = req.body
    const user = await getUsuarioByEmailModel(dados)
    if (user) {
        return res.status(409).json({ erro : 'email já cadastrado'})   
    }
    const cadastro = await registerUserModel(dados)
    return res.status(204).json(cadastro)
}
export async function usuario(req, res) {
    const dados = req.body
    const id = dados.id
    const user = await getUsuarioByIdModel(id)
    return res.status(200).json(user)
}
export async function login(req, res) {
    const dados = req.body
    const user = await getUsuarioByEmailModel(dados)
    if (!user) {
        return res.status(404).json({ erro: 'email ou senha inválida' })
    }
    return res.status(200).json(user[0])
}
export async function endereco(req, res) {
    const dados = req.body
    const id = dados.id
    const user = await getEnderecoByIdModel(id)
    if (user == "") {
        return res.status(404).json({ erro: 'endereço não cadastrado' })
    }
    else if (!user) {
        return res.status(404).json({ erro : 'usuário não encontrado' })
    }
    else {
        return res.status(200).json(user)
    }
}