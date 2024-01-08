import React from 'react'
import '../styles/style.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer class="text-center text-lg-start bg-body-tertiary text-muted shadow-lg mt-4">
     <section className="d-flex flex-column flex-md-row justify-content-center p-1 shadow-lg mx-md-auto">

<div className="me-md-5 mt-2 pt-1 col-md-6 col-sm-12 d-flex justify-content-center align-items-center pb-md-3" style={{ height: "70px" }}>
  <span className='ps-3 fs-4 fw-semibold text-center' style={{ color: "#000066" }}>
    Need Our Service 
    <Link className='text-decoration-none' to={"/form"}>  <button className='btn btn-outline-dark fw-semibold me-3 enquiry px-2 px-md-5 ms-0 ms-md-2'>Get Enquiry</button></Link>
  </span>
</div>

<div className='mt-2 pt-1 col-md-6 col-sm-12 d-flex justify-content-center'>
  <a href="#" className="me-4 text-reset">
    <i className="bi bi-facebook" style={{ fontSize: "30px", color: "#1877f2" }}></i>
  </a>
  <a href="#" className="me-4 text-reset">
    <i className="bi bi-google" style={{ fontSize: "30px", color: "#DB4437" }}></i>
  </a>
  <a href="#" className="me-4 text-reset">
    <i className="bi bi-instagram" style={{ fontSize: "30px", color: "#C13584" }}></i>
  </a>
  <a href="#" className="me-4 text-reset">
    <i className="bi bi-linkedin" style={{ fontSize: "30px", color: "#0077B5" }}></i>
  </a>
</div>
</section>

    
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h5 class="text-uppercase fw-bold mb-4" style={{color:"#000066"}}>
              <i class="bi bi-buildings me-2"></i>5WAY </h5>
              <p>
              your hub for digital excellence! We offer expert services in digital marketing, web ang graphics design, ecommerce and Refurbished Laptop. Elevate your online presence with our innovative solutions. Let's shape your digital success together
              </p>
            </div>
    
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4"style={{color:"#000066"}}>Our Services</h6>
              <p> Digital Marketing</p>
              <p> Web & Graphics Design</p>
              <p>Ecommerce</p>
              <p>Refurbished Laptop</p>
            </div>
        
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4"style={{color:"#000066"}}>Contact</h6>
              <p><i class="bi bi-house-door me-3"></i> Karaikal, Puducherry<br /><p className='mx-5 ps-4'>India</p></p>
              <p>
                <i class="bi bi-envelope me-3"></i>
                5wayitzone@gmail.com              </p>
              <p><i class="bi bi-phone me-3"></i> +971 58 121 4095</p>
            </div>
          </div>
        </div>
      </section>
    
      <div class="text-center p-4 footer text-white fw-bold">
        © 2023 Copyright
        <a class="text-reset fw-bold text-decoration-none ms-2" href="">5WAY</a>
      </div>
    </footer>
    )
}

export default Footer