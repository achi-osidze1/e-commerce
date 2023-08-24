import React from 'react'
import Form from 'react-bootstrap/Form'
import { Container } from 'react-bootstrap';

const Search = ({setSearch}) => {
  return (
    <Container className='my-4 d-flex justify-content-center align-items-center'>
        <Form.Control type="text" placeholder="Search Product"
         onKeyUp={(e) => setSearch(e.target.value)} 
         style={{ width: "60%" }} />
    </Container>
  )
}

export default Search