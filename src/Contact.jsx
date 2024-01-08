import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './components/carousel.css';
import './styles/style.css'



function Contact() {
  return (
<>
<Navbar/>

<div class="card text-bg-dark contact">
<img src="./co.JPG" className="img-fluid" alt="..." />
  <div class="card-img-overlay ">
  <h2 class="card-title fw-bold text-dark text-center fs-2">Contact Us</h2><br />

    <h4 class="card-title fw-bold text-dark">5WAY IT ZONE</h4>
    <p class="card-text glassmorphism w-50 text-dark p-3 fw-bold">
      {/* Main Road <br />  */}
    {/* Ambagarathur <br />
    Pincode 609601 <br /> */}
    Karaikal Dist <br />
    Puducherry State  <br />
    India<br/>
    Contact No: +971 58 121 4095<br />
    Email id: 5wayitzone@gmail.com  <br />
    Web: 5wayitzone.com 
    </p> 

  </div>
</div>
<Footer/>
</>   )
}

export default Contact