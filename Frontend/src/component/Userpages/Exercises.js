import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserNavbar from './UserNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Exercise.css'



function Exercises() {
   const [exercisedata, setExercisedata] = useState([]);
   const [searchQuery, setSearchQuery] = useState('');


   useEffect(() => {
      axios.get('https://65a8f1e1219bfa371867fdbf.mockapi.io/exercises')
         .then((response) => {
            setExercisedata(response.data);
         })
         .catch((error) => {
            console.log('Error:', error);
         });
   }, []);

   const color = {
      background: "linear-gradient(0deg, rgba(30,203,223,1) 8%, rgba(72,45,253,1) 100%)",

   }




   const searchHandle = (e) => {
      setSearchQuery(e.target.value);
   };

   const filteredExercises = exercisedata.filter((exercise) => {
      return exercise.type && exercise.type.toLowerCase().includes(searchQuery.toLowerCase());
   });
   


   return (

      <div style={color}>
         <div  >
            <UserNavbar />
            <div className="container mt-5">
               <h1 className='mb-5 text-center text-white'><b>
                  <img style={{ height: "45px", marginRight: "10px" }} src="https://media.istockphoto.com/id/1225549108/vector/run-sport-exercise-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=RKFqwoj4U4mw076yakzLoxFxz5MLm1gQI_mU4RVpzp4=" />Exercise List</b></h1>
               <div className='my-5'>
                  <form>
                     <input type="text" className='form-control' placeholder="Search Exercies"
                        onChange={searchHandle} value={searchQuery} /></form></div>
               <div className="row">
                  {filteredExercises.map((exercisedata) => (
                     <div className='col-md-3 mb-3 ' key={exercisedata.id}>
                        <div className='card  h-100'>
                           <img src={exercisedata.gif} className='card-img-top' alt={exercisedata.name} style={{ height: '200px' }} />
                           <div className='card-body bg-secondary text-white'>
                              <h3 className='card-title'>{exercisedata.name}</h3>
                              <p className='card-text'>Reps: {exercisedata.reps}</p>
                              <p className='card-text'>Type: {exercisedata.type}</p>

                              <Link to={`/${exercisedata.id}`} className="btn btn-primary">Full Details</Link>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Exercises;
