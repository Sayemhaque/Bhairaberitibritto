import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import LinkIcon from '@material-ui/icons/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
export default function Contact() {
    return (
        <>
         <div className="container">
         <div className="row ">
            <div class="title-text justify-content-center text-center mt-3 py-3">
              <h1 class="fw-fold mt-5">Contact Us</h1>
            </div>
             </div>
             <div className="row  text-center">
                 <div className="col-12 ">
                     <div className="conT pt-4">
                 <p className="text-center">   < MarkunreadIcon/> E-mail :  mdpavelk119@gmali.com  </p> 
                   <p className="text-center">  <PhoneIcon />Our Mobile Number : 01647812259</p>
                <p><LinkIcon/> Visit Our  Group  : <a href="https://www.facebook.com/groups/506425567270181/" blank="">Click here to join our group</a></p>
                </div>
     </div>
     <div className="social-icon pt-4">
         <FacebookIcon className="fs-1 "/>
         <InstagramIcon className="fs-1  "/>
         <TwitterIcon className="fs-1 "/>
         < YouTubeIcon className="fs-1 "/>
     </div>
             </div>
         </div>
        </>
    )
}