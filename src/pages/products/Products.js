import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios';
import ProductList from '../../components/productlist/ProductList';
import Spinner from 'react-bootstrap/Spinner';
import { Container } from 'react-bootstrap';
import Context from '../../components/Context/Context';

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { setCartItems } = useContext(Context);

    const CallProducts = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`https://api.vendoo.ge/api/beta/catalog`);
        setProducts(response.data.products);
      } catch (error) {
        alert('Error:', error);
      }finally {
        setLoading(false)
      }
    };
    
    useEffect(() => {
        CallProducts();
    }, []);
  
    const addToCart = (product) => {
      setCartItems((prevCartItems) => [...prevCartItems, product]);
    };

    const handleAddToCart = (product) => {
      addToCart(product);
      alert('Product Added To Cart');
    };

    return (
        <>
        <Container className='mt-5'>
          <h3>Daily Offers</h3>
          <span className="d-flex justify-content-center my-3">{loading ? <Spinner animation="border" variant="primary" /> : loading}</span>
        </Container>
        <ProductList products={products} addToCart={handleAddToCart}/></>
    );
  }

export default Products