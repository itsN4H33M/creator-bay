import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getProductsAPI } from '../../Services/allAPI'

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
      {
        items.map((product) => (
          <Container className='my-5 border-bottom pb-2' key={product._id}>
            <Card style={{ width: '16rem' }} className='shadow rounded-0'>
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

    </>
  )
}

export default Products