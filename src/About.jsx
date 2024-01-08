import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './styles/style.css'


function About() {
  return (
<>
<Navbar/><div className="contasiner-fluid">
<div class="card" >
<img src="./about.jpg" class="card-img-top w-100 mb-2 pb-3" style={{height:"300px"}} alt="..."/></div>
{/* <div class="container">
  <div class="row">
<div className="col-md-7">
<div className="card ms-3 my-4">
  <div class="card-body">
      <h3 className='card-title'>We are a ladder for your business!</h3>
      <hr />
<p className='card-text'>5WAY IT ZONE is a technology-based company to serve web design, graphic design, and digital marketing services. We have 5+ years of experience in Karaikal.Since we are a start-up company. Our mission is to launch human-centric products and provide seamless technology support without any interruption. We worked with hundreds of clients all over the world. We have the best team of experts to create all our products.</p><br />
<p className='card-text'>We are open to fresh, unique, and insane ideas. Developing marketing strategies for each new internet business is becoming a more enjoyable task for us. We are learning, evolving, and putting our digital marketing skills to work for our clients. With a comprehensive portfolio of performance and advertising solutions, we help marketers improve their brand image, influence buyers, and earn money. We help you succeed in the digital world by assisting you in reaching, growing, and converting your audience.</p><br />
< p className='card-text'>We do all kinds of  Web Development, YouTube Media, Graphic Design, and Digital Marketing Services.</p>   </div>
</div>
</div>
<div className="col-md-5 my-4 ">
<div class="card" >
  <img src="about-us.jpg" class="card-img-top" alt="..."/>
    
</div>
</div>

</div>
</div> */}
<div class="container-fluid mt-4 mt-lg-5">
  <div class="row">
    {/* <div className="card-group">
    <div class="col-md-7 d-md-flex me-0">
      <div class="card ms-3 my-4 flex-grow-1">
        <div class="card-body">
          <h3 className='card-title'>We are a ladder for your business!</h3>
          <hr />
          <p className='card-text'>5WAY IT ZONE is a technology-based company to serve web design, graphic design, and digital marketing services. We have 5+ years of experience in Karaikal.Since we are a start-up company. Our mission is to launch human-centric products and provide seamless technology support without any interruption. We worked with hundreds of clients all over the world. We have the best team of experts to create all our products.</p><br />
          <p className='card-text'>We are open to fresh, unique, and insane ideas. Developing marketing strategies for each new internet business is becoming a more enjoyable task for us. We are learning, evolving, and putting our digital marketing skills to work for our clients. With a comprehensive portfolio of performance and advertising solutions, we help marketers improve their brand image, influence buyers, and earn money. We help you succeed in the digital world by assisting you in reaching, growing, and converting your audience.</p><br />
          <p className='card-text'>We do all kinds of Web Development, YouTube Media, Graphic Design, and Digital Marketing Services.</p>
        </div>
      </div>
    </div>
    <div class="col-md-5 my-4 ms-0">
      <div class="card h-100">
        <img src="about-us.jpg" class="card-img-top h-100" alt="..."/>
      </div>
    </div>
    </div> */}
    <div class="container bg-white ">
  <div class="row">
    <div class="col-md-7">
      <div class="ms-3 my-4 ps-3">
        <h3 className='card-title'>We are a ladder for your business!</h3>
        <hr />
        <p className='card-text'>5WAY is a technology-based company to serve web design, graphic design, and digital marketing services. We have 5+ years of experience in Karaikal. Since we are a start-up company. Our mission is to launch human-centric products and provide seamless technology support without any interruption. We worked with hundreds of clients all over the world. We have the best team of experts to create all our products.</p><br />
        <p className='card-text'>We are open to fresh, unique, and insane ideas. Developing marketing strategies for each new internet business is becoming a more enjoyable task for us. We are learning, evolving, and putting our digital marketing skills to work for our clients. With a comprehensive portfolio of performance and advertising solutions, we help marketers improve their brand image, influence buyers, and earn money. We help you succeed in the digital world by assisting you in reaching, growing, and converting your audience.</p><br />
        <p className='card-text'>We do all kinds of Web Development, YouTube Media, Graphic Design, and Digital Marketing Services.</p>
      </div>
    </div>
    <div class="col-md-5 my-4">
      <img src="about-us.jpg" class="img-fluid" alt="..."/>
    </div>
  </div>
</div>
</div>
  </div>
</div>

<Footer/>
</>  )
}

export default About