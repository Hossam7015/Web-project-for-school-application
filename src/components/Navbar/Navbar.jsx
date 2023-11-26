import React from 'react'
import logo from '../../assets/New ACIC American School LOGO-SME-G_edited.webp'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return<>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light ">
  <div class="container">
    <Link class="navbar-brand" to="/">
      <img src={logo} className='w-100' alt="logo" />
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <h2 className=''>ACIC American School</h2>

      <ul class="navbar-nav  ms-auto mb-2 mb-lg-0"> 
        <li class="nav-item">
          <NavLink class="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link " aria-current="page" to="/about">About Us</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link " aria-current="page" to="/adamiton">Admission</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link " aria-current="page" to="/campus">To apply</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link " aria-current="page" to="/countact">Contact Us</NavLink>
        </li>

      </ul>

    </div>
  </div>
</nav>
  </>
}
