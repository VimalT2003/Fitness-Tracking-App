import React from 'react'
import Goal from './assets/Goal.png';


function Goalpage() {

    
  
  return (
    <div className='container' >
        <div className='row' style={{marginTop:"50px"}}>
            <div className='col-md-6 order-sm-1 order-md-2' data-aos="fade-up-left"   data-aos-duration="2000">
                <img src={Goal} className='w-100 ' style={{height:"380px"}}/>
            </div>
            <div className='col-md-6 mt-3 order-sm-2 order-md-1 ' data-aos="fade-right"   data-aos-duration="2000">
                <h2 className='fw-bold text-decoration-underline'>2. Goal Setting Page</h2>
                <ul>
                    <li className='ms-3 mt-3'><h3 className=''>Goal Setting Form</h3></li>
                    <p className='ms-5' style={{fontSize:"18px"}}>In Goal Setting form, User can create their Goal Details what user want to do like weight loss, weight gain, Running distancex etc.. Users need to fill details 
                    like Goal type, Target weight/distance, Progress (when you start), Deadline (Goal Ending date)
                   </p>
                </ul>
                 <ul>
                    <li className='ms-3'><h3 className=''>Records</h3></li>
                    <p className='ms-5' style={{fontSize:"18px"}}>If you want to check the history of your Progress click <mark><b>Records</b></mark> button..</p>
                </ul>
            </div>
        </div>
       
    </div>
  )
}

export default Goalpage
