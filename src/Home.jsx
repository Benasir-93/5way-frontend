import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import './styles/style.css'
import { Link } from 'react-router-dom'


function Home() {
  return (
<>
<Navbar/>
<Carousel/>

<div class="container-fluid mt-3 pb-2 ">
  <div class="row align-items-stretch ">
     {/* digitalmarketing */}
     <div class="col-xl-3 col-lg-3 col-md-6 mb-3 mb-md-0">
      <div class="card shadow-lg d-flex flex-column model  card-block" >
        <img src="./DM POST.jpg" class="card-img  object-fit-cover  " alt="..." />
        {/* <div class="card-img-overlay d-flex flex-column justify-content-between">
          <h5 class="card-title fw-bolder font">Digital Marketing</h5>
          <p class="card-text fw-semibold">

         
Improve online visibility using SEO keywords, optimize your digital presence for better search rankings & increased traffic.</p>
          <Link to={"/form"}>
          <button type="button" class="w-100 btn btn-outline-dark text-light fw-bold border border-3 border-light-subtle mt-auto">Enquiry Now</button>
         </Link>
        </div> */}
      </div>
    </div>
    {/* web &graphics designing */}
  <div class="col-lg-3 col-md-6 mb-3 mb-md-3">
      {/* <div class="card border-dark border-2 d-flex flex-column model card-block" > */}
      <div class="card shadow-lg d-flex flex-column model  card-block" >

        <img src="./wd POST.jpg" class="card-img " alt="..."  />
        {/* <div class="card-img-overlay d-flex flex-column justify-content-between">
          <h5 class="card-title fw-bolder font">Web & Graphics Design</h5>
          <p class="card-text  fw-semibold ">

          Create captivating digital spaces with seamlessly blended aesthetics, leaving a lasting impression.</p>
          <Link to={"/form"}>
          <button type="button" className="btn w-100 btn btn-outline-dark text-light fw-bold border border-3 border-light-subtle mt-auto">Enquiry Now</button>
         </Link>
        </div> */}
      </div>
    </div>
    {/* ecommerce */}
    <div class="col-lg-3 col-md-6 mb-3 mb-md-3">
    <div class="card shadow-lg d-flex flex-column model  card-block" >
        <img src="./ec POST.jpg" class="card-img  object-fit-cover" alt="..." />
        {/* <div class="card-img-overlay d-flex flex-column justify-content-between">
          <h5 class="card-title fw-bolder font">Ecommerce</h5>
          <p class="card-text  fw-semibold">Accelerate online sales with a high-performance ecommerce site.
Optimize user experience and scalable online platform.</p>
          <Link to={"/form"}>
          <button type="button" class="w-100 btn btn-outline-dark text-light fw-bold border border-3 border-light-subtle mt-auto">Enquiry Now</button>
         </Link>
        </div> */}
      </div>
    </div>
   
    {/* refurbished laptop */}
    <div class="col-lg-3 col-md-6 mb-3 mb-md-0">
    <div class="card shadow-lg d-flex flex-column model  card-block" >
      <img src="./rl POST.jpg" class="card-img object-fit-cover" alt="..." />

        {/* <img src="./rl POST.jpg" class="card-img opacity-25 object-fit-cover" alt="..." /> */}
        {/* <div class="card-img-overlay d-flex flex-column justify-content-between">
          <h5 class="card-title fw-bolder font">Refurbished Laptop</h5>
          <p class="card-text  fw-semibold">

          Explore our refurbished laptops.Upgrade to a quality device has never been easier.Secure your perfect laptop today!</p>
          <Link to={"/form"}>
          <button type="button" class=" w-100 btn btn-outline-dark text-light fw-bold border border-3 border-light-subtle mt-auto">Enquiry Now</button>
         </Link>
        </div> */}
      </div>
    </div>
  </div>
</div>
<br />
<Footer/>
</>  )
}

export default Home