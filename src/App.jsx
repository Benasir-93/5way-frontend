import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Form from './components/Form';
import LoadingModal from './components/LoadingModal';

function App() {

  return (
    <Router>
    {/* <Navbar /> */}
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path='/form' element={<Form/>}/>

</Routes>

  </Router>
  )
}

export default App
