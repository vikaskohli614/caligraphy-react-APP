import React from 'react';
import Slide from 'react-reveal/Slide';
import '../static/css/Upcoming_event.css';
import one from '../static/images/upcoming_event1.jpg';
import two from '../static/images/upcoming_event2.jpg';
export default function Upcoming_event() {
    return (
        <>
            <div className="container-fluid mt-5 mb-5">
                <h1 className='mt-5 mb-5'>UPCOMING EVENTS </h1>
                <div className="container t-5 ">
                    <div class="row">
                        <div class="col motabhai ">
                            <Slide left duration={2000}>
                                <div>
                                    <img className='imagessss' src={one} alt="" />
                                </div>
                            </Slide>
                        </div>
                        <div class="col ">
                            <Slide right duration={2000}>
                                <div>
                                    <img className='imagessss' src={two} alt="" />
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
