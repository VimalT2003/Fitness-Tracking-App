import React, { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table';

function Profile() {
   const [userdata, setData] = useState([]);
   const [loggedInUserName, setLoggedInUserName] = useState("");

   useEffect(() => {
     // Fetch user data from API
     fetch("http://localhost:3001/api/v1/users", {
       method: "GET",
     })
     .then((res) => res.json())
     .then((data) => {
       setData(data.data);
     });

     // Retrieve logged-in user's name from local storage
     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
     if (loggedInUser) {
       setLoggedInUserName(loggedInUser.name);
     }
   }, []);

   

  
   

   return (
      <div>
        <h1 className='text-center mb-4 mt-3'> Users profile </h1>
        <p className="text-center">Logged in as: {loggedInUserName}</p>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody className='bg-light'>
            {userdata.map((data, index) => (
              <tr key={data._id}>
                <td>{index+1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
  );
}

export default Profile;
