import { Router } from 'express'
import { usuario, cadastro, login, loginAdmin, endereco, atualizarEndereco } from '../controllers/user.controller.js'
export const rotaUsers = Router()

rotaUsers.post('', usuario)
rotaUsers.post('/register', cadastro)
rotaUsers.post('/login', login)
rotaUsers.post('/loginAdmin', loginAdmin)
rotaUsers.post('/address', endereco)
rotaUsers.post('/updateAddress', atualizarEndereco)