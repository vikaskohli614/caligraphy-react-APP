import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import '../static/css/body.css';
import logo from '../static/calligraphy/logo.png'
export default function Body() {
  const ani = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: ani.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../static/json/office.json'),
      repeat: false

    })
  }, []);
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <div>
      {/* <div className="row">
        <div className="col"><div className='container' ref={ani} /></div>
        <div className="col"><div className='container' ref={ani} /></div>
      </div> */}
      <div>
        <section>
          <h1>Scroll Down to Reveal Elements ↓</h1>
        </section>
        <section>
          <div className="container reveal">
            {/* <h2>Caption</h2> */}
            <div className="text-container">
              <div className="text-box">
              <img src={logo} className="card-img-top" alt="..." />
                <h3>Section Text</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                  eius molestiae perferendis eos provident vitae iste.
                </p>
              </div>
              <div className="text-box">
              <img src={logo} className="card-img-top" alt="..." />
                <h3>Section Text</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                  eius molestiae perferendis eos provident vitae iste.
                </p>
              </div>
              <div className="text-box">
              <img src={logo} className="card-img-top" alt="..." />
                <h3>Section Text</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                  eius molestiae perferendis eos provident vitae iste.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container reveal">
            {/* <h2>Caption</h2> */}
            <div className="text-container">
              <div className="text-box">
              <img src={logo} className="card-img-top" alt="..." />
                <h3>Section Text</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                  eius molestiae perferendis eos provident vitae iste.
                </p>
              </div>
              <div className="text-box">
              <img src={logo} className="card-img-top" alt="..." />
                <h3>Section Text</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                  eius molestiae perferendis eos provident vitae iste.
                </p>
              </div>
              <div className="text-box">
              <img src={logo} className="card-img-top" alt="..." />
                <h3>Section Text</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                  eius molestiae perferendis eos provident vitae iste.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container reveal">
            {/* <h2>Caption</h2> */}
            <div className="text-container">
              <div className="text-box">
              <img src={logo} className="card-img-top" alt="..." />
                <h3>Section Text</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                  eius molestiae perferendis eos provident vitae iste.
                </p>
              </div>
              <div className="text-box">
              <img src={logo} className="card-img-top" alt="..." />
                <h3>Section Text</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                  eius molestiae perferendis eos provident vitae iste.
                </p>
              </div>
              <div className="text-box">
              <img src={logo} className="card-img-top" alt="..." />
                <h3>Section Text</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                  eius molestiae perferendis eos provident vitae iste.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}
