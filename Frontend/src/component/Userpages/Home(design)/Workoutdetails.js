import React from 'react'
import Workout from './assets/Workout.png';

function Workoutdetails() {
  return (
    <div className='container'>
        <div className='row' style={{marginTop:"50px"}}>
            <div className='col-md-6 order-sm-1 order-md-1'  data-aos="fade-up-right" data-aos-duration="2000"   data-aos-mirror="true">
                <img src={Workout} className='w-100 img-fluid' style={{height:"380px"}}/>
            </div>
            <div className='col-md-6 mt-3 order-sm-2 order-md-1' data-aos="fade-left" data-aos-duration="2000"  data-aos-mirror="true" >
                <h2 className='fw-bold text-decoration-underline'>3. Workoutlog Page</h2>
                <ul>
                    <li className='ms-3 mt-3'><h3 className=''>Workoutlog Form</h3></li>
                    <p className='ms-5' style={{fontSize:"18px"}}>In Workoutlog form, User can create a details about their progress towards their goal..They asked to fill some details like Workout type, Duration, Intensity(Low, Medium, High) and current date.
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

export default Workoutdetails
