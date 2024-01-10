import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authorised } from '../Redux/loginSlice';

function Header() {

  const dispatch = useDispatch()
  const isAuthorised = useSelector((state) => state.login.isAuthorised)

  const handleLogout = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
    dispatch(authorised())
  }

  useEffect(() => {
    dispatch(authorised())
  }, [dispatch])

  return (
    <>
      <Navbar expand="lg" className="px-3 bg-white shadow">
        <Container fluid>
          <Navbar.Brand as={Link} to={'/'}>
            <i className="fa-brands fa-square-pied-piper fa-xl" style={{ color: '#1CAC78' }} ></i>
            <span className="h4 fw-bold ms-2">CreatorBay</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to={'/cart'}><i className="fa-solid fa-basket-shopping fa-lg me-1"></i></Nav.Link>
              {
                isAuthorised ? <Nav.Link className='btn shadow rounded-5 px-4 ms-3 text-white' style={{ backgroundColor: '#896deb' }} onClick={handleLogout}>Logout</Nav.Link> :
                  <Nav.Link className='btn btn-light shadow rounded-5 px-4 ms-3' style={{ backgroundColor: '#896deb' }} as={Link} to={'/user/login'}>Login</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header