import React, {useEffect, useState } from 'react'
 // eslint-disable-next-line
import { Link, useParams } from 'react-router-dom'
 // eslint-disable-next-line
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
 // eslint-disable-next-line
import Rating from '../component/Rating'

import axios from 'axios'

const ProductScreen = () => {

    const [product,setProduct] = useState([])
    const { id } = useParams();

    useEffect(()=> {
       const fetchProduct =  async () => {
            const { data } = await axios.get(`/api/products/${id}`)
            setProduct(data)
       }

       fetchProduct()
    },[])

    return (
        <>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={4}>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroupItem>
                        <ListGroupItem>Price : ${product.price}</ListGroupItem>
                        <ListGroupItem>Description: {product.description}</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroupItem>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><strong>${product.price}</strong></Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Button className='btn-block' type="button" disabled={ product.countInStock === 0 ? true : false } >Add to Cart</Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen