import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { getAProductAPI } from '../../Services/allAPI';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cartSlice';
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './product.css'

function ViewProduct() {

  const [image, setImage] = useState('')
  const [cartDetails, setCartDetails] = useState({
    productDetails: {},
    counter: 1,
    size: ""
  })
  const navigate = useNavigate()

  const dispatch = useDispatch()

  // taking the id parameter
  const { id } = useParams()

  const getProduct = async (id) => {
    const result = await getAProductAPI(id)
    // console.log(result.data);
    setCartDetails({ ...cartDetails, productDetails: result.data })
  }

  const handleIncrement = () => {
    setCartDetails({
      ...cartDetails,
      counter: cartDetails.counter + 1
    })
  }

  const handleDecrement = () => {
    cartDetails.counter > 0 && setCartDetails({
      ...cartDetails,
      counter: cartDetails.counter - 1
    })
  }

  const addItem = (cartDetails) => {
    const { size } = cartDetails
    if (size) {
      dispatch(addToCart(cartDetails))
      navigate('/cart')
    }
    else {
      toast.warning("Select all the fields")
    }

  }

  useEffect(() => {
    getProduct(id)
  }, [])

  useEffect(() => {
    console.log(cartDetails);
  }, [cartDetails])

  return (
    <>
      <Container className='p-2 my-5' style={{ background: 'linear-gradient(0deg, rgba(255,255,255,1) 10%, rgba(230,230,250,1) 100%)' }}>
        <Row>
          <Col lg={1}>
            {
              cartDetails.productDetails.images?.map((item, index) => (
                <img key={index} onClick={() => setImage(item)} className='iconimg border w-100' src={item} alt="" />
              ))
            }
          </Col>
          <Col lg={5}>
            <img className='w-100' src={image ? image : "https://imgproxy.fourthwall.com/P5f_gfZ7sUGgBQWZULGCflFHKfdd4Sx95f31v2A5aPg/w:900/sm:1/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL2Nkbi5m/b3VydGh3YWxsLmNv/bS9vZmZlci9zaF81/YTEyZTQ2MC0xZTI3/LTQ2ODAtYjIwNi03/NzA3NDI0MjcwM2Ev/NGQxNGI1NzgtYjZk/OS00MzMxLWFkZGMt/MWZjOGZjZmQ3ZjZj/LnBuZw.webp"} alt="" />
          </Col>
          <Col lg={6} className='d-flex flex-column '>
            <h2 className='fw-bolder'>{cartDetails.productDetails.name}</h2>
            <h5 className='my-4 fw-bolder'>${cartDetails.productDetails.price}.00</h5>
            <p>{cartDetails.productDetails.description}</p>
            <ul>
              {
                cartDetails.productDetails.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))
              }
            </ul>
            <h4 className='mt-5 mb-2'>Select Size:</h4>
            <div className='d-flex mb-5'>
              <input type="radio" className="btn-check" onChange={(e) => { setCartDetails({ ...cartDetails, size: e.target.value }) }} name="sizes" id="option1" value='xs' />
              <label className="btn btn-outline-dark me-3" htmlFor="option1">XS</label>

              <input type="radio" className="btn-check" onChange={(e) => { setCartDetails({ ...cartDetails, size: e.target.value }) }} name="sizes" id="option2" value="s" />
              <label className="btn btn-outline-dark me-3" htmlFor="option2">S</label>

              <input type="radio" className="btn-check" onChange={(e) => { setCartDetails({ ...cartDetails, size: e.target.value }) }} name="sizes" id="option3" value="m" />
              <label className="btn btn-outline-dark me-3" htmlFor="option3">M</label>

              <input type="radio" className="btn-check" onChange={(e) => { setCartDetails({ ...cartDetails, size: e.target.value }) }} name="sizes" id="option4" value="l" />
              <label className="btn btn-outline-dark me-3" htmlFor="option4">L</label>

              <input type="radio" className="btn-check" onChange={(e) => { setCartDetails({ ...cartDetails, size: e.target.value }) }} name="sizes" id="option5" value="xl" />
              <label className="btn btn-outline-dark me-3" htmlFor="option5">XL</label>
            </div>
            <hr />
            <div className='d-flex justify-content-between'>
              <div className='d-flex border p-2 rounded'>
                <button onClick={handleDecrement} className='btn fs-5'>-</button>
                <input style={{ maxWidth: '3rem' }} className='form-control text-center border border-0 fs-5' type="text" value={cartDetails.counter} readOnly />
                <button onClick={handleIncrement} className='btn fs-5'>+</button>
              </div>
              <Button onClick={() => addItem(cartDetails)} variant="dark" className='px-5'>
                Add To Cart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={2000} />
    </>
  )
}

export default ViewProduct