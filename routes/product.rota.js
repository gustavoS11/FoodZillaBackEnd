import {Router} from 'express'
import {getProdutos, getNeighborhoods} from '../controllers/product.controller.js'
export const rotaProducts = Router()

rotaProducts.get('',getProdutos)
rotaProducts.get('/neighborhoods',getNeighborhoods)