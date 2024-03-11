import React from 'react'
import Exerciseimage from './assets/Exerciseimage.png';

function Exericsedetails() {
  return (
    <div className='container'>
        <div className='row'  style={{marginTop:"50px"}}>
            <div className='col-md-6'  data-aos="fade-up-right" data-aos-duration="2000">
                <img src={Exerciseimage} className='w-100 img-fluid' style={{height:"380px"}} />
            </div>
            <div className='col-md-6 mt-3' data-aos="fade-left"   data-aos-duration="2000">
                <h2 className='fw-bold text-decoration-underline'>1. Exercise Page</h2>
                <ul>
                    <li className='ms-3 mt-3'><h3 className=''>Search Box</h3></li>
                    <p className='ms-5' style={{fontSize:"18px"}}>In search box you can able to search the exercises like Abs, chest, Warmups, etc.. </p>
                </ul>
                 <ul>
                    <li className='ms-3'><h3 className=''>Exercise cards</h3></li>
                    <p className='ms-5' style={{fontSize:"18px"}}>The Exercises are shown like a gif format and also you can able to Check full details by Clicking <mark>Full Details</mark> Button.</p>
                </ul>
            </div>
        </div>
       
    </div>
  )
}

export default Exericsedetails
