import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Checkout() {

  const handleOrder = () => {
    toast.success("Order placed successfully")
  }

  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{ background: 'linear-gradient(0deg, rgba(255,255,255,1) 10%, rgba(230,230,250,1) 100%)' }}>
        <div className='my-5 py-4 w-50 d-flex flex-column align-items-center card shadow' style={{ background: 'linear-gradient(180deg, rgba(255,255,255,1) 10%, rgba(230,230,250,1) 100%)' }}>
          <div className='pb-4'>
            <i className="fa-brands fa-square-pied-piper fs-1" style={{ color: '#1CAC78' }} ></i>
          </div>
          <div className='w-100 d-flex flex-column align-items-center pt-4 border-top'>
            <input className='form-control mb-3 w-50 border border-dark-subtle rounded-0' type="text" placeholder='Full name' />
            <input className='form-control mb-3 w-50 border border-dark-subtle rounded-0' type="text" placeholder='Address' />
            <input className='form-control mb-3 w-50 border border-dark-subtle rounded-0' type="text" placeholder='City' />
            <input className='form-control mb-3 w-50 border border-dark-subtle rounded-0' type="text" placeholder='State' />
            <input className='form-control mb-3 w-50 border border-dark-subtle rounded-0' type="text" placeholder='Country' />
            <div className='d-flex w-50'>
              <input className='form-control mb-3 w-50 border border-dark-subtle rounded-0 me-3' type="text" placeholder='Pin code' />
              <input className='form-control mb-3 w-50 border border-dark-subtle rounded-0' type="text" placeholder='Phone number' />
            </div>
            <button onClick={handleOrder} className='w-25 btn btn-dark mt-5 rounded-0'>Place Order</button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000} />
    </>
  )
}

export default Checkout