import {conexao} from './conexao.js'
import express from 'express'
import cors from 'cors'
import {rotaUsers} from './routes/user.rota.js'
import {rotaProducts} from './routes/product.rota.js'
await conexao.connect()
const app = express()
app.use(express.json())
app.use(cors())
app.use('/user',rotaUsers)
app.use('/product',rotaProducts)
app.listen(3000,console.log('Servidor funcionando'))