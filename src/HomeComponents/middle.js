import React from 'react'
// import Fade from 'react-reveal/Fade';
import '../static/css/middle.css'
// import image1 from '../static/images/landing-big-img-1.jpg'
// import image1_2 from '../static/images/landing-phone-img-1-2.png'
// import image2 from '../static/images/landing-big-img-2.jpg'
// import image2_2 from '../static/images/landing-phone-img-2-2.png'
// import image3 from '../static/images/landing-big-img-3.jpg'
// import image3_2 from '../static/images/landing-phone-img-3-2.png'
// import image4 from '../static/images/landing-big-img-4.jpg'
// import image4_2 from '../static/images/landing-phone-img-4-2.png'
// import image5 from '../static/images/landing-big-img-5.jpg'
// import image5_2 from '../static/images/landing-phone-img-5-2.png'
// import image6 from '../static/images/landing-big-img-6.jpg'
// import image6_2 from '../static/images/landing-phone-img-6-2.png'
// import image7 from '../static/images/landing-big-img-7.jpg'
// import image7_2 from '../static/images/landing-phone-img-7-2.png'
// import image8 from '../static/images/landing-big-img-8.jpg'
// import image8_2 from '../static/images/landing-phone-img-8-2.png'
import bg_image from '../static/images/landing-leaves-img-1.png';
import bg_image2 from '../static/images/landing-leaves-img-2.png';

