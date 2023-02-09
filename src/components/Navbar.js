import React from 'react';
import {NavLink} from "react-router-dom";
const  styleNavLink = ({isActive})=>({
  background: isActive ? "blue":"white",
    color: isActive?  'white':"black"
})
function Navbar(props) {

    return (
        <ul className="nav justify-content-end my-5">
            <li className="nav-item">
                <NavLink className="nav-link" style={styleNavLink} to={"/"}>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" style={styleNavLink} to={"/about"}>
                    About
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" style={styleNavLink} to={"/user"}>
                    User
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" style={styleNavLink} to={"/contact"}>
                    Contact
                </NavLink>
            </li>
        </ul>
    );
}

export default Navbar;