import {Router} from 'express'
import {usuarios, cadastro, login} from '../controllers/user.controller.js'
export const rotaUsers = Router()

rotaUsers.get('',usuarios)
rotaUsers.post('/register',cadastro)
rotaUsers.post('/login',login)