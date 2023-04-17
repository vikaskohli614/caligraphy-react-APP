import React from 'react';
import Slide from 'react-reveal/Slide';
import '../static/css/Celebrating.css'
import batch from '../static/images/batch.png'
import hand from '../static/images/images.png'
import madal from '../static/images/madal.jpg'
export default function Celebrating() {
    return (
        <>
            <div className='container-fluid backgoundss t-5 mt-5'>
                <div className='mt-5' >
                    <h2 className='Headinds'>WHY WE ARE CELEBRATING AKSHAR MAHOTSAV?</h2>
                </div>
                <div className="container mt-5 ">

                    <div className='row '>
                        <Slide left >
                            <div className='sponn1 shadow-lg'>
                                <div>
                                    <img className='imageshigh' src={batch} alt="" />
                                    <div className='mt-2'>
                                        <h4>To Connect</h4>
                                    </div>
                                    <div className='together'>
                                        <h5 className='text-center textfonts'>
                                            We are bringing together calligraphers from all over India.
                                            Our goal is to foster a strong calligraphy community and connect them with artists
                                            from various disciplines. We currently have a chain of calligraphers connecting
                                            from all over our country, practicing various scripts.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <div className='sponn1 shadow-lg'>
                            <div>
                                <img className='imageshigh' src={hand} alt="" />
                                <div className='mt-2'>
                                    <h4>To Share</h4>
                                </div>
                                <div className='together'>
                                    <h5 className='text-center textfonts'>
                                        For a thorough study of the scripts, we are attempting to provide comprehensive
                                        materials. It encompasses knowledge of the origins, development, and shifting
                                        functions of diverse scripts from antiquityto the present.
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <Slide right >
                        <div className='sponn1 shadow-lg'>
                            <div>
                                <img className='imageshigh' src={madal} alt="" />
                                <div className='mt-2'>
                                    <h4>To Inspire</h4>
                                </div>
                                <div className='together'>
                                    <h5 className='text-center textfonts'>
                                        Inspiration, in our opinion requires connection. We want to bridge the gap
                                        between youth and the masters . We have a committed council of honorary members
                                        who are the pioneers in this industry and a great source of inspiration & direction.
                                    </h5>
                                </div>
                            </div>
                        </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </>
    )
}
