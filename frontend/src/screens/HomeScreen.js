import React, { useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../component/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
        const fetchProducts = async () =>{
            const { data } = await axios.get('/api/products')
            setProducts(data)
        }
        fetchProducts()
  }, [])

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