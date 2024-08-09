import { NavLink } from "react-router-dom";
import "./App.css";

function Nav (){

    return(
        <div>
                <NavLink to="/" className='menubar'>Home</NavLink>
                <NavLink to="/temp" className='menubar'>Temples</NavLink>
                <NavLink to="/wild"  className='menubar'>Wildlife</NavLink>
                <NavLink to="/trekking"  className='menubar'>Trekking</NavLink>
                {/* <NavLink to="/crud" className='menubar'>Booking</NavLink> */}

        </div>
      
    )
}
export default Nav;