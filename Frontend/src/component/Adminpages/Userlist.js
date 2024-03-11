import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import AdminNav from './AdminNav';
import { faTrash, faPenToSquare, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'


function Userlist() {
  const [userdata, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userdetails");
        setData(data.data)
      })
  }, []);

  function handleDelete(id) {
    axios.delete(`http://localhost:3001/api/v1/users/${id}`, {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("accessToken")}`
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
            title: "User Deleted successfully"
          });
          // Remove the deleted goal from the state

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
    update(`/updateuser/${id}`);
  }
  const color = {
    background: "linear-gradient(0deg, rgba(30,203,223,1) 8%, rgba(72,45,253,1) 100%)",
    height: "100vh",
    weight: "100vw"
  }

  return (
    <div>
      <AdminNav />
      <div style={color}>
        <h1 className='text-center mb-4 text-white ' style={{ paddingTop: "40px" }}><FontAwesomeIcon icon={faUsers} /> <b>User's List</b> </h1>
        <Table striped bordered hover variant="primary" className='mt-5'>
          <thead>
            <tr>
              <th>S.No</th>
              <th> Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className='bg-light'>
            {userdata.map((data, index) => {
              return (
                <tr key={data._id}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>
                    <Button className='btn btn-danger' onClick={() => handleDelete(data._id)}><FontAwesomeIcon icon={faTrash} /></Button>
                  </td>

                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}


export default Userlist;
