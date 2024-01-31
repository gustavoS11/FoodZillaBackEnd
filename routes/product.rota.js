import {Router} from 'express'
import {getProdutos} from '../controllers/product.controller.js'
export const rotaProducts = Router()

rotaProducts.get('',getProdutos)