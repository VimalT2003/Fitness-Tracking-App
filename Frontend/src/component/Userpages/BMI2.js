import React, {useState} from 'react'
import './BMI.css'
import UserNavbar from './UserNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleBolt, faPerson, faWeightScale } from '@fortawesome/free-solid-svg-icons';
import HeightIcon from '@mui/icons-material/Height';

function BMI2() {

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [bmiStatus, setBmiStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const calculateBmi = () => {
        const isValidHeight = /^\d+$/.test(height);
        const isValidWeight = /^\d+$/.test(weight);
        if (isValidHeight && isValidWeight) {
            const heightInMeters = height / 100;
            const bmiValue = weight / (heightInMeters * heightInMeters);
            setBmi(bmiValue.toFixed(2));
            if (bmiValue < 18.5) {
                setBmiStatus("Underweight");
            }
            else if (bmiValue >= 18.5 && bmiValue < 24.9) {
                setBmiStatus("Normal Weight");
            }
            else if (bmiValue >= 25 && bmiValue < 29.9) {
                setBmiStatus("OverWeight");
            }
            else {
                setBmiStatus("Obese");
            }
            setErrorMessage("")

        }
        else {
            setBmi(null);
            setBmiStatus("")
            setErrorMessage("Please enter valid numeric values for height and weight");
        }
    }

    const clearAll = () => {
        setBmi(null);
        setHeight("");
        setWeight("");
        setBmiStatus("");
    }

    const color={
        background: "linear-gradient(0deg, rgba(30,203,223,1) 8%, rgba(72,45,253,1) 100%)", 
    }
  return (
    <div>
        <UserNavbar/>
    <div style={color}>
    <div className='container '>
        <div className='row g-0' style={{display:"flex",justifyContent:"center", alignItems:"center",height:"100vh",marginTop:""}}>
            <div className="col-md-6  text-center mb-2 mt-2 ">
                <img src="https://www.myheart.org.sg/wp-content/uploads/2021/12/bmi_01.png" className='img-fluid' />
            </div >
            <div className='col-md-6 bg-light p-3'>
                    <div className='data'>
                    <h1 className='text-center'><FontAwesomeIcon icon={ faHeartCircleBolt} /> BMI Calculator</h1>
                    {errorMessage && <p className='error text-center'>{errorMessage}</p>}
                    <div className='input-container'>
                        <label htmlfor="height"><FontAwesomeIcon icon={ faPerson}/> <b>Height (cm) :</b></label>
                        <input type="text" value={height} id="height" onChange={(e) => setHeight(e.target.value)} />
                    </div>
                    <div className='input-container'>
                        <label htmlfor="weight"><FontAwesomeIcon icon={ faWeightScale}/>  <b>Weight (kg) :</b></label>
                        <input type="text" value={weight} id="weight" onChange={(e) => setWeight(e.target.value)} />
                    </div>
                    <button onClick={calculateBmi} className='rounded-1'>Calculate BMI</button>
                    <button onClick={clearAll} className='ms-3 rounded-1'>Clear</button>
                    {bmi !== null && (
                        <div className='result'>
                            <p>Your BMI is {bmi}</p>
                            <p>Status : {bmiStatus}</p>
                        </div>
                    )}
                    </div>
            </div>
        </div>
        </div>
       </div>
       </div>
  )
}

export default BMI2
{/* <FontAwesomeIcon icon={faHeartCircleCheck} />  */}