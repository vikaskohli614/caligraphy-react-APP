import React from 'react'
import '../static/css/person.css'
import Fade from 'react-reveal/Fade';
import chairperson from '../static/images/chairperson.jpg'
import Art_director from '../static/images/art-director.jpg'
import Graphic_designer from '../static/images/graphic-designer.jpg'
import P_r_head from '../static/images/p-r-head.jpg'
import instagram from '../static/images/instam.png'
export default function Person() {
    return (
        <>
            <div class="container mt-5 head1">
                <h2>Core Members</h2>
                <div className="row mt-5 mb-5">
                    <Fade bottom duration={2000}>
                        <div className="col-sm-3  ">
                            <div className="container-fluid name1">
                                <div class="container1 leftrigth">
                                    <img className='person_img' src={chairperson} alt="" />
                                    <div class="middle">
                                        <div class="text">
                                            <div className="icon">
                                                <img className='insta1' src={instagram} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    RAGHUNITA GUPTA
                                </p>
                                <h4>
                                    Chairperson
                                </h4>
                            </div>

                        </div>
                    </Fade>
                    <Fade bottom duration={2500}>
                    <div className="col-sm-3  ">
                        <div className="container-fluid name1">
                            <div class="container1 leftrigth">
                                <img className='person_img' src={Art_director} alt="" />
                                <div class="middle">
                                    <div class="text">
                                        <div className="icon">
                                            <img className='insta1' src={instagram} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>
                                RAJEEV KHARE
                            </p>
                            <h4 className='text-center'>
                                Art Director
                            </h4>
                        </div>
                    </div>
                    </Fade>
                    <Fade bottom duration={3000}>
                    <div className="col-sm-3 ">
                        <div className="container-fluid name1">
                            <div class="container1 leftrigth">
                                <img className='person_img' src={Graphic_designer} alt="" />
                                <div class="middle">
                                    <div class="text">
                                        <div className="icon">
                                            <img className='insta1' src={instagram} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>
                                HARDIK SINGH
                            </p>
                            <h4>
                                Graphic Designer
                            </h4>
                        </div>
                    </div>
                    </Fade>
                    <Fade bottom duration={3500}>
                    <div className="col-sm-3  ">
                        <div className="container-fluid name1">
                            <div class="container1 leftrigth">
                                <img className='person_img' src={P_r_head} alt="" />
                                <div class="middle">
                                    <div class="text">
                                        <div className="icon">
                                            <img className='insta1' src={instagram} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>
                                ABHISHEK VARDHAN
                            </p>
                            <h4 className='text-center'>
                                P R Head
                            </h4>
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>
        </>
    )
}
