import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
function Videos() {
  return (
    <>
      <Container className='my-5'>
        <Row>
          <Col lg={6}>
            <Card className='shadow mx-2'>
              <Card.Img height={'400px'} variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className='shadow mx-2'>
              <Card.Img height={'400px'} variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Videos