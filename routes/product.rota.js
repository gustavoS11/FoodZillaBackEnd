import {Router} from 'express'
import {getProdutos, getAddress} from '../controllers/product.controller.js'
export const rotaProducts = Router()

rotaProducts.get('',getProdutos)
rotaProducts.get('/address',getAddress)