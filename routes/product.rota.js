import {Router} from 'express'
import {getProdutos, getProdutosCart} from '../controllers/product.controller.js'
export const rotaProducts = Router()

rotaProducts.get('',getProdutos)
rotaProducts.post('/user', getProdutosCart)