import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI } from '../../Services/allAPI';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const { email, password } = loginDetails

    if (!email || !password) {
      toast.warn("Please fill the form completely!")
    }
    else {
      const result = await loginAPI(loginDetails)

      if (result.status === 200) {
        sessionStorage.setItem("user", JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token", result.data.jwtoken)

        toast.success("Login successfull!")
        setTimeout(() => {
          navigate('/')
        }, 3000)
      }
      else {
        toast.error("Login failed")
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
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fa-brands fa-square-pied-piper fa-2xl" style={{ color: '#1CAC78' }} ></i>
                          <span className="h1 fw-bold ms-2">CreatorBay</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                          Sign into your account
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            value={loginDetails.email}
                            onChange={(e) => { setLoginDetails({ ...loginDetails, email: e.target.value }) }}
                          />
                          <label className="form-label">
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            value={loginDetails.password}
                            onChange={(e) => { setLoginDetails({ ...loginDetails, password: e.target.value }) }}
                          />
                          <label className="form-label">
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button onClick={handleLogin} className="btn btn-dark btn-lg btn-block" type="submit">
                            Login
                          </button>
                        </div>

                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Don't have an account?{' '}
                          <Link to={'/user/register'} style={{ color: "#393f81" }}>
                            Register here
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

export default Login;
