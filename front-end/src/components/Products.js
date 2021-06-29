import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Products = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <a style={{ textDecoration: 'none' }} href={`/products/${product._id}`}>
        <Card.Img variant='top' src={product.image} />
        <Card.Body>
          <Card.Title as='h3'>
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text as='div'>
            <div className='my-3'>
              {product.rating} from {product.numReviews} reviews
            </div>
          </Card.Text>
          <Card.Text as='div'>{product.description}</Card.Text>
          <Card.Text as='h3'>${product.price}</Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </a>
    </Card>
  )
}

export default Products
