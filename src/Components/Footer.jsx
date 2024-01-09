import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div>
        <Container fluid style={{backgroundColor:'#371F76'}}>
          <Row>
            <Col lg={3}></Col>
            <Col lg={6} className='d-flex justify-content-center py-3'>
              <Link to={'https://www.facebook.com/'} target="_blank">
                <i className="fa-brands fa-facebook me-4 fa-xl text-light"></i>
              </Link>
              <Link to={'https://www.instagram.com/'} target="_blank">
                <i className="fa-brands fa-instagram me-4 fa-xl text-light"></i>
              </Link>
              <Link to={'https://twitter.com/i/flow/login'} target="_blank">
                <i className="fa-brands fa-x-twitter me-4 fa-xl text-light"></i>
              </Link>
              <Link to={'https://www.youtube.com/'} target="_blank">
                <i className="fa-brands fa-youtube me-4 fa-xl text-light"></i>
              </Link>
            </Col>
            <Col lg={3}></Col>
          </Row>
          <div className='text-center text-white-50'>&copy; CreatorBay</div>
        </Container>
      </div>
    </>
  )
}

export default Footer