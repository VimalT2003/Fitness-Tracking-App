import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import  {useNavigate } from 'react-router-dom'; 
import Table from 'react-bootstrap/Table';
import {faClockRotateLeft,faTrash, faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'


function WorkoutHistory(id) {
  const back=useNavigate()
   const [workoutdata, setWorkoutData] = useState([]);
   useEffect(() => {
    axios.get(`http://localhost:3001/api/v1/workout`,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then((res) => {
      console.log(res.data, "userdetails");
      setWorkoutData(res.data.data);
    })
    .catch((error) => {
      console.error('Error fetching user details:', error);
    });
}, [id]);

function handleDelete(id){
    axios.delete(`http://localhost:3001/api/v1/workout/${id}`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then((data) => {
        if(data.status===200){
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
            title: "Workout Deleted successfully"
          });
            setWorkoutData(workoutdata.filter(workout => workout._id !== id));
            const deletedGoalIds = JSON.parse(localStorage.getItem('deletedGoalIds')) || [];
            localStorage.setItem('deletedGoalIds', JSON.stringify([...deletedGoalIds, id]));
        }
        else{
            console.error("Error:",data.statusText)
        }
     })

     .catch((error) => {
        console.log('Error:', error);
     }); 

}

 const update = useNavigate()
function handleUpdate(id){
update(`/updateworkout/${id}`)
}

   return (
      <div className='w-100'>
        <div className='bg-primary w-100'>
      <h1 className='text-center mb-4 mt-3 p-3 text-white' style={{fontSize: "28px"}}><FontAwesomeIcon icon={faClockRotateLeft}/> <b>Workout History</b> </h1>
      </div>
    <Table striped bordered hover variant="primary" responsive>
      <thead>
        <tr>
          <th>S.No</th>
          <th>workoutType</th>
          <th>Duration</th>
          <th>intensity</th>
          <th>workoutDate</th>
          <th>Delete/Update</th>
        </tr>
      </thead>
      <tbody  className='bg-light'>
       {workoutdata.map((workout,index)=>{
         return(
        <tr key={workout._id}>
        <td>{index+1}</td>
        <td>{workout.workoutType}</td>
        <td>{workout.Duration}</td>
        <td>{workout.intensity}</td>
        <td>{workout.workoutDate}</td>
        
         <td>
         <Button className='btn btn-danger' onClick={()=>handleDelete(workout._id)}><FontAwesomeIcon icon={faTrash}/></Button>
         <Button className='btn btn-primary ms-2' onClick={()=>handleUpdate(workout._id)}><FontAwesomeIcon icon={faPenToSquare}/>Edit</Button>
         </td>
         
        </tr>
         )
       })}
      </tbody>
    </Table>
    <button className='btn btn-primary px-4' style={{position:"absolute",right:"3%",fontSize:"20px"}} onClick={()=>back('/workoutlog')}>Go Back</button>
    </div>
  );
}


export default WorkoutHistory;
