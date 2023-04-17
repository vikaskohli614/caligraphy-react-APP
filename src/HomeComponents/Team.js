import React from 'react'
import '../static/css/Team.css'
import Fade from 'react-reveal/Fade';
import Avni from '../static/images/avni_khurana.jpg'
import ekta from '../static/images/ekta_chahar.jpg'
import arif from '../static/images/arif_khan.jpg'
// import P_r_head from '../static/images/p-r-head.jpg'
// import instagram from '../static/images/instam.png'
import plus from '../static/images/plus.png'
export default function Team() {
  return (
    <>
    <div class="container mt-5 mb-5 head">
                <h2>TEAM AKSHAR MAHOTSAV</h2>
                <div className="row mt-5 mb-5">
                    <Fade bottom duration={2000}>
                        <div className="col-sm-4 border ">
                            <div className="container-fluid name">
                                <div class="container1">
                                    <img className='person_img1' src={Avni} alt="" />
                                    <div class="middle">
                                        <div class="text1">
                                            <div className="icon">
                                                <img className='insta' src={plus} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                Avni Khurana
                                </p>
                                <h4>
                                ( Social Media Specialist )
                                </h4>
                            </div>

                        </div>
                    </Fade>
                    <Fade bottom duration={2500}>
                    <div className="col-sm-4 border ">
                        <div className="container-fluid name">
                            <div class="container1">
                                <img className='person_img1' src={ekta} alt="" />
                                <div class="middle">
                                    <div class="text1">
                                        <div className="icon">
                                            <img className='insta' src={plus} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>
                            Ekta Chahar
                            </p>
                            <h4 className='text-center'>
                            ( Treasurer Akshar Mahotsav )
                            </h4>
                        </div>
                    </div>
                    </Fade>
                    <Fade bottom duration={3000}>
                    <div className="col-sm-4 border ">
                        <div className="container-fluid name">
                            <div class="container1">
                                <img className='person_img1' src={arif} alt="" />
                                <div class="middle">
                                    <div class="text1">
                                        <div className="icon">
                                            <img className='insta' src={plus} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>
                            Arif Khan
                            </p>
                            <h4>
                            ( Student Coordinator )
                            </h4>
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>
    </>
  )
}
