import './App.css'
import Navbar from './components/atoms/navbar/Navbar'
import Homepage from './containers/Homepage'
import { Routes, Route } from "react-router-dom"
import About from './containers/About'
import Footer from './components/atoms/footer/Footer'

function App() {


  return (
    <>
  <Navbar></Navbar>
  <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="about" element={ <About/> } />
  </Routes>
  <Footer></Footer>
    </>
  )
}

export default App
