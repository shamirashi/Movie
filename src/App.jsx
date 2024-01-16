import { useState  } from 'react'
import {BrowserRouter , Routes , Route } from "react-router-dom" ;

import Register from './register.jsx';
import Login from './login.jsx';
import Profile from './userProfile.jsx';
import Nav from "./nav.jsx";
import Home from './home.jsx';
import axios from 'axios'; 
import { Kathal, Falimy  , Maharani, Fathima, Garudan, Pheonix, Jalakam, Prana } from './views.jsx';
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  let mode = import.meta.env.MODE;
  console.log(mode);
  if(mode == "development"){
    axios.defaults.baseURL = `http://localhost:${import.meta.env.VITE_PORT}`;

  }
  if(mode == "production"){
    axios.defaults.baseURL = location.origin;
  }
    const [isLoggedin , setLoggedin] = useState(false);
    const [isRegistered , setRegistered] = useState(false);

   
    

  return (
    <>
      <BrowserRouter>
      <Nav  />

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kathal" element={<Kathal />} />
        <Route path="/falimy" element={<Falimy />} />
        <Route path="/maharani" element={<Maharani />} />
        <Route path="/fathima" element={<Fathima />} />
        <Route path="/garudan" element={<Garudan />} />
        <Route path="/jalakam" element={<Jalakam />} />
        <Route path="/pheonix" element={<Pheonix />} />
        <Route path="/prana" element={<Prana />} />
        <Route path="/reg" element={<Register setRegistered={setRegistered} />} />
        <Route path="/loginn" element={<Login setLoggedin={setLoggedin} />}  />
        <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App




