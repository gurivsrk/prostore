import express from 'express'
import dotenv from 'dotenv'
import products from './data/Products.js'

const port = process.env.PORT || 5000



dotenv.config();

const app = express()

app.get('', (req,res)=> {
    res.status(204).send('Api is runnning .... ')
})

app.get('/api/products', (req,res)=>{
    res.status(202).json(products)
})

app.get('/api/product/:id', (req,res)=>{
    const product = products.find( p => p._id === req.params.id)
    res.status(202).json(product)
})

app.listen(port, () => { 
    console.log(`server up at ${port} port on ${process.env.NODE_Environment} mode`)
})