import {Router} from 'express'
import {getUsuarios} from '../controllers/user.controller.js'
export const rotaUsers = Router()

rotaUsers.get('',getUsuarios)