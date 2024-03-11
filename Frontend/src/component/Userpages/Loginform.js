import React from 'react';
import { useState } from 'react';
import MainNav from '../Mainpages/MainNav';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faEye , faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import Welcome from './Home(design)/Welcome';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



function Loginform() {

  const [showPassword, setShowPassword] = useState(false);
    const [loginData,setloginData] = useState({
        username:"",
        email:"",
        password:""
   });

   const color={
    background:"#EBF7FF"
   }

   const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
 
   const handleLogin=(e)=>{
       const {name,value}=e.target
       setloginData((pre)=>({
         ...pre, [name] : value
       }))
   }
 
   const handleSubmit=(e)=>{
     e.preventDefault();
     fetch('http://localhost:3001/api/v1/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
     })
     .then((res)=>res.json())
     .then((data)=>{
      console.log(data,"userLogged in");
      if(data.status=="200"){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title:data.message,
          showConfirmButton: false,
          timer: 1500
        });
        localStorage.setItem("accessToken",data.accessToken);
        setTimeout(() => {
          window.location.href="/userhome"// Redirect after delay
        }, 1550);
      }
      else if(loginData.email==="Admin@gmail.com" && loginData.password==="Admin2003@"){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Admin Login Sucessful",
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          window.location.href="/adminhome" // Redirect after delay
        }, 1550);
        
       }
       
       else{
        alert(data.message)
       }
        
     })
   }

   const container={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"100vh",
    width:"100vw"

   }
  return (
    <div>
    <div style={color}>
     <MainNav/>
    <div className='container bg-tertiary mx-auto mt-sm-4 mt-md-0' data-aos="flip-left"
     data-aos-duration="1500" style={container}  >
        <div className='row g-0 mx-auto'>
            <div className='col-md-6'>
               <img style={{height:"450px",border:"50px"}} className="w-100 h-100 rounded-start-md-5" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fHww" alt=""/>
            </div>
            <div className='col-md-6'>  
        <form className='shadow-lg p-3 mb-2 bg-body-tertiary w-100 h-100' onSubmit={handleSubmit}>
            <div className='mx-5'>
            <h2 className='text-center text-primary mt-3'><b>Login Form <FontAwesomeIcon icon={faRightToBracket}/> </b></h2>
               <div className="mb-4 mt-4">
               <label  className="form-label"><b>Email</b></label>
              <input type="email" placeholder='Enter the Email id' className="form-control"  name="email" onChange={handleLogin} aria-describedby="emailHelp"  required/>
              </div>
               <div className="mb-3">
               <label  className="form-label"><b>Password</b></label>
               <div className='d-flex'>
              <input type={showPassword ? 'text' : 'password'} placeholder='Enter the Password' className="form-control"  name="password" onChange={handleLogin}  required/>
              <button type="button"   className='btn-dark' onClick={toggleShowPassword}>
                    {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />} 
                  </button>
                  </div>
              <button type="submit" style={{width:"130px"}}  className="btn btn-primary  mt-3"><b>LOGIN</b></button>
              <p className='mt-3'>Don't have an account? <Link to="/signupform">Signup</Link></p>
              </div>
              </div>
                 </form>
               </div>
            </div>
            </div>
            </div>
          
        </div>
  )
}

export default Loginform
