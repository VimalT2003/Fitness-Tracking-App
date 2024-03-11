import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { faBolt, faListCheck, faClock, faTurnUp, faBackward, faCalendarCheck, faCircleCheck, faBarsStaggered, faCircleArrowRight, faCircleArrowLeft, faPlugCircleBolt, faBroom, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2'
import Form from 'react-bootstrap/Form';

function UpdateWorkout() {
  const { id } = useParams();
  const [values2, setValues2] = useState({
    workoutType: "",
    Duration: "",
    intensity: "",
    workoutDate: ""
  });
  useEffect(() => {
    axios.get(`http://localhost:3001/api/v1/workout/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => {
        setValues2(res.data.data);

      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, [id]);


  const navigate = useNavigate();

  const handleData = (e) => {
    const { name, value } = e.target;
    setValues2(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/api/v1/workout/${id}`, values2, {
      headers: {
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
        navigate('/workouthistory');
      })
      .catch((error) => {
        console.error('Error updating data:', error);
        alert("Change the date format (2024-02-20T18:30:00.000Z) to (Year/Month/Day) eg:- 2024/02/21");
      });
  };

  const body = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    background: "linear-gradient(135deg, #000000 0%, #434343 100%)",
    paddingTop: "50px"
  }

  const clearAll = () => {
    setValues2("")
  }

  const back = useNavigate();


  return (
    <div>
      <div className='row' style={body}>
        <form className='shadow-lg p-5 mb-5  rounded col-md-6' style={{ marginTop: "30px" }} onSubmit={handleSubmit}>
          <h3 className='text-center text-white '><FontAwesomeIcon icon={faPenToSquare} /> <b>Update Workout</b></h3>
          <div className="mb-3 mt-4">
            <label className="form-label"><FontAwesomeIcon icon={faListCheck} style={{ color: "white" }} /><b style={{ color: "white" }}> Workout Type</b></label>
            <Form.Select aria-label="Default select example" name="workoutType" value={values2.workoutType} onChange={handleData} required>
              <option value="Running">Running</option>
              <option value="Weightlifting">Weightlifting</option>
              <option value="Yoga">Yoga</option>
            </Form.Select>
          </div>
          <div className="mb-3 text-primary">
            <label className="form-label" style={{ color: "white" }}><FontAwesomeIcon icon={faClock} /><b> Duration</b></label>
            <input type="text" placeholder='In Minutes' className="form-control" value={values2.Duration} name="Duration" onChange={handleData} required />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: "white" }}><FontAwesomeIcon icon={faTurnUp} /><b> Intensity</b></label>
            <Form.Select aria-label="Default select example" name="intensity" value={values2.intensity} onChange={handleData} required>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Form.Select>
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: "white" }}><FontAwesomeIcon icon={faCalendarCheck} /> <b>Date</b></label>
            <input type="datetime" placeholder='Date format Year/Month/Date' className="form-control" value={values2.workoutDate} name="workoutDate" onChange={handleData} required />
          </div>
          <button type="submit" className="btn btn-success px-3 mt-2"><FontAwesomeIcon icon={faCircleCheck} /> <b>Submit</b></button>
          <button type="reset" className="btn text-white ms-2 px-3 mt-2" style={{ background: "red" }} onClick={clearAll}><FontAwesomeIcon icon={faBroom} /> <b>clear</b></button>
          <button type="button" onClick={() => back(-1)} className="btn btn-light ms-2 mt-2 btn-md px-3"><FontAwesomeIcon icon={faBackward} /> <b>Back</b></button>
        </form>
      </div>
    </div>
  );
}

export default UpdateWorkout;
