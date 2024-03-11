import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ExercisesView() {
    const { id } = useParams();
    const [exercisedata, setExercisedata] = useState();
    const exercises=useNavigate();

    useEffect(() => {
        axios.get(`https://65a8f1e1219bfa371867fdbf.mockapi.io/exercises/${id}`)
            .then((response) => {
                console.log(response.data);
                setExercisedata(response.data);
            })
            .catch((error) => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    if (!exercisedata) {
        return <div>Loading...</div>;
    }

    // const margint={
    //     marginTop:"50px"
    // }

    const color = {
        background: "linear-gradient(0deg, rgba(30,203,223,1) 8%, rgba(72,45,253,1) 100%)",
  
     }

    const img={
        height:"400px",
    }
    const body={
        height:"100vh",
        width:"100vw",
        color:"white"
      }

    return (
        <div style={color}>
        <div style={body}>
        <div className="container" >
            <h1 style={{fontSize:"35px"}} className="text-center mb-5 pt-5">Exercise Details</h1>
            <div className="row mx-auto "  >
                <div className="col-md-6 mx-auto">
                    <img
                    style={img}
                        src={exercisedata.gif}
                        className="img-fluid"
                        alt={exercisedata.name}
                    />
                </div>
                <div className="col-md-6">
                    <h2 >{exercisedata.name}</h2>
                    <p className="mt-4" style={{fontSize:"20px"}}><b>Reps: </b>{exercisedata.reps}</p>
                    <p style={{fontSize:"20px"}}><b>Type:</b> {exercisedata.type}</p>
                    <p style={{fontSize:"20px"}}><b>Focus Areas:</b> {exercisedata.focusArea}</p>
                    <p style={{fontSize:"20px"}}><b>Description:</b> {exercisedata.description}</p>
                    <Button variant="dark" className="btn-md px-4" onClick={()=> exercises(-1)}  type="submit">
                        Go Back
                    </Button>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default ExercisesView;
