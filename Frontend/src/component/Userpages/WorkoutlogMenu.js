import React from 'react';
// import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';
import UserNavbar from './UserNavbar';
function WorkoutlogMenu() {
    const [workoutData,setWorkoutData] = useState({
        workouttype:"",
        duration:"",
        intensity:"",
        date:""
   })
 
   const handleData=(e)=>{
       const {name,value}=e.target
       setWorkoutData((pre)=>({
         ...pre, [name] : value
       }))
   }
 
   const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(workoutData)
   }
 
  
   const body={
     height:'90vh',
     width:'100vw',
     display:'flex',
     justifyContent:"center",
     alignItems:'center',
     fontFamily:"'Helvetica Neue', Helvetica, Arial, sans-serif",
 }

 // Goal form design 

 const [goalData,setGoalData] = useState({
    goaltype:"",
    target:"",
    progress:"",
    deadline:"",
    status:""
})

const handleGoal=(e)=>{
   const {name,value}=e.target
   setGoalData((pre)=>({
     ...pre, [name] : value
   }))
}

const handleGoalSubmit=(e)=>{
 e.preventDefault();
 console.log(goalData)
}

const goalBody={
    height:'100vh',
    width:'100vw',
    display:'flex',
    justifyContent:"center",
    alignItems:'center',
    fontFamily:"'Helvetica Neue', Helvetica, Arial, sans-serif",
}
  return (
    <div>
      <UserNavbar/>
    <div>
       <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3 mt-5"
    >
      <Tab eventKey="login" title="WorkoutLog Form">
      <div className='container' style={body}>
    <form className='shadow-md p-5 mb-5 bg-body-secondary rounded w-75' onSubmit={handleGoalSubmit}>
        <h2 className='text-center'>Workout Log Form</h2>
           <div className="mb-3">
          <label className="form-label "><b>Workout Type</b></label>
          <input type="text" placeholder='Eg :- running, weightlifting, yoga' className="form-control"  name="workouttype" onChange={handleData} aria-describedby="emailHelp" required/>
           </div>
           <div className="mb-3">
           <label  className="form-label"><b>Duration</b></label>
          <input type="text" placeholder='In minutes' className="form-control"  name="duration" onChange={handleData}  required/>
          </div>
          <div className="mb-3">
          <label  className="form-label"><b>Intensity</b></label>
          <input type="text" placeholder='Eg:- Low, Medium, High' className="form-control"  name="intensity" onChange={handleData} aria-describedby="emailHelp" required/>
           </div>
           <div className="mb-3">
           <label  className="form-label"><b>Date</b></label>
          <input type="date" placeholder='Date' className="form-control"  name="date" onChange={handleData}  required/>
          </div>
            <button type="submit" className="btn btn-primary"><b>Submit</b></button>
             </form>
           </div>
      </Tab>
      <Tab eventKey="profile" title="Profile">
      <div className='container' style={goalBody}>
    <form className='shadow-md p-5 mb-5 bg-body-secondary rounded w-75' onSubmit={handleSubmit}>
        <h2 className='text-center'>Goal Creating Form</h2>
           <div className="mb-3">
          <label className="form-label"><b>Goal Type</b></label>
          <input type="text" placeholder='Eg :- weight loss, muscle gain, running distance' className="form-control"  name="goaltype" onChange={handleGoal} aria-describedby="emailHelp" required/>
           </div>
           <div className="mb-3">
           <label  className="form-label"><b>Target</b></label>
          <input type="text" placeholder='Eg :- target weight, target distance' className="form-control"  name="target" onChange={handleGoal}  required/>
          </div>
          <div className="mb-3">
          <label  className="form-label"><b>Progress</b></label>
          <input type="text" placeholder='Eg:- current Progress towards the goal in number' className="form-control"  name="progress" onChange={handleGoal} aria-describedby="emailHelp" required/>
           </div>
           <div className="mb-3">
           <label  className="form-label"><b>Goal Deadline</b></label>
          <input type="date" placeholder='Date' className="form-control"  name="deadline" onChange={handleGoal}  required/>
          </div>
          <div className="mb-3">
          <label  className="form-label"><b>Current Status</b></label>
           <textarea className="form-control" id="exampleFormControlTextarea1" name="status" rows="3" onChange={handleGoal}></textarea>
          </div>
            <button type="submit" className="btn btn-primary">Submit</button>
             </form>
           </div>
      </Tab>
    </Tabs>
    </div>
    </div>
  )
}

export default WorkoutlogMenu
