import React from 'react'
import '../static/css/Eventsandfestival.css'
import one from '../static/images/_DSC0115.png'
import two from '../static/images/_DSC0166.png'
import three from '../static/images/_DSC0452.png'
import four from '../static/images/_DSC0535.png'
import five from '../static/images/_DSC0708.png'
import six from '../static/images/_DSC0612.png'
import seven from '../static/images/_DSC0725.png'
import eight from '../static/images/_DSC0603.png'
import nine from '../static/images/CXR_9103.png'
import ten from '../static/images/CXR_9211.png'
import eleven from '../static/images/CXR_9278-01.png'
import twel from '../static/images/_DSC0067.png'
import thirteen from '../static/images/DSC_2737.png'
import fourteen from '../static/images/CXR_9091.png'
import fifteen from '../static/images/CXR_9236.png'
import sixteen from '../static/images/CXR_9249.png'
import seventeen from '../static/images/CLR-211-01.png'
import eigthteen from '../static/images/_DSC0452.png'
import nineteen from '../static/images/_DSC0374.png'
import twenty from '../static/images/_DSC0307.png'
import twentyone from '../static/images/CXR_9222.png'
export default function Eventsandfestival() {
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
            <div className="container-fluid bground_image mt-5 mt-5 mb-5">
                <h2 className=' text-white Headinds mt-5 mb-5'>EVENTS </h2>
                <div className="container-fluid t-5 ">
                    <div class="row">
                        <div class="col ">
                            <div className='reveal'>
                                <img className='imageshighh' src={one} alt="" />
                            </div>
                        </div>
                        <div class="col ">
                            <div className='reveal'>
                                <img className='imageshighh' src={two} alt="" />
                            </div>
                        </div>
                        <div class="col ">
                            <div className='reveal'>
                                <img className='imageshighh' src={three} alt="" />
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div className='reveal'>
                                <img className='imageshighh' src={four} alt="" />
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div className='reveal'>
                                <img className='imageshighh' src={five} alt="" />
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div className='reveal'>
                                <img className='imageshighh' src={six} alt="" />
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div className='reveal'>
                                <img className='imageshighh' src={seven} alt="" />
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div className='reveal'>
                                <img className='imageshighh' src={eight} alt="" />
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div className='reveal'>
                                <img className='imageshighh' src={nine} alt="" />
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div className='reveal'>
                                <img className='imageshighh' src={ten} alt="" />
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div className='reveal'>
                                <img className='imageshighh' src={eleven} alt="" />
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div className='reveal'>
                                <img className='imageshighh' src={twel} alt="" />
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div className='reveal'>
                                <img className='imageshighh' src={thirteen} alt="" />
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div className='reveal'>
                                <img className='imageshighh' src={fourteen} alt="" />
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div className='reveal'>
                                <img className='imageshighh' src={fifteen} alt="" />
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div className='reveal'>
                                <img className='imageshighh' src={sixteen} alt="" />
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div className='reveal'>
                                <img className='imageshighh' src={seventeen} alt="" />
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div className='reveal'>
                                <img className='imageshighh' src={eigthteen} alt="" />
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div className='reveal'>
                                <img className='imageshighh' src={nineteen} alt="" />
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div className='reveal'>
                                <img className='imageshighh' src={twenty} alt="" />
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div className='reveal'>
                                <img className='imageshighh' src={twentyone} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
