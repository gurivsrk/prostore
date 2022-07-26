import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import { notFound, erorrHandle } from './middleware/errorMiddleware.js'

import productRouter from './routes/productRouter.js'

const port = process.env.PORT || 5000

dotenv.config();

connectDB();

const app = express()

app.get('', (req,res)=> {
    res.status(204).send('Api is runnning .... ')
})

app.use('/api/products', productRouter)

app.use(notFound)

app.use(erorrHandle)

app.listen(port, () => { 
    console.log(`server up at ${port} port on ${process.env.NODE_Environment} mode`.yellow.bold)
})