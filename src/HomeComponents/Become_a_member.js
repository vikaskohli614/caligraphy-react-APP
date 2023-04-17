import React from 'react'
import '../static/css/Become_a_member.css';
import Jump from 'react-reveal/Jump';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import image1 from '../static/images/_1_orig.jpeg';
import image2 from '../static/images/Picsart_22-11-22_14-54-45-912.jpg';
import image3 from '../static/images/Picsart_22-11-22_14-55-48-288.jpg';
import image4 from '../static/images/Picsart_22-11-22_14-57-49-569.jpg';
import image5 from '../static/images/Picsart_22-11-22_14-59-28-321.jpg';
export default function Become_a_member() {
    return (
        <>
            <div className=''>
                <div className='row'>
                    <div className='col-sm-12 '>
                        <div id="carouselExampleIndicators" className="carousel slide zzzz bg-black" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        {/* {/ <img src='b.jpeg' className='b' /> /} */}
                                        <video className='b' autoPlay loop muted>
                                            <source src='/images\video_AdobeExpress_AdobeExpress_AdobeExpress.mp4' type='video/mp4' />
                                        </video>
                                        <div className="col-sm-12 a">
                                            <Jump> <p className='c'>MEMBERSHIP<br />1 Year Membership<br /><span style={{ fontSize: 16, color: "gray" }}> All Membership Benefits</span><br />₹1999
                                                <span style={{ fontSize: 16, color: "gray" }}>/ per Year</span></p></Jump>
                                            <button className='btn btn-danger subscribebutton'>Subscribe Now</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="row">
                                        {/* {/ <img src='b.jpeg' className='b' /> /} */}
                                        <video className='b' autoPlay loop muted>
                                            <source src='/images\video_AdobeExpress_AdobeExpress_AdobeExpress.mp4' type='video/mp4' />
                                        </video>
                                        <div className="col-sm-12 a">
                                            <Jump> <p className='c'>MEMBERSHIP<br />1 Year Membership<br /><span style={{ fontSize: 16, color: "gray" }}> All Membership Benefits</span><br />₹1999
                                                <span style={{ fontSize: 16, color: "gray" }}>/ per Year</span></p></Jump>
                                            <button className='btn btn-danger subscribebutton'>Subscribe Now</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="row">
                                        {/* {/ <img src='b.jpeg' className='b' /> /} */}
                                        <video className='b' autoPlay loop muted>
                                            <source src='/images\video_AdobeExpress_AdobeExpress_AdobeExpress.mp4' type='video/mp4' />
                                        </video>
                                        <div className="col-sm-12 a">
                                            <Jump>  <p className='c'>INTERNATIONAL MEMBERSHIP<br />1 Year Membership<br /><span style={{ fontSize: 16, color: "gray" }}>All Membership Benefits</span><br />$35
                                                <span style={{ fontSize: 16, color: "gray" }}>/ per Year</span></p></Jump>
                                            <button className='btn btn-danger subscribebutton'>Subscribe Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>




                        <div className='col-sm-12  part2'>
                            <Fade left>
                                <img src={image2} className='tv' />
                            </Fade>
                            <Zoom> <p className='tvside'>Workshops</p></Zoom>
                            <Fade right>
                                <ul>
                                    <li>Reduced rates for instructional workshops sponsored by the Calligraphy Foundation.</li>
                                    <li>24-hour priority workshop registration for workshops.</li>
                                </ul>
                            </Fade>
                        </div>

                        <div className='col-sm-12  part2'>
                            <Fade left>
                                <img src={image3} className='tv' />
                            </Fade>
                            <Zoom> <p className='tvside'>Publications</p></Zoom>
                            <Fade right>
                                <ul>
                                    <li>The Newsletter, in digital format, with field-related articles, interviews, technical<br /> forum, and workshop reviews.</li>
                                    <li>Email communications with time-sensitive information on workshops, events, <br />meetings and exhibits.</li>
                                </ul>
                            </Fade>
                        </div>

                        <div className='col-sm-12  part2'>
                            <Fade left>
                                <img src={image4} className='tv' />
                            </Fade>
                            <Zoom> <p className='tvside'>Exhibits</p></Zoom>
                            <Fade right>
                                <ul>
                                    <li>Opportunities to participate in at least two annual calligraphic exhibits annually.</li>
                                </ul>
                            </Fade>
                        </div>

                        <div className='col-sm-12  part2'>
                            <Fade left>
                                <img src={image5} className='tv' />
                            </Fade>
                            <Zoom> <p className='tvside'>Website</p></Zoom>
                            <Fade right>
                                <ul>
                                    <li>Opportunity to post information about your calligraphy business on the <br />Foundation website (see the Membership Form below for details).</li>
                                    <li>Access to Members-Only areas of the site, such as the Archival section and TCF<br /> Journal..</li>
                                </ul>
                            </Fade>
                        </div>

                        <div className='col-sm-12  part2'>
                            <Fade left>
                                <img src={image1} className='tv' />
                            </Fade>
                            <Zoom><p className='tvside'>Events</p></Zoom>
                            <Fade right>
                                <ul>
                                    <li>Opportunities to attend events organized by TCF during the year.</li>
                                    <li>Opportunity to join one or more regional study groups to share your work, try <br />new techniques.</li>
                                    <li>Be a part of Virtual Study Room.</li>
                                </ul>
                            </Fade>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

