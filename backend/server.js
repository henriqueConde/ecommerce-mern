const express = require('express')
const products = require('./data/products')

const app = express()


app.get('/', (req, res) =>{
    res.send('hi')
})


// GET ALL PRODUCTS
app.get('/api/products', (req, res) =>{
    res.json(products)
})


// GET SINGLE PRODUCT
app.get('/api/products/:id', (req, res) =>{
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

app.listen(5000, console.log('listening at port 5000'))