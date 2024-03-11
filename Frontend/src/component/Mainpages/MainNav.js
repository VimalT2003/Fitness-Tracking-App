import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faDumbbell, faRightToBracket, faUserGear, faHouse, faCircleInfo, faAddressCard  } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import "./Mainnav.css";




const MainNav = () => {

    const login=useNavigate();
    const signup=useNavigate();

    const brand={
        border:"1px solid white",
        padding: "10px",
    }

  return (
    <div>

        <Navbar expand="lg" variant={'dark'} bg="primary" className="py-3 navbarfix">
      <Container fluid><Navbar.Brand href="#" id="brand"><FontAwesomeIcon icon={faDumbbell} className='text-white me-2' style={{fontSize:"23px"}} /><span className="px-1" style={{color:'white',backgroundColor:'black',fontWeight:'bold',letterSpacing:'3px'}}>MY</span><span className='px-2' style={{fontWeight:'bold',background:'white',color:'black',letterSpacing:'3px'}}>FITNESS</span></Navbar.Brand>
      
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0  "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/"><strong className='text-white nav-item'><FontAwesomeIcon icon={faHouse}/> Home</strong></Nav.Link>
            <Nav.Link href="#feature"><strong className='text-white nav-item'><FontAwesomeIcon icon={faUserGear}/> Features</strong></Nav.Link>
            {/* <Nav.Link href="#about"><strong className='text-white nav-item'><FontAwesomeIcon icon={faCircleInfo}/> About Us</strong></Nav.Link> */}
           
            <Nav.Link href="#contact"><strong className='text-white  nav-item'><FontAwesomeIcon icon={faAddressCard}/> Contact Us</strong></Nav.Link>
            
            
          </Nav>
          <Button variant="outline-light" onClick={()=>login('/loginform')}><strong>LOGIN </strong><FontAwesomeIcon icon={faRightToBracket}/></Button>{' '}
          {/* <Button variant="light" className='ms-3' onClick={()=>signup('/signupform')}> <strong>SIGN UP <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path></svg></strong></Button>{' '} */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}

export default MainNav
