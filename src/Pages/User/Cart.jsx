import React, { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/cartSlice';


function Cart() {

  const items = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const total = items?.reduce((accumulator, item) => {
    return accumulator + (item.productDetails.price * item.counter);
  }, 0)

  useEffect(() => {
    console.log(items);
  }, [])

  return (
    <>
      <div className='vh-100'>
        {
          items.length > 0 ?
            <Container>
              <TableContainer className='bg-light my-5' component={Paper} style={{ background: 'linear-gradient(180deg, rgba(255,255,255,1) 10%, rgba(230,230,250,1) 100%)' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className='fw-bolder fs-5'>Item</TableCell>
                      <TableCell className='fw-bolder fs-5' align="right">Quantity</TableCell>
                      <TableCell className='fw-bolder fs-5' align="right">Price</TableCell>
                      <TableCell className='fw-bolder fs-5' align="right"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      items.map((product) => (
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell className='d-flex align-items-center' component="th" scope="row">
                            <img height={'100px'} src={product.productDetails.images[0]} alt="product" />
                            <div className='ms-2'>
                              <h5 className='fw-bolder'>{product.productDetails.name}</h5>
                              <h5 className='text-uppercase'>{product.size}</h5>
                            </div>
                          </TableCell>
                          <TableCell align="right">
                            <div className='d-flex justify-content-center border rounded float-end'>
                              <input style={{ maxWidth: '3rem' }} className='form-control text-center border border-0 fs-5' type="text" value={product.counter} readOnly />
                            </div>
                          </TableCell>
                          <TableCell align="right">
                            ${product.counter * product.productDetails.price}
                          </TableCell>
                          <TableCell style={{ maxWidth: '50px' }} align="right">
                            <i onClick={() => dispatch(removeFromCart(product))} className="btn btn-danger fa-solid fa-xmark fa-xl py-3"></i>
                          </TableCell>
                        </TableRow>
                      ))
                    }
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell className='fw-bolder fs-6' align='right'>Total</TableCell>
                      <TableCell className='fw-bolder fs-6' align='right'>${total}.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <div className='d-flex justify-content-between'>
                <Link to={'/products'} className='btn btn-dark'>Back to shopping</Link>
                <Link to={'/checkout'} className='btn btn-dark'>Checkout</Link>
              </div>
            </Container>
            :
            <Container className='d-flex justify-content-center align-items-center flex-column my-5'>
              <img className='w-25' src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png" alt="" />
              <h5>Your Shopping Cart is Empty</h5>
              <Button className='mt-5' as={Link} to={'/products'} variant='success'>Start Shopping</Button>
            </Container>
        }

      </div>


    </>
  )
}

export default Cart