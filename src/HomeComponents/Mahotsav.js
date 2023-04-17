import React from 'react'
import Slide from 'react-reveal/Slide';
import '../static/css/Mahotsav.css'
export default function Mahotsav() {
    return (
        <>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-sm-6">
                        <Slide left duration={2000}>
                        <div className="container colli">
                            <h2 className='mt-2 text-dark mahotshav'>CELEBRATION OF LETTERS</h2>
                            <h6 className='text-start mt-3 fonttext lh-base'>
                                The Calligraphy Foundation is a registered organisation (Trust) that promotes calligraphy.
                                The foundation’s primary goal is to work for calligraphy awareness, education, implementation
                                & application. Foundation has organised number of workshops, sessions, and meet-ups across India.
                                <br />
                                <br />
                                Akshar Mahotsav is part of our Awareness project. Foundation believe that
                                as calligraphers, each should be proud and celebrate World Calligraphy Day as a
                                calligraphy festival. The Calligraphy Foundation invites and welcome the entire artist
                                community to come forward and appreciate this beautiful art form while also connecting
                                with one another.
                                <br />

                                Let’s come together to experience the divinity of calligraphy and create some fun memories 😊
                            </h6>
                        </div>
                        </Slide>
                    </div>
                    <div class="col-sm-6">
                    <Slide right duration={2000}>
                        <div className='mt-4'>
                            <img src="akashar.png" className="img-fluid imags2" alt="..."></img>
                        </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </>
    )
}
