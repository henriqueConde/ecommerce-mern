import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config() // this imports the .env file
connectDB() // connects with the database

const app = express()

//ROUTES
app.get('/', (req, res) =>{
    res.send('hi')
})

// products routes
app.use('/api/products', productRoutes)


// MIDDLEWARES
app.use(notFound)
app.use(errorHandler)



const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} and listening at port ${PORT}`.yellow.bold))