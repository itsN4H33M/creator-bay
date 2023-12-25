import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Cart() {
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center flex-column my-5'>
        <img className='w-25' src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png" alt="" />
        <h5>Your Shopping Cart is Empty</h5>
        <Button className='mt-5' as={Link} to={'/products'} variant='success'>Start Shopping</Button>
      </Container>

      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <img height={'100px'} src="https://imgproxy.fourthwall.com/V28fL2HrPNIvZoNkX8H6-NNKQONaLd5fr-OkhTM6Q24/w:900/sm:1/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL2Nkbi5m/b3VydGh3YWxsLmNv/bS9vZmZlci9zaF81/YTEyZTQ2MC0xZTI3/LTQ2ODAtYjIwNi03/NzA3NDI0MjcwM2Ev/OGU3MGViOGEtY2Vk/ZC00ZGIyLWJhMTMt/Yzg2OWZhMjhhMGQ2/LmpwZWc.webp" alt="product" />
                </TableCell>
                <TableCell align="right">
                  <div className='d-flex border p-2 rounded w-25 float-end'>
                    <button className='btn fs-5'>-</button>
                    <input style={{ maxWidth: '3rem' }} className='form-control text-center border border-0 fs-5' type="text" value={0} readOnly />
                    <button className='btn fs-5'>+</button>
                  </div>
                </TableCell>
                <TableCell align="right">
                  $100
                </TableCell>
                <TableCell style={{ maxWidth: '50px' }} align="right"><i className="fa-solid fa-xmark fa-xl"></i></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

    </>
  )
}

export default Cart