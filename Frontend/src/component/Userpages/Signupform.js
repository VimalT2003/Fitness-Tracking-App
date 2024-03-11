import React from 'react';
import { useState } from 'react';
import MainNav from '../Mainpages/MainNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus,faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function Signupform() {

  const [showPassword, setShowPassword] = useState(false);
  const [signupdata, setSignupdata] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleLogin = (e) => {
    const { name, value } = e.target
    setSignupdata((pre) => ({
      ...pre, [name]: value
    }))
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/api/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signupdata)
    })

      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "201") {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: data.message,
            showConfirmButton: false,
            timer: 1500
          });
          setInterval(() => {
            window.location.href = "/loginform"
          }, 1560)

        }
        else {
          alert(data.message)
        }
      })
  }

  const container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    width: "100vw",
    margin: "55px"

  }
  const color = {
    background: "#EBF7FF"
  }


  return (
    <div style={color}>
      <MainNav />
      <div className='container bg-tertiary mx-auto ' data-aos="flip-right"
        data-aos-duration="1500" style={container}  >
        <div className='row g-0'>
          <div className='col-md-6 order-xs-1 order-sm-1 order-md-2 '>
            <img style={{ height: "450px", border: "50px" }} className="w-100  h-100 rounded-start-md-5" src="https://t3.ftcdn.net/jpg/04/94/01/92/360_F_494019215_jZTW9skIs18uoKjZinCbxOflLhJm14iy.jpg" alt="" />
          </div>

          <div className='col-md-6 order-xs-2 order-sm-2 order-md-1'>
            <form className='shadow-lg p-3 bg-body-tertiary  w-100 h-100' onSubmit={handleSubmit}>
              <div className='mx-5'>
                <h2 className='text-center' style={{ color: "#FBCB00" }}><b> <FontAwesomeIcon icon={faUserPlus} /> SignUp Form</b></h2>
                <div className="mb-3 mt-3">
                  <label className="form-label"><b>Username</b></label>
                  <input type="text" placeholder='Enter the Username' value={signupdata.name} className="form-control" name="name" onChange={handleLogin} required />
                </div>
                <div className="mb-3">
                  <label className="form-label"><b>Email</b></label>
                  <input type="email" placeholder='Enter the Email id' value={signupdata.email} className="form-control" name="email" onChange={handleLogin} aria-describedby="emailHelp" required={/^[^\s@]+@[^\s@]+\.[^\s@]+$/} />
                </div>

                <div className="mb-3">
                  <label className="form-label"><b>Password</b></label><br/>
                  <div className="mb-3 d-flex">
                  <input type={showPassword ? 'text' : 'password'} placeholder='Enter the Password' value={signupdata.password} className="form-control" name="password" onChange={handleLogin} required={/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/} />
                  <button type="reset" className='btn-dark' onClick={toggleShowPassword}>
                    {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />} 
                  </button>
                  </div>
                </div>
                <button type="submit" style={{ width: "130px" }} className="btn btn-warning mb-2 mt-2"><b>SIGN UP</b></button>


              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signupform
