import React from 'react';
import Slide from 'react-reveal/Slide';
import '../static/css/Event_schedule.css'
import introduction from '../static/images/introduction.jpg';
import application from '../static/images/application.jpg';
import celebration from '../static/images/celebration.jpg';
export default function Event_schedule() {
    return (
        <>
            <div className="container mb-5">
                <div className='mt-5 mode' >
                    <h2 className='Headinds'>EVENT SCHEDULE</h2>
                </div>
                <div className="row mt-5">
                    <Slide left>
                        <div className="col-sm-4 ">
                            <div >
                                <img className='borderredo' src={introduction} alt="" />
                            </div>
                            <div className='mt-3'>
                                <h5>
                                    INTRODUCTION
                                </h5>
                            </div>
                            <div className='mt-3'>
                                <h6>
                                    Taste the flavour of various calligraphy scripts (workshops & knowledge area)
                                </h6>
                            </div>
                            <button className="btn btn-danger">Watch Video</button>
                        </div>
                    </Slide>
                    <div className="col-sm-4 ">
                        <div>
                            <img className='borderredo' src={application} alt="" />
                        </div>
                        <div className='mt-3'>
                            <h5>
                                APPLICATION
                            </h5>
                        </div>
                        <div className='mt-3'>
                            <h6>
                                Enjoy the process of creation of calligraphy artworks (live demonstrations)
                            </h6>
                        </div>
                        <button className="btn btn-danger">Watch Video</button>
                    </div>
                    <Slide right>
                        <div className="col-sm-4 ">
                            <div>
                                <img className='borderredo' src={celebration} alt="" />
                            </div>
                            <div className='mt-3'>
                                <h5>
                                    CELEBRATION
                                </h5>
                            </div>
                            <div className='mt-3'>
                                <h6>
                                    Playtime  with colors and inks on different mediums (group activity)
                                </h6>
                            </div>
                            <button className="btn btn-danger">Watch Video</button>
                        </div>
                    </Slide>
                </div>
            </div>
        </>
    )
}
