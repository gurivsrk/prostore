import React from 'react'

import { Col, Row } from 'react-bootstrap'
import Product from '../component/Product'
import products from '../products'


const HomeScreen = () => {
  return (
    <>
        <Row  className="justify-content-md-center">
            <h3>Lastest Product</h3>
            {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen