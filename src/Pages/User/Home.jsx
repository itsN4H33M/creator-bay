import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './home.css'


function Home() {


  return (
    <>
      <div className='home'>
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
        <div className='pb-5' style={{ background: 'linear-gradient(0deg, rgba(255,255,255,1) 10%, rgba(230,230,250,1) 100%)' }}>
          {/* paid links */}
          <div className='cards d-flex justify-content-evenly align-items-center' >
            {/* Videos */}
            <Card style={{ width: '18rem' }} className='shadow'>
              <Card.Img height={'250px'} variant="top" src="https://i.playboard.app/p/629f46cb566118f59c636381127a7dc6/default.jpg" />
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <Card.Title>Exclusive Videos</Card.Title>
                <Link className='float-end' to={'/videos'}>
                  <i className="fa-regular fa-circle-play fa-xl" style={{ color: '#53BDA5' }}></i>
                </Link>
              </Card.Body>
            </Card>
            {/* Products */}
            <Card style={{ width: '18rem' }} className='shadow'>
              <Card.Img height={'250px'} variant="top" src="https://folin.io/cdn/shop/files/0H5A1580copy.jpg?v=1692344424" />
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <Card.Title>Shop Products</Card.Title>
                <Link className='float-end' to={'/products'}>
                  <i className="fa-solid fa-bag-shopping fa-xl" style={{ color: '#53BDA5' }}></i>
                </Link>
              </Card.Body>
            </Card>
          </div>
          {/* recent videos */}
          <div className='d-flex flex-column justify-content-center mb-5'>
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
                    <img className='w-100' src="https://i.ytimg.com/vi/SQASybeLmPM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLsdWZuvdBuK54mQNFTBtlgbrxtw" alt="" />
                  </Link>
                </Card>
                <p className=' fs-5 fw-bolder'>Lorem Ipsum</p>
              </div>
              <div className='w-25'>
                <Card className='shadow rounded-0'>
                  <Link to={'https://youtu.be/sF9xYtouZjY'} target='_blank'>
                    <img className='w-100' src="https://i.ytimg.com/vi/YF2NFMLFBhA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEKeq84babyekPhM5SVhc6H8d2ig" alt="" />
                  </Link>
                </Card>
                <p className=' fs-5 fw-bolder'>Lorem Ipsum</p>
              </div>
              <div className='w-25'>
                <Card className='shadow rounded-0'>
                  <Link to={'https://youtu.be/sF9xYtouZjY'} target='_blank'>
                    <img className='w-100' src="https://i.ytimg.com/vi/WTg-Y44zUAc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDI_wrUtoyFLrLYAU2yH_Ac6PaxJQ" alt="" />
                  </Link>
                </Card>
                <p className=' fs-5 fw-bolder'>Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home