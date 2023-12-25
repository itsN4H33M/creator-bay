import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary px-3">
        <Container fluid>
          <Navbar.Brand as={Link} to={'/'}>CoCoSi</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to={'/cart'}><i class="fa-solid fa-basket-shopping me-1"></i>Cart</Nav.Link>
              <Nav.Link className='btn btn-light shadow rounded-5 px-4 ms-3' as={Link} to={'/user/login'}>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header