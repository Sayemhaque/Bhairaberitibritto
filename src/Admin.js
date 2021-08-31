import React from 'react'
// import { NavLink } from 'react-router-dom'
import MainAdmin from './Images/MainAdmin.jpg'
import Admin1 from './Images/Admin1.jpg'
import Admin2 from './Images/Admin2.jpg'
import Admin3 from './Images/Admin3.jpg'
import Admin4 from './Images/Admin4.jpg'
import Admin5 from './Images/Admin5.jpg'
export default function Admin () {
    return (
        <>
      

  
            <div className="container-fluid bg-light">
            <div className="row ">
            <div class="title-text justify-content-center text-center mt-3 py-3">
              <h1 class="fw-fold ">Admin</h1>
            </div>
             </div>
                  <div className="row text-center">
                    <div className="col-md-6 col-lg-4">
                   <a href="https://www.facebook.com/simasultana.sima.94 "  blank=" ">
                     <div  className="card">
                 <img className="img-fluid " src={MainAdmin} alt="img"/>
                 <h3 className="pt-4 ">সিমা সুলতানা সিমা</h3>
                      </div>
                      </a>
                    </div>
                    <div className="col-md-6 col-lg-4">
                     <a href="https://www.facebook.com/profile.php?id=100057060681091" blank=""> 
                     <div  className="card">
                      <img className="img-fluid rounded-circle" src={Admin1} alt="img"/>
                      <h3 className="pt-4 ">রোজা আহমেদ</h3>
                      </div>
                      </a>
                    </div>
                    <div className="col-md-6 col-lg-4">
                     <a href="https://www.facebook.com/iqbal.faraby.391">
                       <div  className="card">
                      <img className="img-fluid rounded-circle" src={Admin2} alt="img"/>
                      <h3 className="pt-4 ">মাওঃইকবাল ফারাবী</h3>
                      </div>
                      </a>
                    </div>
                    <div className="col-md-6 col-lg-4">
                     <a href="https://www.facebook.com/profile.php?id=100006632627734" blank="">
                        <div  className="card ">
                      <img className="img-fluid rounded-circle" src={Admin3} alt="img"/>
                      <h3 className="pt-4 ">ফয়জুল্লাহ ফারাবী</h3>
                      </div>
                      </a>
                    </div>
                    <div className="col-md-6 col-lg-4">
                    <a href="https://www.facebook.com/mohammad.jakaria.12935" blank=""> 
                     <div  className="card ">
                      <img className="img-fluid rounded-circle" src={Admin4} alt="img"/>
                      <h3 className="pt-4 ">খান মাহমুদ জাকারিয়া</h3>
                      </div>
                      </a>
                    </div>
                    <div className="col-md-6 col-lg-4">
                    <a href="https://www.facebook.com/profile.php?id=100060508392476" blank="">  
                     <div  className="card ">
                      <img className="img-fluid rounded-circle" src={Admin5} alt="img"/>
                      <h3 className="pt-4 ">আব্দুল্লাহ আরাফাত</h3>
                      </div>
                      </a>
                    </div>
                  </div>
                  </div>
        
             
                   
        </>
    )
}