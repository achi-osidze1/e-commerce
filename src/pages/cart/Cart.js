import React, { useContext, useEffect, useState} from 'react'
import { Container, Button } from 'react-bootstrap';
import Context from '../../components/Context/Context';
import '../cart/Cart.css'

const Cart = () => {
  const { cartItems } = useContext(Context);
  const [totalAmount, setTotalAmount] = useState(0);

  const ProductPricesSum = () => {

    const sum = cartItems.reduce((total, product) => {
      const price = parseInt(product.original_price);
      return total + price;
    }, 0);
    return sum;
  };

  useEffect(() => {
    const total = ProductPricesSum();
    setTotalAmount(total);
  }, [cartItems]);


  return (
    <Container className='mb-5'>
      <div className='cart-text-container my-5'>
        <h3>Your Cart</h3>
        <Button>Total: {totalAmount} Gel</Button>
      </div>
      {cartItems.map((product, index) => (
            <div key={index} className="cart-card my-3">
              <img src={product?.thumb_img.files.file} className="img-fluid rounded-start" alt=""/>
              <div className="cart-card-body">
                <h3 className="cart-card-title m-1">{product?.name}</h3>
                <h5 className="cart-card-price m-1">{product?.original_price} Gel</h5>
              </div>
            </div>
         ))}
    </Container>
  )
}

export default Cart