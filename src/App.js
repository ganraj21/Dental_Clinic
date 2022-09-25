import React from 'react'
import { Route,Routes} from 'react-router-dom'
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import Navbar from './Components/Pages/Navbar';

const App = () =>{
  return(
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about-us' element={<About/>}/>

    </Routes>
    </>
  )
}

export default App;
