import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import AdminNav from './AdminNav';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Swal from 'sweetalert2'
import {faBroom, faBarsStaggered, faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Exercisesadd() {
  
  let table =useNavigate()
    const [exercisedata, setExercisedata] = useState({
        name: "",
        gif: "",
        description: "",
        focusArea: "",
        reps: "",
        type:""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setExercisedata(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://65a8f1e1219bfa371867fdbf.mockapi.io/exercises', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(exercisedata)
        })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Exercise Added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            } else {
                alert("Exercise not added");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    };

    const body={
        display:"flex",
        justifyContent:"center",
        AlignItems:"center",
        height:"100vh",
        flexDirection:"column",
        width:"100vw", 
        backgroundImage:"url('https://c1.wallpaperflare.com/preview/234/625/249/various-fit-fitness-gym.jpg')" ,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        color:"white" ,
        fontFamily:"'Helvetica Neue', Helvetica,Arial,sans-serif"     
    }

    const clearAll = () =>{
        setExercisedata("")
    }

    return (
        <div>
            <AdminNav/>
        <div style={body}>
            <h1 className='mx-auto'><AddCircleIcon style={{fontSize:"40px"}}/> <b>Add Exercise </b></h1>
            <Form onSubmit={handleSubmit} className='w-75 mx-auto'>
                <Form.Group className="mb-3" controlId="ProductsName">
                    <Form.Label className='text-white'>Name of Exercise</Form.Label>
                    <Form.Control type="text" placeholder="Name" value={exercisedata.name} name="name" onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Productsimage">
                    <Form.Label className='text-white'>Gif of Exercise</Form.Label>
                    <Form.Control type="text" placeholder="Gif link" value={exercisedata.gif} name="gif" onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="ProductsPrice">
                    <Form.Label className='text-white'>Reps</Form.Label>
                    <Form.Control type="text" placeholder="Reps" value={exercisedata.reps} name="reps" onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="ProductsPrice">
                    <Form.Label className='text-white'>Type</Form.Label>
                    <Form.Control type="text" placeholder="Type eg:- warmup, leg, chest" value={exercisedata.type} name="type" onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="ProductsQuantity">
                    <Form.Label className='text-white' >Focus Areas</Form.Label>
                    <Form.Control type="text" placeholder="Focus Areas" value={exercisedata.focusArea} name="focusArea" onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="ProductDescription">
                    <Form.Label className='text-white'>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="description" value={exercisedata.description} name="description" onChange={handleChange} required/>
                </Form.Group>
                <Button variant="success" type={"submit"}><FontAwesomeIcon icon={faCircleCheck} /> <b>Submit</b></Button>
                <Button variant="" type= {"button"} onClick={()=>{return table('/exercisetable')}} style={{background:"#002D62"}} className='ms-3 text-white'><FontAwesomeIcon icon={faBarsStaggered} /> <b>Records</b></Button>
                <Button variant="warning" type= {"reset"} onClick={clearAll} className='ms-3 text-white' style={{backgroundColor:"red",border:"none"}}><FontAwesomeIcon icon={faBroom} /><b>Clear</b></Button>
            </Form>
        </div>
        </div>
    );
}

export default Exercisesadd
