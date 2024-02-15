import {Router} from 'express'
import {usuario, cadastro, login, endereco} from '../controllers/user.controller.js'
export const rotaUsers = Router()

rotaUsers.post('',usuario)
rotaUsers.post('/register',cadastro)
rotaUsers.post('/login',login)
rotaUsers.post('/address',endereco)