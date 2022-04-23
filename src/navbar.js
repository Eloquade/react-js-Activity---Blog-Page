import React from "react";
import { Link } from "react-router-dom";
import './navbar.css' 

const Navbar = () => (
    
                <html lang="en">
                <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="style.css" />
                <title>Document</title>
                </head>
                    <body>
                    <nav className="navbar">
                    
                    <div className="logo">GEO</div>
                
                        <ul className="nav-links">
                        
                            
                            <div className="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Articlelist">About</Link></li>
                            
                            </div>
                        </ul>
                    </nav>
                 </body>
                </html>
    

);


export default Navbar;