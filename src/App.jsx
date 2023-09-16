import './App.css'
import Navbar from './components/atoms/navbar/Navbar'
import Homepage from './containers/Homepage'
import { Routes, Route } from "react-router-dom"
import About from './containers/About'
import Footer from './components/atoms/footer/Footer'
import Goal from './containers/Goal'
function App() {


  return (
    <>
  <Navbar></Navbar>
    <main>
  <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="about" element={ <About/> } />
        <Route path="goal" element={ <Goal/> } />
  </Routes>
  </main>
  <Footer></Footer>
    </>
  )
}

export default App
