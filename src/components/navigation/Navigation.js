import React from 'react'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import '../navigation/Navigation.css'

const Navigation = () => {
  return (
    <Container>
      <Nav className="navigation justify-content-center">
        <Nav.Item>
          <Link to={'/computers'} className="nav-link">Computers</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={'/phones'} className="nav-link">Phones</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={'/consoles'} className="nav-link">Consoles</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={'/tv'} className="nav-link">TV</Link>
        </Nav.Item>
      </Nav>
    </Container>
  )
}

export default Navigation