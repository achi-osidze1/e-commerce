import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../productlist/ProductList.css';

const ProductList = (props) => {
  return (
    <Container>
      <Row className='mb-3'>
        {props.products.map((product, index) => (
          <Col key={index} xs={6} sm={6} md={4} lg={3}>
            <Card className='card my-2'>
              <Card.Img className='card-img' variant='top' src={product?.thumb_img.files.file} />
              <Card.Body className='card-body'>
                <Card.Text className='card-title'>{product?.name}</Card.Text>
                <Card.Text className='card-price'>{product?.original_price} Gel</Card.Text>
                <Button className='btn' onClick={() => props.addToCart(product)}>Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;