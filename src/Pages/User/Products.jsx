import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getProductsAPI } from '../../Services/allAPI'
import './product.css'

function Products() {

  const [items, setItems] = useState([])

  const getProducts = async () => {
    const result = await getProductsAPI()
    console.log(result.data);
    setItems(result.data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <div className='view' style={{ background: 'linear-gradient(180deg, rgba(255,255,255,1) 10%, rgba(230,230,250,1) 100%)' }}>
        {
          items.map((product) => (
            <Container className='my-5 pb-2' key={product._id}>
              <Card style={{ width: '16rem' }} className='myCard shadow rounded-0'>
                <Link to={`/product/${product._id}`} className='text-decoration-none text-black'>
                  <img className='w-100' height={'300px'} src={product.images[0]} alt="" />
                  <div className='d-flex justify-content-between align-items-center px-2 pt-2'>
                    <p className='fw-bolder '>{product.name}</p>
                    <p>${product.price}.00</p>
                  </div>
                </Link>
              </Card>
            </Container>
          ))
        }
      </div>

    </>
  )
}

export default Products