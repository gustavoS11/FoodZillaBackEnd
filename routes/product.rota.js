import {Router} from 'express'
import {getProdutos, getNeighborhoods, insertOrder, selectOrderById} from '../controllers/product.controller.js'
export const rotaProducts = Router()

rotaProducts.get('',getProdutos)
rotaProducts.get('/neighborhoods',getNeighborhoods)
rotaProducts.post('/insertOrder', insertOrder)
rotaProducts.post('/selectOrder', selectOrderById)