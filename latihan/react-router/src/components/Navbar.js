import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () =>{
    return (
        <div style={nav}>
            <h1><Link to="/" style={link}>KodeAkademia</Link></h1>
            <ul style={myUl}>
                <li><Link to="/" style={link}>Home</Link></li>
                <li><Link to="/about" style={link}>About</Link></li>
                <li><Link to="/contact" style={link}>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar

const link = {
    textDecoration: "none",
    color: "#fff"
}

const nav = {
    display: "flex",
    background: "#fe024e",
    padding: "0 6rem",
    justifyContent: "space-between",
    color: "#fff",
    alignItems: "center"
}

const myUl = {
    listStyle: "none",
    display: "flex",
    align: "flex-start",
    flex: "column",
    gap: "40px", 
    justifyContent: "space-between",
    widht: "20%"
}