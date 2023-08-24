import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios';
import ProductList from '../../components/productlist/ProductList';
import Search from '../../components/search/Search';
import Spinner from 'react-bootstrap/Spinner';
import { Container } from 'react-bootstrap';
import Context from '../../components/Context/Context';

const TV = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const { setCartItems } = useContext(Context);

    const CallTV = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`https://api.vendoo.ge/api/beta/catalog?url=technics%2Ftv-audio%2Ftelevizorebi&sort=popular&sortDir=desc&keyword=${search}&page=1&limit=20`);
        setProducts(response.data.products);
      } catch (error) {
        alert('Error:', error);
      }finally {
        setLoading(false)
      }
    };
    
    useEffect(() => {
        CallTV();
    },[search]);
  
    const addToCart = (product) => {
      setCartItems((prevCartItems) => [...prevCartItems, product]);
    };

    const handleAddToCart = (product) => {
      addToCart(product);
      alert('Product Added To Cart');
    };
  
    return (
        <>
        <Search setSearch = {setSearch}/>
        <Container className='mt-5'>
          <h3>Televisions</h3>
          <span className="d-flex justify-content-center my-3">{loading ? <Spinner animation="border" variant="primary" /> : loading}</span>
        </Container>
        <ProductList products={products} addToCart={handleAddToCart}/></>
    );
  }

export default TV