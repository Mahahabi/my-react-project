import { BrowserRouter as Router,Routes,Route, } from "react-router-dom";
import Menu from "./navbar";
import Booking from "./crud";
import React from "react"; 
import Home from "./home";
import Temple from "./temp";
import Wildlife from "./Wild";
import Trekking from "./trekking";
import Heritage from "./heritage";
import "./App.css";
import { FaHeart,FaSearch,FaUserAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
// import { BsFillChatRightHeartFill, BsTelephone } from "react-icons/bs";

function Main()
{

  
  return(   
  <Router> <div className="head">
    <h1><img src="logo1.jpg" alt="logo" className="logo"></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HAPPY HOLIDAYS &nbsp;&nbsp;</h1>
   

    <div className="icons"><FaHeart/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaUserAlt/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaLocationDot/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaSearch/></div>
    

    <Menu/>
    <hr/></div>
    <Routes>
   
    
    <Route path="/home" element={<Home></Home>}></Route>
    <Route path="/" element={<Home></Home>}></Route>    
    <Route path="/temp" element={<Temple></Temple>}></Route>
    <Route path="/wild" element={<Wildlife></Wildlife>}></Route>
    <Route path="/trekking" element={<Trekking></Trekking>}></Route>
    <Route path="/heritage" element={<Heritage></Heritage>}></Route>
    <Route path="/booking" element={<Booking></Booking>}></Route>

    </Routes>
    </Router>
    
    
  );
}
export default Main;

