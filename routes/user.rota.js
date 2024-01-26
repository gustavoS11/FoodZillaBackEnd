import {Router} from 'express'
import {getUsuario} from '../controllers/user.controller.js'
export const rotaUser = Router()

rotaUser.get('/rota',getUsuario)