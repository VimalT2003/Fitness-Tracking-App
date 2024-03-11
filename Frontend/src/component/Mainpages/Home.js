import React from 'react'
import MainNav from './MainNav'
import './Home.css'
import Feature from './Feature'
import { ContactUs } from './ContactUs'
import Footer from './Footer'

function Home() {
  const banner = {
    width: "100%",
    overflow: "hidden"
  }
  const color = {
    background: "#EBF7FF"
  }


  const margin = {
    marginTop: "150px"
  }

  const h1 = {
    fontWeight: "700"
  }

  return (
    <div className="" style={color}>
      <MainNav />
      <div style={banner}>
        <div>
          <img src="https://mapmy.uastatic.com/3f9066c4c9a186eb76704cf38178b252.webp" className='mt-3' style={{
            width: "100%",
            height: "700px"
          }} alt="" />
        </div>
        <div id="feature" style={margin}>
          <Feature />
        </div>
      </div>
      <div style={margin} id="contact">
        <ContactUs />
      </div>
      <div className='fot'>
        <Footer />
      </div>
    </div>

  )
}

export default Home
