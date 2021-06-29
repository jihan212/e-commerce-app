import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Products = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link style={{ textDecoration: 'none' }} to={`/products/${product._id}`}>
        <Card.Img variant='top' src={product.image} />
        <Card.Body>
          <Card.Title as='h3'>
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text as='div'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as='h3'>${product.price}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  )
}

export default Products
