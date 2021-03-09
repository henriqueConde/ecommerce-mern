import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'

dotenv.config() // this imports the .env file
connectDB()

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

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} and listening at port ${PORT}`.yellow.bold))