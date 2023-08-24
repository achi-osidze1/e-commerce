import React from 'react'
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import './Navbar.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
  
  return (
    <div className='header'>
      <Container>
        <Nav defaultActiveKey="/" className="navbar">
          <Nav.Item>
            <Link to={'/'}><img className='logo' src='https://cdn-icons-png.flaticon.com/512/825/825561.png?w=740&t=st=1691421820~exp=1691422420~hmac=6ed0f25f16a1d5ec8ba86199fcaac21ec33d692d28bb0bbbc683da25789e6593' alt=''/></Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={'/cart'}><AiOutlineShoppingCart className='cart-icon'/></Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>




  )
}

export default Navbar



