import './App.css'
import Navbar from './components/atoms/navbar/Navbar'
import Homepage from './containers/Homepage'
import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react";
import About from './containers/About'
import Footer from './components/atoms/footer/Footer'
import Goal from './containers/Goal'
import { createContext } from 'react';
import UseGetRequest from './hooks/UseGetRequest';

export const UserContext = createContext(null);


function App() {

  const [user, setUser] = useState(null);

  const { data: userData } = UseGetRequest("http://127.0.0.1:8000/api/users/1");

  useEffect(() => {
      setUser(userData);
  }, [userData])

  
  

  return (
    <>
     <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <Navbar></Navbar>
      <main>
      <Routes>
            <Route path="/" element={ <Homepage /> } />
            <Route path="about" element={ <About/> } />
            <Route path="goal" element={ <Goal/> } />
      </Routes>
      </main>
      <Footer></Footer>
      </UserContext.Provider>
    </>
  )
}

export default App
