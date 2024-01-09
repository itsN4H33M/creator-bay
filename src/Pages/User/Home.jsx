import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './home.css'


function Home() {


  return (
    <>
      <Container fluid className='profile vh-100'>
        <Row className='h-100'>
          <Col lg={6} className=' d-flex align-items-center justify-content-center'>
            <div className='paral'>
              <h1 className='fw-bolder p-2 bg-white' style={{ fontSize: '80px' }}><span className='text-danger'>#</span>DARE TO DREAM</h1>
            </div>
          </Col>
          <Col lg={6}></Col>
        </Row>
      </Container>
      <div className='pb-5' >
        {/* paid links */}
        <div className='d-flex justify-content-evenly align-items-center my-5 py-5' style={{ backgroundImage: 'linear-gradient(180deg, rgba(129,251,184,1) 10%, rgba(40,199,111,0.8979924733565301) 100%)', height: '500px' }}>
          {/* Videos */}
          <Card style={{ width: '17rem' }} className='shadow'>
            <Card.Img height={'200px'} variant="top" src="https://i.playboard.app/p/629f46cb566118f59c636381127a7dc6/default.jpg" />
            <Card.Body className='d-flex justify-content-between align-items-center'>
              <Card.Title>Exclusive Videos</Card.Title>
              <Link className='float-end' to={'/videos'}>
                <i className="fa-regular fa-circle-play fa-xl" style={{ color: '#53BDA5' }}></i>
              </Link>
            </Card.Body>
          </Card>
          {/* Products */}
          <Card style={{ width: '17rem' }} className='shadow'>
            <Card.Img height={'200px'} variant="top" src="https://folin.io/cdn/shop/files/0H5A1580copy.jpg?v=1692344424" />
            <Card.Body className='d-flex justify-content-between align-items-center'>
              <Card.Title>Shop Products</Card.Title>
              <Link className='float-end' to={'/products'}>
                <i className="fa-solid fa-bag-shopping fa-xl" style={{ color: '#53BDA5' }}></i>
              </Link>
            </Card.Body>
          </Card>
        </div>
        {/* recent videos */}
        <div className='d-flex flex-column justify-content-center' style={{ height: '600px' }}>
          <div className='d-flex justify-content-between align-items-center mx-5' >
            <h1 className='fw-bolder'>Recent Vidoes</h1>
            <Link to={'https://www.youtube.com/'} target="_blank">
              <Button style={{ backgroundColor: '#896deb' }} className='rounded-0'>Visit Channel</Button>
            </Link>
          </div>
          <div className='d-flex justify-content-evenly mt-5'>
            <div className='w-25'>
              <Card className='shadow rounded-0'>
                <Link to={'https://youtu.be/sF9xYtouZjY'} target='_blank'>
                  <img className='w-100' src="https://corporate.bestbuy.com/wp-content/uploads/2021/12/BBY_Blog_BBYxMKBHD.png" alt="" />
                </Link>
              </Card>
              <p>lsfh</p>
            </div>
            <div className='w-25'>
              <Card className='shadow rounded-0'>
                <Link to={'https://youtu.be/sF9xYtouZjY'} target='_blank'>
                  <img className='w-100' src="https://corporate.bestbuy.com/wp-content/uploads/2021/12/BBY_Blog_BBYxMKBHD.png" alt="" />
                </Link>
              </Card>
              <p>lsfh</p>
            </div>
            <div className='w-25'>
              <Card className='shadow rounded-0'>
                <Link to={'https://youtu.be/sF9xYtouZjY'} target='_blank'>
                  <img className='w-100' src="https://corporate.bestbuy.com/wp-content/uploads/2021/12/BBY_Blog_BBYxMKBHD.png" alt="" />
                </Link>
              </Card>
              <p>lsfh</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home