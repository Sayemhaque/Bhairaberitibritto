import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
        <div className="brand "><h1 className="text-center p-2 mt-3"> <span className="text-info">ভৈরবের </span> 
        <span className="text-danger">ইতিবৃত্ত</span> 
        </h1>
        </div>
        <div className="brand2">  <h1 className="text-center mt-0"><span className="text-in">
          HISTORY OF</span> <span className="text-dang">BHAIRAB</span></h1> </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
  <div className="container-fluid">
    <button className="navbar-toggler justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
     aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <NavLink activeClassName="menu-active" exact className="nav-link mx-2 " to="/"> হোমপেজ</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className="nav-link mx-2" to="/আমাদেরউদ্দেশ্য">আমাদের উদ্দেশ্য</NavLink>
        </li>
        <li className="nav-item">
       <NavLink activeClassName="menu-active" className="nav-link mx-2" to="/নিয়মকানুন">নিয়ম কানুন</NavLink>
       </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className="nav-link mx-2" to="/এডমিনপ্যানেল">এডমিন প্যানেল</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className="nav-link mx-2" to="/যোগাযোগ">যোগাযোগ</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
