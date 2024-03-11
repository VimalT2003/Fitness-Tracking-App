import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell} from '@fortawesome/free-solid-svg-icons';
import HomeIcon from '@mui/icons-material/Home';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import ForumIcon from '@mui/icons-material/Forum';
import LogoutIcon from '@mui/icons-material/Logout';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';


const UserNavbar = () => {

   

  const logOut=()=>{
    window.localStorage.clear();
    window.location.href="/"
  }

  return (
    <div>

        <Navbar expand="lg" variant={'dark'} bg="primary" className="py-3">
      <Container fluid><Navbar.Brand href="#" id="brand"><FontAwesomeIcon icon={faDumbbell} className='text-white me-2' style={{fontSize:"23px"}} /><span className="px-1" style={{color:'white',backgroundColor:'black',fontWeight:'bold',letterSpacing:'3px'}}>MY</span><span className='px-2' style={{fontWeight:'bold',background:'white',color:'black',letterSpacing:'3px'}}>FITNESS</span></Navbar.Brand>
      
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Nav.Link href="userhome"><strong className='text-white'><HomeIcon/>Home</strong></Nav.Link>
            <Nav.Link href="exercises"><strong className='text-white'><SportsGymnasticsIcon/>Exercises</strong></Nav.Link>
            <Nav.Link href="goallog"><strong className='text-white'><AdsClickIcon/>GoalLogs</strong></Nav.Link>
            <Nav.Link href="workoutlog"><strong className='text-white'><ElectricBoltIcon/>WorkoutLogs</strong></Nav.Link>
            <Nav.Link href="/bmi2"><strong className='text-white'><HealthAndSafetyIcon/>BMI Calculator</strong></Nav.Link>
            {/* <Nav.Link href="/profile"><strong className='text-white'>Profile</strong></Nav.Link> */}
            <Nav.Link href="/feedbackform"><strong className='text-white'><ForumIcon/>Feedback Form</strong></Nav.Link>
          </Nav>
          <Button variant="outline-light" onClick={logOut}><strong>LOGOUT <LogoutIcon/></strong></Button>{' '}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default UserNavbar
