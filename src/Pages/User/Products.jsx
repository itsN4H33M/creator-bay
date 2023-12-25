import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <>
      <Container className='border my-5'>
        <Card style={{ width: '16rem' }} className='shadow rounded-0'>
          <Link to={'/product/1'}>
            <img className='w-100' height={'300px'} src="https://assets.ajio.com/medias/sys_master/root/20230703/YxKm/64a2f7b8eebac147fc48ac73/-473Wx593H-466325670-purple-MODEL2.jpg" alt="" />
          </Link>
          
            <Row className='px-2'>
              <Col>
                <p className='mt-2'>T-shirt</p>
              </Col>
              <Col></Col>
              <Col>
                <i className="fa-solid fa-bag-shopping fa-xl float-end mt-3 me-2"></i>
              </Col>
            </Row>
          

        </Card>

      </Container>
    </>
  )
}

export default Products