import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={5} className='d-flex justify-content-center align-items-center'>
            <img style={{ maxHeight: '500px' }} className='h-75' src="https://im.rediff.com/movies/2023/oct/30chandler1.jpg?w=670&h=900" alt="Portrait" />
          </Col>
          <Col lg={7} className='d-flex justify-content-center align-items-center flex-column'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ullam, optio adipisci nobis, labore reiciendis ratione at necessitatibus tenetur vitae veniam itaque ad mollitia, molestias asperiores expedita dicta facilis amet.</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur, laborum, praesentium corrupti deleniti quasi quia esse iure nemo accusamus assumenda, nobis quae cumque eaque quo. Officia qui dolorum provident.
            Saepe dolore dolorem repellat. Facilis cupiditate harum labore iure dicta iusto nihil, magni repellendus aliquid ad fugit culpa ex voluptatum accusamus ipsam placeat sint, delectus dolor quis eaque maxime. Aspernatur.
          </Col>
        </Row>
      </Container>
      <div style={{ backgroundImage: 'linear-gradient(to bottom, #fff1eb 0%, #ace0f9 100%)' }} className='pb-5'>
        {/* paid links */}
        <div className='d-flex justify-content-evenly align-items-center py-5'>
          {/* Videos */}
          <Card style={{ width: '17rem' }} className='shadow'>
            <Card.Img height={'200px'} variant="top" src="https://i.playboard.app/p/629f46cb566118f59c636381127a7dc6/default.jpg" />
            <Card.Body className='d-flex justify-content-between align-items-center'>
              <Card.Title>Exclusive Videos</Card.Title>
              <Link className='float-end' to={'/videos'}>
                <i className="fa-regular fa-circle-play fa-xl"></i>
              </Link>
            </Card.Body>
          </Card>
          {/* Products */}
          <Card style={{ width: '17rem' }} className='shadow'>
            <Card.Img height={'200px'} variant="top" src="https://folin.io/cdn/shop/files/0H5A1580copy.jpg?v=1692344424" />
            <Card.Body className='d-flex justify-content-between align-items-center'>
              <Card.Title>Shop Products</Card.Title>
              <Link className='float-end' to={'/products'}>
                <i className="fa-solid fa-bag-shopping fa-xl"></i>
              </Link>
            </Card.Body>
          </Card>
        </div>
        {/* recent videos */}
        <div className='mt-5'>
          <div className='d-flex justify-content-between align-items-center mx-5'>
            <h1>Recent Vidoes</h1>
            <Link to={'https://www.youtube.com/'} target="_blank">
              <Button>Visit Channel</Button>
            </Link>
          </div>
          <Container className='mt-5'>
            <Row>
              <Col lg={4}>
                <Card className='shadow rounded-0'>
                  <Link to={'https://youtu.be/sF9xYtouZjY'} target='_blank'>
                    <img className='w-100' src="https://corporate.bestbuy.com/wp-content/uploads/2021/12/BBY_Blog_BBYxMKBHD.png" alt="" />
                  </Link>
                </Card>
                <p>lsfh</p>
              </Col>
              <Col lg={4}>
                <Card className='shadow rounded-0'>
                  <Link to={'https://youtu.be/sF9xYtouZjY'} target='_blank'>
                    <img className='w-100' src="https://corporate.bestbuy.com/wp-content/uploads/2021/12/BBY_Blog_BBYxMKBHD.png" alt="" />
                  </Link>
                </Card>
                <p>lsfh</p>
              </Col>
              <Col lg={4}>
                <Card className='shadow rounded-0'>
                  <Link to={'https://youtu.be/sF9xYtouZjY'} target='_blank'>
                    <img className='w-100' src="https://corporate.bestbuy.com/wp-content/uploads/2021/12/BBY_Blog_BBYxMKBHD.png" alt="" />
                  </Link>
                </Card>
                <p>lsfh</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Home