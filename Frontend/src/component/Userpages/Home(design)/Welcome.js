import { faBackwardStep } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Welcome() {
    const back={
        backgroundImage:"url('https://media.istockphoto.com/id/1660289200/photo/digital-illustration-blue-background-with-dark-colors-in-the-bg.jpg?b=1&s=612x612&w=0&k=20&c=yplbQiTYqYJkxv7qrHTIrux_4sxz4UOQyUFBqYqilHo=')",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"700px",
        width:"100%"
    }

    const display= {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"90%",
        flexDirection:"column",
        width:"100%"

    }
  return (
    <div style={back}>
    <div className='text-center row ' data-aos="zoom-in"  data-aos-duration="1000" style={display}>
      <h1 className='fw-bold text-white mt-4' >Hello! </h1> 
      <h3 className='text-center text-white fw-bold mt-3'>Welcome to MyFitness World!</h3>
      <p style={{fontSize:"20px"}} className='mt-4 col-md-6 container text-center text-white'>Start your journey towards achieving your goals today. Use easy-to-use forms to set your targets and track your progress. Remember, every step you take brings you closer to success. Let's turn your aspirations into accomplishments together! </p>
    </div>
    </div>
  )
}

export default Welcome
