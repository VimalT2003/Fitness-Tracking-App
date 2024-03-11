import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import  {useNavigate } from 'react-router-dom'; 
import Table from 'react-bootstrap/Table';
import AdminNav from './AdminNav';
import TextsmsIcon from '@mui/icons-material/Textsms';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'


function Feedbacktable() {
   const [feedbackdata, setFeedbackdata] = useState([]);

   useEffect(() => {
      axios.get('https://65da161bbcc50200fcdc8f05.mockapi.io/feedback_form')
         .then((response) => {
            setFeedbackdata(response.data);
         })
         .catch((error) => {
            console.log('Error:', error);
         });
   }, []); 

function handleDelete(id){
    axios.delete(`https://65da161bbcc50200fcdc8f05.mockapi.io/feedback_form/${id}`)
    .then((response) => {
        if(response.status===200){
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
            title: "Feedback Deleted successfully"
          });
        }
        else{
            console.error("Error:",response.statusText)
        }
     })

     .catch((error) => {
        console.log('Error:', error);
     }); 

}

const color = {
   background: "linear-gradient(0deg, rgba(30,203,223,1) 8%, rgba(72,45,253,1) 100%)",
   height:"100vh",
   weight:"100vw"
}


//  const update = useNavigate()
// function handleUpdate(id){
// update(`${id}`)
// }

   return (
      <div>
        <AdminNav/>
        <div style={color}>
      <h1 className='text-center mb-4 pt-5 text-white'> <b><TextsmsIcon style={{fontSize:"50px"}}/> Users Feedback's </b></h1>
    <Table striped bordered hover variant="primary" className='mt-5'>
      <thead>
        <tr>
          <th>S.No</th>
          <th> UserName</th>
          <th>Email</th>
          <th>Feedback</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody  className='bg-light'>
       {feedbackdata.map((feedbackdata,index)=>(
        <tr key={feedbackdata.id}>
        <td>{index+1}</td>
        <td>{feedbackdata.name}</td>
        <td>{feedbackdata.email}</td>
        <td>{feedbackdata.feedback}</td>
         <td>
         <Button className='btn btn-danger' onClick={()=>handleDelete(feedbackdata.id)}><FontAwesomeIcon icon={faTrash}/></Button>
         </td>
        </tr>

   ))}
      </tbody>
    </Table>
    </div>
    </div>
  );
}


export default Feedbacktable;
