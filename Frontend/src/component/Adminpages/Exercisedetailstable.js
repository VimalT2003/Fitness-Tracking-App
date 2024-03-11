import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import AdminNav from './AdminNav';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Exercisedetailstable() {
   const [data, setData] = useState([]);

   useEffect(() => {
      axios.get('https://65a8f1e1219bfa371867fdbf.mockapi.io/exercises')
         .then((response) => {
            setData(response.data);
         })
         .catch((error) => {
            console.log('Error:', error);
         });
   }, []);

   function handleDelete(id) {
      axios.delete(`https://65a8f1e1219bfa371867fdbf.mockapi.io/exercises/${id}`)
         .then((response) => {
            if (response.status === 200) {
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
                  title: "Exercise Deleted successfully"
               });
            }
            else {
               console.error("Error:", response.statusText)
            }
         })

         .catch((error) => {
            console.log('Error:', error);
         });

   }

   const update = useNavigate()
   function handleUpdate(id) {
      update(`/updateexercise/${id}`)
   }

   return (
      <div>
         <AdminNav />
         <h1 className='text-center mt-5 mb-4'> <b>Exercise Data</b> </h1>
         <Table striped bordered hover variant="light" responsive>
            <thead>
               <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Reps</th>
                  <th>Images</th>
                  <th>Focus Area</th>
                  <th>Descriptions</th>
                  <th>Actions</th>
               </tr>
            </thead>
            <tbody>
               {data.map((data, index) => (
                  <tr key={data.id}>
                     <td>{index + 1}</td>
                     <td>{data.name}</td>
                     <td>{data.type}</td>
                     <td>{data.reps}</td>
                     <td>{data.gif}</td>
                     <td>{data.focusArea}</td>
                     <td>{data.description}</td>
                     <td>
                        <Button className='btn btn-danger w-100' onClick={() => handleDelete(data.id)}><FontAwesomeIcon icon={faTrash} />Delete</Button>
                        <Button className='btn btn-primary mt-1  w-100' onClick={() => handleUpdate(data.id)}><FontAwesomeIcon icon={faPenToSquare} /> Edit </Button>

                     </td>
                  </tr>

               ))}
            </tbody>
         </Table>
      </div>
   );
}


export default Exercisedetailstable;
