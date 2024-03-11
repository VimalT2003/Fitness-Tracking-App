import React, { useEffect } from 'react'
import UserNavbar from './UserNavbar';
import Welcome from './Home(design)/Welcome'
import Exericsedetails from './Home(design)/Exericsedetails';
import Workoutdetails from './Home(design)/Workoutdetails';
import Goalpage from './Home(design)/Goalpage';
import './Userhome.css';
import BMIcal from './Home(design)/BMIcal';
import Footer from './Footer';


function UserHome() {
   
  const color={
    background:"#EBF7FF"
   }

  return (
    <div style={color}>
      <UserNavbar/>
      <div className='' > <Welcome /></div>
      <h1 className='text-center mt-5'><b className='text-decoration-underline' > Explore Pages</b></h1>
      <div className='animation' ><Exericsedetails/></div>
       <div className='animation'><Goalpage/></div>
       <div className='animation'><Workoutdetails/></div>
       <div className='animation bot'><BMIcal/></div>
       <div ><Footer/></div>
  
       
    </div>
  )
}

export default UserHome
