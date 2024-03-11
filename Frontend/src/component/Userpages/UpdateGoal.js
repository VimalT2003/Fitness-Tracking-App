import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { faCircleCheck, faBullseye, faBarsStaggered, faListCheck, faSignal, faBroom, faPenToSquare, faBackward} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2'
import Form from 'react-bootstrap/Form';

function UpdateGoal() {
  const { id } = useParams();
  const [values, setValues] = useState({
        goalType:"",
        target:"",
        progress:"",
        goalDeadline:"",
        currentstatus:""
  });
  useEffect(() => {
    axios.get(`http://localhost:3001/api/v1/goals/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => {
        // console.log(res.data, "userdetails");
        setValues(res.data.data);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, [id]);


  const navigate = useNavigate();

  const handleData = (e) => {
    const { name, value } = e.target;
    setValues(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/api/v1/goals/${id}`,values, {
        headers:{
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    })
      .then(() => {
        console.log('Data updated successfully');
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Data Updated Successfully"
        });  
        navigate('/goalhistory');
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });
  };

  const body={
    height:'100vh',
    width:'100vw',
    display:'flex',
    justifyContent:"center",
    alignItems:'center',
    background: "linear-gradient(135deg, #000000 0%, #434343 100%)",
    paddingTop:"50px"
}

const clearAll = () =>{
    setValues("")
   }

   const back=useNavigate();


  return (
    <div>
     <div className='row' style={body}>
<form className='shadow-lg p-5 mb-5  rounded col-md-6 ' style={{marginTop:"30px"}} onSubmit={handleSubmit}>
    <h2 className='text-center ' style={{color:"white"}}><FontAwesomeIcon icon={faPenToSquare}/> <b>Update Goal</b></h2>
       <div className="mb-3">
      <label className="form-label" style={{color:"white"}}><FontAwesomeIcon icon={faListCheck}/> <b>Goal Type</b></label>
      <Form.Select aria-label="Default select example" name="goalType" value={values.goalType} onChange={handleData}>
                            <option value="Weight Loss">Weight Loss</option>
                            <option value="Muscle Gain">Muscle Gain</option>
                            <option value="Running Distance">Running Distance</option>
                        </Form.Select>
       </div>
       <div className="mb-3">
       <label  className="form-label" style={{color:"white"}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"></path></svg> <b>Target (in numbers)</b></label>
      <input type="text" placeholder='Eg :- target weigh (70), target distance(2)' className="form-control" value={values.target}  name="target" onChange={handleData}  required/>
      </div>
      <div className="mb-3">
      <label  className="form-label" style={{color:"white"}}> 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C10.3431 18 8.84311 17.3284 7.75732 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z"></path></svg> <b>Progress</b></label>
      <input type="text" placeholder='Eg:- current Progress towards the goal in number' className="form-control" value={values.progress}  name="progress" onChange={handleData} aria-describedby="emailHelp" required/>
       </div>
       <div className="mb-3">
       <label  className="form-label" style={{color:"white"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6 4H4V2H20V4H18V6C18 7.61543 17.1838 8.91468 16.1561 9.97667C15.4532 10.703 14.598 11.372 13.7309 12C14.598 12.628 15.4532 13.297 16.1561 14.0233C17.1838 15.0853 18 16.3846 18 18V20H20V22H4V20H6V18C6 16.3846 6.81616 15.0853 7.8439 14.0233C8.54682 13.297 9.40202 12.628 10.2691 12C9.40202 11.372 8.54682 10.703 7.8439 9.97667C6.81616 8.91468 6 7.61543 6 6V4ZM8 4V6C8 6.68514 8.26026 7.33499 8.77131 8H15.2287C15.7397 7.33499 16 6.68514 16 6V4H8ZM12 13.2219C10.9548 13.9602 10.008 14.663 9.2811 15.4142C9.09008 15.6116 8.92007 15.8064 8.77131 16H15.2287C15.0799 15.8064 14.9099 15.6116 14.7189 15.4142C13.992 14.663 13.0452 13.9602 12 13.2219Z"></path></svg> <b>Goal Deadline</b></label>
      <input type="datetime" placeholder='Date format should be Year/Month/Date' className="form-control"  name="goalDeadline" onChange={handleData} value={values.goalDeadline}  required/>
      </div>
      <div className="mb-3">
      <label  className="form-label" style={{color:"white"}}><b><FontAwesomeIcon icon={faSignal}/> Current Status</b></label>
      <Form.Select aria-label="Default select example" name="currentstatus" value={values.currentstatus} onChange={handleData} required>
                            <option value="Completed">Completed</option>
                            <option value="Pending">Pending</option>
                        </Form.Select>
      </div>
        <button type="submit" className="btn btn-success btn-md px-3"><FontAwesomeIcon icon={faCircleCheck}/> <b>Submit</b></button>
        <button type="reset" className="btn text-white ms-2 px-3" style={{background:"red"}} onClick={clearAll}><FontAwesomeIcon icon={faBroom}/> <b>Clear</b></button>
        <button type="button" onClick={()=> back(-1) } className="btn btn-light ms-2 btn-md px-3"><FontAwesomeIcon icon={faBackward}/> <b>Back</b></button>
         </form>
       </div>
</div>
  );
}

export default UpdateGoal;
