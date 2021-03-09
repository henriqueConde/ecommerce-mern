import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import  { useDispatch, useSelector } from 'react-redux'
import {listProducts} from '../actions/productActions'

const HomeScreen = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    
    return (
        <>
            {loading 
            ? <h2>Loading...</h2> 
            : error 
            ? <h3>{error}</h3> 
            : <>
                    <h1>Latest Products</h1>
                    <Row>
                        {products.map(product => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product  product={product} />
                            </Col>
                        ))}
                    </Row>
                </>
            }
        </>
    )
}

export default HomeScreen
