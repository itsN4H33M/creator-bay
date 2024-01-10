import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

function ViewProduct() {

  const [image, setImage] = useState('')
  // taking the id parameter
  const { id } = useParams()

  return (
    <>
      <Container className='border my-5'>
        <Row>
          <Col lg={1}>
            <img onClick={() => setImage("https://imgproxy.fourthwall.com/V28fL2HrPNIvZoNkX8H6-NNKQONaLd5fr-OkhTM6Q24/w:900/sm:1/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL2Nkbi5m/b3VydGh3YWxsLmNv/bS9vZmZlci9zaF81/YTEyZTQ2MC0xZTI3/LTQ2ODAtYjIwNi03/NzA3NDI0MjcwM2Ev/OGU3MGViOGEtY2Vk/ZC00ZGIyLWJhMTMt/Yzg2OWZhMjhhMGQ2/LmpwZWc.webp")} className='w-100' src="https://imgproxy.fourthwall.com/V28fL2HrPNIvZoNkX8H6-NNKQONaLd5fr-OkhTM6Q24/w:900/sm:1/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL2Nkbi5m/b3VydGh3YWxsLmNv/bS9vZmZlci9zaF81/YTEyZTQ2MC0xZTI3/LTQ2ODAtYjIwNi03/NzA3NDI0MjcwM2Ev/OGU3MGViOGEtY2Vk/ZC00ZGIyLWJhMTMt/Yzg2OWZhMjhhMGQ2/LmpwZWc.webp" alt="" />

            <img onClick={() => setImage("https://imgproxy.fourthwall.com/EMHIxBN7IeSSNNH-xaKR6dNKeeYXnul8l2W91BA0RpY/w:900/sm:1/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL2Nkbi5m/b3VydGh3YWxsLmNv/bS9vZmZlci9zaF81/YTEyZTQ2MC0xZTI3/LTQ2ODAtYjIwNi03/NzA3NDI0MjcwM2Ev/Mzk5NTcxNWItOTg0/Ni00ZDgzLWIyYTgt/MzI3NjQyYjY0NTI5/LnBuZw.webp")} className='w-100 mt-2' src="https://imgproxy.fourthwall.com/EMHIxBN7IeSSNNH-xaKR6dNKeeYXnul8l2W91BA0RpY/w:900/sm:1/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL2Nkbi5m/b3VydGh3YWxsLmNv/bS9vZmZlci9zaF81/YTEyZTQ2MC0xZTI3/LTQ2ODAtYjIwNi03/NzA3NDI0MjcwM2Ev/Mzk5NTcxNWItOTg0/Ni00ZDgzLWIyYTgt/MzI3NjQyYjY0NTI5/LnBuZw.webp" alt="" />

            <img onClick={() => setImage("https://imgproxy.fourthwall.com/P5f_gfZ7sUGgBQWZULGCflFHKfdd4Sx95f31v2A5aPg/w:900/sm:1/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL2Nkbi5m/b3VydGh3YWxsLmNv/bS9vZmZlci9zaF81/YTEyZTQ2MC0xZTI3/LTQ2ODAtYjIwNi03/NzA3NDI0MjcwM2Ev/NGQxNGI1NzgtYjZk/OS00MzMxLWFkZGMt/MWZjOGZjZmQ3ZjZj/LnBuZw.webp")} className='w-100 mt-2' src="https://imgproxy.fourthwall.com/P5f_gfZ7sUGgBQWZULGCflFHKfdd4Sx95f31v2A5aPg/w:900/sm:1/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL2Nkbi5m/b3VydGh3YWxsLmNv/bS9vZmZlci9zaF81/YTEyZTQ2MC0xZTI3/LTQ2ODAtYjIwNi03/NzA3NDI0MjcwM2Ev/NGQxNGI1NzgtYjZk/OS00MzMxLWFkZGMt/MWZjOGZjZmQ3ZjZj/LnBuZw.webp" alt="" />
          </Col>
          <Col lg={5}>
            <img className='w-100' src={image ? image : "https://imgproxy.fourthwall.com/P5f_gfZ7sUGgBQWZULGCflFHKfdd4Sx95f31v2A5aPg/w:900/sm:1/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL2Nkbi5m/b3VydGh3YWxsLmNv/bS9vZmZlci9zaF81/YTEyZTQ2MC0xZTI3/LTQ2ODAtYjIwNi03/NzA3NDI0MjcwM2Ev/NGQxNGI1NzgtYjZk/OS00MzMxLWFkZGMt/MWZjOGZjZmQ3ZjZj/LnBuZw.webp"} alt="" />
          </Col>
          <Col lg={6}>
            <h2 className='fw-bolder'>CHEVRON HOODIE</h2>
            <h5 className='my-4 fw-bolder'>$50.00</h5>
            <p>Classic Chevron styling with updated little accents to keep things looking current! Not too flashy but still strong enough to make a statement.</p>
            <ul>
              <li>Fleece with a soft brushed interior</li>
              <li>Embroidered Logo on Sleeve</li>
              <li>Side Seam Pocket with Contrasted Color</li>
              <li>Marques is wearing a Medium</li>
            </ul>
            <h4 className='mt-5 mb-2'>Select Size:</h4>
            <div className='d-flex mb-5'>
              <Button variant="outline-dark" className='px-3 me-2 fs-5'>XS</Button>
              <Button variant="outline-dark" className='px-3 me-2 fs-4'>S</Button>
              <Button variant="outline-dark" className='px-3 me-2 fs-4'>M</Button>
              <Button variant="outline-dark" className='px-3 me-2 fs-4'>L</Button>
              <Button variant="outline-dark" className='px-3 me-2 fs-4'>XL</Button>
            </div>
            <hr />
            <div className='d-flex justify-content-between'>
              <div className='d-flex border p-2 rounded'>
                <button className='btn fs-5'>-</button>
                <input style={{ maxWidth: '3rem' }} className='form-control text-center border border-0 fs-5' type="text" value={0} readOnly />
                <button className='btn fs-5'>+</button>
              </div>
              <Button variant="dark" className='px-5'>
                Add To Cart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ViewProduct