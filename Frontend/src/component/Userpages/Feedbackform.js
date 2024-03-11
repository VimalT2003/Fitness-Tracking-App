import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import UserNavbar from './UserNavbar';
import Swal from 'sweetalert2'



function Exercisesadd() {
  
  let table =useNavigate()
    const [feedbackdata, setFeedbackdata] = useState({
        name: "",
        email: "",
        feedback: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFeedbackdata(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://65da161bbcc50200fcdc8f05.mockapi.io/feedback_form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(feedbackdata)
        })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your feedback has been sended",
                    showConfirmButton: false,
                    timer: 1500
                  });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!, try again",
                  });
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
        height:"90vh",
        flexDirection:"column",
        width:"100vw", 
        backgroundImage:"url('https://img.freepik.com/free-photo/world-smile-day-emojis-arrangement_23-2149024492.jpg')" ,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        
        fontFamily:"'Helvetica Neue', Helvetica,Arial,sans-serif"     
    }

    return (
        <div>
            <UserNavbar/>
           
        <div style={body}>
            <h1 className='mx-auto mb-4'>Please Share your FeedBack Here</h1>
            <Form onSubmit={handleSubmit} className='w-75 mx-auto'>
                <Form.Group className="mb-3" controlId="ProductsName">
                    <Form.Label><b style={{fontSize:"20px"}}>Your Name</b></Form.Label>
                    <Form.Control type="text" placeholder="" value={feedbackdata.name} name="name" onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Productsimage">
                    <Form.Label><b style={{fontSize:"20px"}}>Email Id</b></Form.Label>
                    <Form.Control type="text" placeholder="" value={feedbackdata.email} name="email" onChange={handleChange} required/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="ProductDescription">
                    <Form.Label><b style={{fontSize:"20px"}}> Feedback</b></Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="" value={feedbackdata.feedback} name="feedback" onChange={handleChange} required/>
                </Form.Group>
                <Button variant="primary" type={"submit"} className='px-3'><b>Submit</b></Button>
                </Form>
        </div>
        </div>
    );
}

export default Exercisesadd
