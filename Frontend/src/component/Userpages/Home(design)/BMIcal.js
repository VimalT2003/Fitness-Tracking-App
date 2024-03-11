import React from 'react'
import BMI from './assets/BMI.png';

function BMIcal() {
    
  return (
    <div className='container' >
        <div className='row'  style={{marginTop:"50px"}}>
            <div className='col-md-6 order-sm-1 order-md-2' data-aos="fade-up-left" data-aos-duration="2000">
                <img src={BMI} className='w-100 img-fluid' style={{height:"380px"}}/>
            </div>
            <div className='col-md-6 mt-3 order-sm-2 order-md-1' data-aos="fade-right"   data-aos-duration="2000">
                <h2 className='fw-bold text-decoration-underline'>4. BMI Calculator Page</h2>
                <ul>
                <li className='ms-3 mt-3'><h3>BMI?</h3></li>
                <p className='ms-5' style={{fontSize:"18px"}}>A BMI (Body Mass Index) calculator is a tool used to estimate an individual's body fat
                     based on their weight and height. It provides a numerical value that helps 
                     categorize individuals into different weight status categories, such as underweight, 
                     normal weight, overweight, or obese.</p>
                     <li><h3>How to use?</h3></li>
                <p className='ms-5' style={{fontSize:"18px"}}>To use the BMI calculator, simply enter your weight in kilograms and your height 
                    in meters. The calculator will then compute your BMI and display your weight status 
                    category based on the calculated value.</p>
                    </ul>
            </div>
        </div>
       
    </div>
  )
}

export default BMIcal
