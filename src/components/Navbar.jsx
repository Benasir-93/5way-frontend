import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'


function Navbar() {
  return (
<>

<nav class="navbar ">
  <div class="container-fluid shadow-lg" >
    
    <Link to="/" className='text-decoration-none'>
      <img src="./logo.png" alt="5way it zone" className='my-2 pb-2'/>
      {/* <strong className=' fs-1 font ms-0 my-2 ' style={{color:"#000066"}}>5WAY </strong> */}
      <img src='5WAY.png' className='  ms-0 my-2 ' alt='5waymart' style={{width:"13.9rem"}}/>

    </Link> 

    <div class="d-flex align-items-center ms-auto">
<Link to={"/form"}>      <button className='btn btn-outline-dark me-3 hide-on-small enquiry px-5' >Get Enquiry</button>
</Link>
   
<button class="navbar-toggler fw-bold " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon "></span>
</button>

      <div class="offcanvas offcanvas-end glassmorphism" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title text-light " id="offcanvasNavbarLabel">MENU</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 fw-bold text-center ">
            <li className="nav-item ">
              <Link to="/" className="nav-link text-light" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-light">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-light">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>
{/* <div className='line'></div> */}
 </>

  )
}

export default Navbar