// import bg_button from '../static/images/landing-button-img-1.png'
// import bg_button2 from '../static/images/landing-button-img-2.png'
// import bg_button3 from '../static/images/landing-button-img-3.png'
// import bg_button4 from '../static/images/landing-button-img-4.png'
export default function middle() {
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
            <div className="container-fluid middle_background mar_t">
                <div className='row '>
                    <div className='bg_button reveal'>
                        {/* <img className='mx-auto float-start d-block backg1' src={bg_button} alt="" /> */}
                    </div>
                    <div className="reveal mt-5 ">
                        <img className='mango1' src={bg_image2} alt=''></img>
                    </div>
                    <div className='col-sm-6 middle1 '>
                        <div className='mx-auto float-end d-block middle_images' alt="...">
                            <h5>ABOUT US</h5>
                            <p>Calligraphy Foundation is a government registered trust working
                                <br />for the awareness and education of Calligraphy .
                                <br />It involves raising public knowledge of the art of calligraphy
                                <br />and creating a one-stop solution for artists to learn, grow,
                                <br /> teach, meet, and find inspiration for their work.</p>
                        </div>
                        {/* <img className='mx-auto float-end d-block middle_images' src={image1} alt="..."></img> */}
                        <div className="middle_float1 reveal">
                            {/* <img className='hang_image' src={image1_2} alt=''></img> */}
                        </div>
                        {/* <div class="eltdf-ii-text-holder">
                            <div class="eltdf-ii-text-holder-inner">
                                <span class="eltdf-btn-background"></span>
                                <p class="eltdf-ii-text">
                                    Portfolio Carousel <span class="eltdf-btn-text-plus"></span>
                                </p>
                            </div>
                        </div> */}
                    </div>
                    <div className='col-sm-6 middle1 bg_image'>
                        <div className='mx-auto float-start d-block middle_images' alt="...">
                            <h5>MISSION</h5>
                            <p className='text-start middle_images1left lh-lg'>● Build community of Calligraphers & Artists
                                <br />●	Promote Indian Scripts
                                <br />●	Promote Calligraphy as a career choice</p>
                        </div>
                        {/* <img className='mx-auto float-start d-block middle_images' src={image2} alt="..."></img> */}
                        <div className="middle_float2 reveal">
                            {/* <img className='hang_image' src={image2_2} alt=''></img> */}
                        </div>
                        {/* <div class="eltdf-ii-text-holder">
                            <div class="eltdf-ii-text-holder-inner">
                                <span class="eltdf-btn-background"></span>
                                <p class="eltdf-ii-text">
                                    Portfolio Carousel <span class="eltdf-btn-text-plus"></span>
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className='row '>
                    <div className='bg_button3 reveal'>
                        {/* <img className='mx-auto float-start d-block backg1 backg2' src={bg_button2} alt="" /> */}
                    </div>
                    <div className='backleaf reveal'>
                        <img className='mango' src={bg_image} alt=''></img>
                    </div>
                    <div className='col-sm-6  middle1 '>
                        <div className='mx-auto float-end d-block middle_images' alt="...">
                            <h5>Core Values</h5>
                            <p className='text-start middle_images1left lh-lg'>● 	Connect
                                <br />●	Share
                                <br />●	Inspire</p>
                        </div>
                        {/* <img className='mx-auto float-end d-block middle_images' src={image3} alt="..."></img> */}
                        <div className="middle_float1 reveal">
                            {/* <img className='hang_image' src={image3_2} alt=''></img> */}
                        </div>
                        {/* <div class="eltdf-ii-text-holder">
                            <div class="eltdf-ii-text-holder-inner">
                                <span class="eltdf-btn-background"></span>
                                <p class="eltdf-ii-text">
                                    Portfolio Carousel <span class="eltdf-btn-text-plus"></span>
                                </p>
                            </div>
                        </div> */}
                    </div>
                    <div className='col-sm-6 middle1'>
                        <div className='mx-auto float-start d-block middle_images' alt="...">
                            <h5>Vision</h5>
                            <p>Calligraphy Foundation is a government registered trust working
                                <br />for the awareness and education of Calligraphy .
                                <br />It involves raising public knowledge of the art of calligraphy
                                <br />and creating a one-stop solution for artists to learn, grow,
                                <br /> teach, meet, and find inspiration for their work.</p>
                        </div>
                        {/* <img className='mx-auto float-start d-block middle_images' src={image4} alt="..."></img> */}
                        <div className="middle_float2 reveal">
                            {/* <img className='hang_image' src={image4_2} alt=''></img> */}
                        </div>
                        {/* <div class="eltdf-ii-text-holder">
                            <div class="eltdf-ii-text-holder-inner">
                                <span class="eltdf-btn-background"></span>
                                <p class="eltdf-ii-text">
                                    Portfolio Carousel <span class="eltdf-btn-text-plus"></span>
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className='row '>
                    <div className='bg_button1 reveal'>
                        {/* <img className='mx-auto float-start d-block backg1' src={bg_button3} alt="" /> */}
                    </div>
                    <div className="reveal">
                        <img className='mango1' src={bg_image2} alt=''></img>
                    </div>
                    <div className='col-sm-6  middle1 '>
                        <div className='mx-auto float-end d-block middle_images' alt="...">
                            <h5>Goals</h5>
                            <p>Calligraphy Foundation is a government registered trust working
                                <br />for the awareness and education of Calligraphy .
                                <br />It involves raising public knowledge of the art of calligraphy
                                <br />and creating a one-stop solution for artists to learn, grow,
                                <br /> teach, meet, and find inspiration for their work.</p>
                        </div>
                        {/* <img className='mx-auto float-end d-block middle_images' src={image5} alt="..."></img> */}
                        <div className="middle_float1 reveal">
                            {/* <img className='hang_image' src={image5_2} alt=''></img> */}
                        </div>
                        {/* <div class="eltdf-ii-text-holder">
                            <div class="eltdf-ii-text-holder-inner">
                                <span class="eltdf-btn-background"></span>
                                <p class="eltdf-ii-text">
                                    Portfolio Carousel <span class="eltdf-btn-text-plus"></span>
                                </p>
                            </div>
                        </div> */}
                    </div>
                    <div className='col-sm-6 middle1'>
                        <div className='mx-auto float-start d-block middle_images' alt="...">
                            <h5>Courses</h5>
                            <p className='text-start middle_images1left lh-lg'>● Introduction to Modern Brush Calligraphy
                                <br />●	Fauxsaics in Procreate: Make A Typographic Mosaic 
                                <br />●	Bounce Letters: Bringing Character 
                                <br />●	Hand Lettering: Four Easy Steps to Modern Calligraphy
                                <br />●	Modern Calligraphy: Pointed Pen Basics </p>
                        </div>
                        {/* <img className='mx-auto float-start d-block middle_images' src={image6} alt="..."></img> */}
                        <div className="middle_float2 reveal">
                            {/* <img className='hang_image' src={image6_2} alt=''></img> */}
                        </div>
                        {/* <div class="eltdf-ii-text-holder">
                            <div class="eltdf-ii-text-holder-inner">
                                <span class="eltdf-btn-background"></span>
                                <p class="eltdf-ii-text">
                                    Portfolio Carousel <span class="eltdf-btn-text-plus"></span>
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* <div className='row '>
                    <div className='bg_button3 reveal'>
                        <img className='mx-auto float-start d-block backg1 backg2' src={bg_button4} alt="" />
                    </div>
                    <div className='backleaf reveal'>
                        <img className='mango' src={bg_image} alt=''></img>
                    </div>
                    <div className='col-sm-6  middle1 '>
                        <img className='mx-auto float-end d-block middle_images' src={image7} alt="..."></img>
                        <div className="middle_float1 reveal">
                            <img className='hang_image' src={image7_2} alt=''></img>
                        </div>
                        <div class="eltdf-ii-text-holder">
                            <div class="eltdf-ii-text-holder-inner">
                                <span class="eltdf-btn-background"></span>
                                <p class="eltdf-ii-text">
                                    Portfolio Carousel <span class="eltdf-btn-text-plus"></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 middle1'>
                        <img className='mx-auto float-start d-block middle_images' src={image8} alt="..."></img>
                        <div className="middle_float2 reveal">
                            <img className='hang_image' src={image8_2} alt=''></img>
                        </div>
                        <div class="eltdf-ii-text-holder">
                            <div class="eltdf-ii-text-holder-inner">
                                <span class="eltdf-btn-background"></span>
                                <p class="eltdf-ii-text">
                                    Portfolio Carousel <span class="eltdf-btn-text-plus"></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}