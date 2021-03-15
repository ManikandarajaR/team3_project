import React from 'react';
import {Link} from "react-router-dom"
const Navbar = () =>{

     return(
          <nav class="navbar navbar-expand-lg navbar-light ">
                  <a class="navbar-brand" href="#">Pack Your Bags</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav  ml-auto">
                        <li class="nav-item active">
                          <Link to="" class="nav-link" >Home</Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/About" class="nav-link" href="#">About</Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/Contact" class="nav-link" href="#">Contact</Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/Blog" class="nav-link" href="#">Blog</Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/offer" class="nav-link" href="#">Offer</Link>
                        </li>  
                      </ul>
                    </div>
              </nav>
     )
}

export default Navbar;