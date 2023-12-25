import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from '../../Services/allAPI';

function Register() {

  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    const { username, email, password } = userDetails
    if (!username || !email || !password) {
      toast.warn("Please fill the form completely")
    }
    else {
      const result = await registerAPI(userDetails)
      console.log(result);

      if (result.status === 200) {
        toast.success(`${result.data.username} registered succesfully`)
        setTimeout(() => {
          navigate('/user/login')
        }, 2000)
      }
      else {
        toast.error("Registration failed!")
      }
    }
  }

  return (
    <>
      <section className="vh-100" style={{ background: '#9A616D' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-4 text-black">
                      <form className='ps-3'>
                        <div className="d-flex align-items-center">
                          <i className="fa-brands fa-square-pied-piper fa-2xl" style={{ color: '#1CAC78' }} ></i>
                          <span className="h1 fw-bold ms-2">CreatorBay</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                          Register your account
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            value={userDetails.username}
                            onChange={(e) => { setUserDetails({ ...userDetails, username: e.target.value }) }}
                          />
                          <label className="form-label">User Name</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }}
                          />
                          <label className="form-label">Email address</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }}
                          />
                          <label className="form-label">Password</label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button onClick={handleRegister} className="btn btn-dark btn-lg btn-block" type="submit">
                            Register
                          </button>
                        </div>

                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Already have an account?{' '}
                          <Link to={'/user/login'} style={{ color: "#393f81" }}>
                            Login here
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={2000} />
    </>
  );
}

export default Register;
