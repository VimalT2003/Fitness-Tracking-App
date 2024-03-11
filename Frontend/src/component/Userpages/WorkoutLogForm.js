
import { useState } from 'react';
import UserNavbar from './UserNavbar';
import { useNavigate } from 'react-router-dom';
import { faBolt, faListCheck ,faClock, faTurnUp, faCalendarCheck, faCircleCheck, faBarsStaggered, faCircleArrowRight, faCircleArrowLeft, faPlugCircleBolt, faBroom} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2'
import Form from 'react-bootstrap/Form';


function WorkoutLogForm() {

  const workouthistory=useNavigate();

  const [workoutData,setWorkoutData] = useState({
       workoutType:"",
       Duration:"",
       intensity:"",
       workoutDate: ""
  })
  const[clear,setClear]=useState('')

  const handleData=(e)=>{
      const {name,value}=e.target
      setWorkoutData((pre)=>({
        ...pre, [name] : value
      }))
  }

 
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/api/v1/workout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization : `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(workoutData)
    })
    .then(response => {
        if (response.ok) {
          Swal.fire({
            title: "Success!",
            text: "Workout created succesfully",
            icon: "success"
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Workout Not Created! fill all the details",
          });
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
};

 
  const body={
    height:'100vh',
    width:'100vw',
    display:'flex',
    justifyContent:"center",
    alignItems:'center',
    background: "linear-gradient(0deg, rgba(30,203,223,1) 8%, rgba(72,45,253,1) 100%)",
    backgroundSize:"cover",
    boxSizing:"border-box",
}

const clearAll = () =>{
 setWorkoutData("")
}
 
  return (
    <div>
      <UserNavbar/>
    <div className='row' style={body}>
    <form className='shadow-lg p-5 mb-5  rounded col-md-6' style={{marginTop:"30px"}} onSubmit={handleSubmit}>
        <h3 className='text-center text-white '><FontAwesomeIcon icon={faBolt}/> <b>Workout Log Form</b></h3>
           <div className="mb-3 mt-4">
          <label className="form-label"><FontAwesomeIcon icon={faListCheck} style={{color:"white"}}/><b style={{color:"white"}}> Workout Type</b></label>
          <Form.Select aria-label="Default select example" placeholder="Select your workout type" name="workoutType" value={workoutData.workoutType} onChange={handleData} required>
                           <option value="" >Select your workout type</option>
                            <option value="Running">Running</option>
                            <option value="Weightlifting">Weightlifting</option>
                            <option value="Yoga">Yoga</option>
                        </Form.Select>
           </div>
           <div className="mb-3 text-primary">
           <label  className="form-label" style={{color:"white"}}><FontAwesomeIcon icon={faClock}/><b> Duration</b></label>
          <input type="text" placeholder='In Minutes' className="form-control" value={workoutData.Duration} name="Duration" onChange={handleData}  required/>
          </div>
          <div className="mb-3">
          <label  className="form-label" style={{color:"white"}}><FontAwesomeIcon icon={faTurnUp}/><b> Intensity</b></label>
          <Form.Select aria-label="Default select example" name="intensity" value={workoutData.intensity} onChange={handleData} required>
                            <option value="">Select intensity level</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </Form.Select>
           </div>
           <div className="mb-3">
           <label  className="form-label" style={{color:"white"}}><FontAwesomeIcon icon={faCalendarCheck}/> <b>Date</b></label>
          <input type="date" placeholder='Date format Year/Month/Date' className="form-control" value={workoutData.workoutDate}  name="workoutDate" onChange={handleData}  required/>
          </div>
            <button type="submit" className="btn btn-success px-3 mt-2"><FontAwesomeIcon icon={faCircleCheck}/> <b>Submit</b></button>
            <button type="submit" className="btn text-white ms-2 px-3 mt-2" style={{background:"#002D62"}} onClick={()=>{workouthistory('/workouthistory')}}><FontAwesomeIcon icon={faBarsStaggered}/> <b>Records</b></button>
            <button type="reset" className="btn text-white ms-2 px-3 mt-2" style={{background:"red"}} onClick={clearAll}><FontAwesomeIcon icon={faBroom}/> <b>clear</b></button>
             </form>
           </div>
           </div>
  );
}

export default WorkoutLogForm;