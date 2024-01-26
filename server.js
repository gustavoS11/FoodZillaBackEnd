import {conexao} from './conexao.js'
import express from 'express'
import cors from 'cors'
import {rotaUser} from './routes/user.rota.js'
conexao.connect(console.log('Banco funcionando'))
const app = express()
app.use(express.json())
app.use(cors())
app.use('/user',rotaUser)
app.listen(3000,console.log('Servidor funcionando'))