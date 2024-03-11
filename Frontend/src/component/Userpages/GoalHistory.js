import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { faTrash ,faPenToSquare , faClockRotateLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'


function GoalHistory(id) {

  const back = useNavigate()
  const [goaldata, setGoalData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/api/v1/goals`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => {
        // console.log(res.data, "userdetails");
        setGoalData(res.data.data);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, [id]);


  function handleDelete(id) {
    axios.delete(`http://localhost:3001/api/v1/goals/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then((data) => {
        if (data.status === 200) {
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
            title: "Goal Deleted successfully"
          });
          // Remove the deleted goal from the state
          setGoalData(goaldata.filter(goal => goal._id !== id));
          const deletedGoalIds = JSON.parse(localStorage.getItem('deletedGoalIds')) || [];
          localStorage.setItem('deletedGoalIds', JSON.stringify([...deletedGoalIds, id]));
        } else {
          console.error("Error:", data.statusText);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  const update = useNavigate();

  function handleUpdate(id) {
    update(`/updategoal/${id}`);
  }

  return (
    <div className='w-100'>

      <h1 className='text-center mb-4 mt-3 bg-primary text-white p-3'  style={{fontSize: "28px"}}><b><FontAwesomeIcon icon={faClockRotateLeft}/> Goal history</b> </h1>
      <Table striped variant='primary' responsive >
        <thead>
          <tr>
            <th>S.No</th>
            <th> GoalType</th>
            <th>Target</th>
            <th>Progress</th>
            <th>GoalDeadline</th>
            <th>CurrentStatus</th>
            <th>Delete/Update</th>
          </tr>
        </thead>
        <tbody className='bg-light'>
  {Array.isArray(goaldata) && goaldata.map((goal, index) => {
    return (
      <tr key={goal._id}>
        <td>{index + 1}</td>
        <td>{goal.goalType}</td>
        <td>{goal.target}</td>
        <td>{goal.progress}</td>
        <td>{goal.goalDeadline}</td>
        <td>{goal.currentstatus}</td>
        <td>
          <Button className='btn btn-danger' onClick={() => handleDelete(goal._id)}><FontAwesomeIcon icon={faTrash}/></Button>
          <Button className='btn btn-primary ms-3' onClick={() => handleUpdate(goal._id)}><FontAwesomeIcon icon={faPenToSquare}/>Edit</Button>
        </td>
      </tr>
    );
  })}
</tbody>
      </Table>
      <button className='btn btn-primary px-4' style={{ position: "absolute", right: "3%", fontSize: "20px" }} onClick={() => back('/goallog')}>Go Back</button>
    </div>
  );
}


export default GoalHistory;

