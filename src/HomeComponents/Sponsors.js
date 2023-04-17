import React from 'react'
// import Flip from 'react-reveal/Flip';
// import Rotate from 'react-reveal/Rotate'; 
import '../static/css/Sponsors.css'

export default function Sponsors() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

  return (
    <>
     <div className='container-fluid '>
        <div class="row">
          <div className='col-sm-12 sponsors'>
            <div className='row'>
              <div className='spon1 reveal'><img src='1.png'/><p>ASSOCIATE SPONSOR</p></div>
              <div className='spon2 reveal'><img src='2.png'/><p>ASSOCIATE SPONSOR</p></div>
              <div className='spon1 reveal'><img src='3.png'/><p>OFFICIAL PAPER SPONSOR</p></div>
              <div className='spon1 reveal'><img src='4.png'/><p>OFFICIAL INK SPONSOR</p></div>
              <div className='spon1 reveal'><img src='5.png'/><p>PAPER SPONSOR</p></div>
              <div className='spon1 reveal'><img src='6.png'/><p>PROMOTING PARTNER</p></div>
              <div className='spon1 reveal'><img src='7.png'/><p>PROMOTING PARTNER</p></div>
              <div className='spon5 reveal'><img src='8.png'/><p>OFFICIAL INK SPONSOR</p></div>
              <div className='spon1 reveal'><img src='9.png'/><p>COMMUNITY PARTNER</p></div>
              <div className='s'><p >SPONSORS</p> </div>
            </div>
            {/* <div className='effect1'></div> */}
            {/* <div className='effect2'></div> */}
            {/* <div className='effect3'></div>  */}
          </div>
        </div>
      </div>
    </>
  )
}

