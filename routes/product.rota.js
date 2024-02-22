import {Router} from 'express'
import {getProdutos, getNeighborhoods, insertOrder, getOrders, updateStatus} from '../controllers/product.controller.js'
export const rotaProducts = Router()

rotaProducts.get('',getProdutos)
rotaProducts.get('/neighborhoods',getNeighborhoods)
rotaProducts.post('/insertOrder', insertOrder)
rotaProducts.get('/getOrders', getOrders)
rotaProducts.post('/updateStatus', updateStatus)