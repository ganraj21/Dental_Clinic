import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Appointment from './Components/Appointment';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Login from './Components/Login';
const App = () =>{
  return(
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/dental-clinic/about' element={<About/>}/>
      <Route exact path='/dental-clinic/appointment' element={<Appointment/>}/>
      <Route exact path='/dental-clinic/services' element={<Services/>}/>
      <Route exact path='/dental-clinic/contact' element={<Contact/>}/>
      <Route exact path='/dental-clinic/login_user' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App;
