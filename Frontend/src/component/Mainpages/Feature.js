import React from 'react'

function Feature() {
    const h1={
        fontWeight:"700"
      }
  return (
    <div>
      <div className='row mt-sm-2 mt-md-5'>
        <div className='content col-md-5 ms-5 mt-5' data-aos="fade-right"  data-aos-duration="2000">
             <h1 className='anim' style={h1}>SET GOALS <br/>
                    LOG WORKOUTS. <br/>
                    STAY ON TRACK.</h1>
             <p className='anim'>Easily track your Workouts, set Training Plans, and discover new Workout Routines to crush your goals.</p>
        </div>
        <div className='col-md-6'>
        <img src="https://mapmy.uastatic.com/aaeb86964c6a02e68784d45e76637d9c.webp" data-aos="zoom-in"  data-aos-duration="2000" className="fitness-pic anim" alt=""/>
    </div>
    </div>
    </div>
  )
}

export default Feature
