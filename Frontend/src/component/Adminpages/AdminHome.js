import React from 'react'
import AdminNav from './AdminNav'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

function AdminHome() {
  const body={
    position:"absolute",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)"
  }

  const font={
    fontWeight:"700"
  }

  const color = {
    background: "linear-gradient(0deg, rgba(30,203,223,1) 8%, rgba(72,45,253,1) 100%)",
    height:"100vh",
    weight:"100vw"

 }
  return (
    <div >
      <AdminNav/>
      <div style={color}>
      <div style={body}>
        <img src="https://hfcsbhopal.edu.in/onlineexam/examimage/h.png" alt=""/>
        <h1 className='bg-dark text-white p-5 w-100 text-center mt-4' style={font}>Welcome Admin<EmojiPeopleIcon style={{fontSize:"50px"}}/></h1>
        
       
       
        </div>
      </div>
    </div>
  )
}

export default AdminHome
