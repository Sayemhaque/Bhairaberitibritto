import React from 'react'
import Carosel from './Carosel'
export default function Home() {
    return (
        <>
        <div className="container1 bg-light">
          <div className="row ">
            <div className="col-md-12 mt-4 text-center p-3">
              <h1 className=""><span className="text-info">ভৈরবের </span> 
        <span className="text-danger">ইতিবৃত্ত</span>  ওয়েবসাইটে আপনাকে স্বাগতম।</h1>
            </div>
          </div>
          <Carosel />
          <h1 className="text-center mt-2">Website created by</h1><a href="https://www.facebook.com/profile.php?id=100009115234391"
           blank=""><h3 className="text-center" >&copy;Mohammad Sayem Haque</h3></a>
          </div> 
        </>
    )
}
