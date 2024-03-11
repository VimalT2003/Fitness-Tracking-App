import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faDumbbell, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css'

function Footer() {
  return (
    <div className='bg-dark text-white p-5'>
    <div className='container'>
        <div className='row '>
            <div className='col-md-6 '  data-aos="fade-right"  data-aos-duration="2000">
            <h4><FontAwesomeIcon icon={faDumbbell} className='text-white me-2' style={{fontSize:"23px"}} /><span className="px-1" style={{color:'white',backgroundColor:'black',fontWeight:'bold',letterSpacing:'3px'}}>MY</span><span className='px-2' 
            style={{fontWeight:'bold',background:'white',color:'black',letterSpacing:'3px'}}>FITNESS</span></h4>
                <h3 className='mt-5'>About MyFitness</h3>
                <p>Welcome to MyFitness, your ultimate destination for all things related to health, fitness, and well-being. At MyFitness, we believe that everyone deserves access to the resources and knowledge necessary to lead a healthy and active lifestyle.</p>
            </div> 
            <div className='col-md-6' data-aos="fade-left"  data-aos-duration="2000">
                <div className='ms-md-5 mt-sm-4'>
                <h4><FontAwesomeIcon icon={faLocationDot} /> Nagercoil, Tamil Nadu</h4>
                <h4 className='mt-4'><FontAwesomeIcon icon={faPhone} /> +1 555 123456</h4>
                <div className='mt-4 '>
                <a href="https://www.instagram.com/"> <InstagramIcon className='hover' style={{fontSize:"38px",background:"white",color:"black",borderRadius:"50%",padding:"5px"}}/></a>
                 <a href="https://www.facebook.com/" > <FacebookIcon className='ms-4 hover' style={{fontSize:"38px",background:"white",color:"black",borderRadius:"50%",padding:"5px"}}/></a>
                 <a href="https://twitter.com/?lang=en" > <TwitterIcon className='ms-4 hover' style={{fontSize:"38px",background:"white",color:"black",borderRadius:"50%",padding:"5px"}}/></a>
                 <a href="https://www.youtube.com/" > <YouTubeIcon className='ms-4 hover' style={{fontSize:"38px",background:"white",color:"black",borderRadius:"50%",padding:"5px"}}/></a>
                 </div>
                </div>
              
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
