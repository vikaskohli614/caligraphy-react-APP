import React from 'react'
import '../static/css/Schedule.css';
import Chairperson from '../static/images/chairperson.jpg'
import artdirector from '../static/images/art-director.jpg'
import prhead from '../static/images/p-r-head.jpg'
import Slide from 'react-reveal/Slide';

export default function Schedule() {
    return (
        <>
            <div className='container-fluid  mt-5'>
                <div class="container">
                    <Slide right duration={2000}>
                        <div className="container">
                            <div class="row mt-5 border imagesradius1 text-center bg-light shadow-lg">
                                <div class="col-sm ">
                                    <img src={Chairperson} class=" imgaesaas imagesradius mt-3" alt="..." />
                                    <h6>Raghunita Gupta</h6>
                                    <p>(Chairperson)</p>
                                </div>
                                <div class="col-sm paddd ">
                                    <p className='mt-4 textsize text-start'>Raghunita Gupta is an Indian calligrapher Owner of Raghunita.com,
                                        a popular online store, for exclusive and assured quality Calligraphy essentials.
                                        She took up calligraphy in 2017 along with her business of IT industry.
                                        <br />
                                        She started Calligraphy with Brushpen lettering and that made her realize that she
                                        was made for this magical artform. Since then, She decided to learn it through
                                        ‘Gurus’ of the Art and her new journey into the world of calligraphy started.
                                        She has learnt the various form of calligraphy under various Indian and Foreign
                                        reputed and talented people/masters.
                                        <br />
                                        In April 2020 she decided to step in to the industry with full strength and
                                        worked with the beginners, Intermediate and Masters of Indian Calligraphy Artists.
                                        Her vast experience of 19 years into the Sales with a known brand Canon India has
                                        been very handy in working in for solution selling in Calligraphy community in
                                        India.</p>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <Slide left duration={2000}>
                        <div className="container">
                            <div class="row mt-5 border imagesradius1 bg-light shadow-lg">
                                <div class="col-sm paddd1">
                                    <p className='mt-4 text-start textsize'>Trained under the renowned calligrapher and father of today’s digital Indian
                                        language typography Prof. R.K. Joshi and Mr. Gopal Bhai Modi, founder of Gujarat
                                        Type Foundry, Mumbai. He has founded VSOFT a type design company as well as worked
                                        with significant groups including the Indian Gov’t.
                                        <br />
                                        Since 1980 he has been using his calligraphy and typography skill in many ways.
                                        In 1980 he used to design calligraphic headlines in Manohar Kahaniyan and Maya
                                        magazine. During his fine arts study period he worked as calligrapher, typographer
                                        and visual artist in many advertising agencies.
                                        <br />
                                        He did his masters from IDC IIT Bombay. In IIT, he learned advance typography and
                                        type design in first semester. In second semester(1989), he designed his first Hindi
                                        font for Dot Matrix Printer. This project was done under Dr. P K Mudur of NCST
                                        Mumbai and R K Joshi. In third semester (1989) he designed IDC Rajeev Normal Hindi
                                        font for laser printer. Target was to develop a mono thickness Hindi font similar
                                        to Helvetica for bilingual text processing. This font was used in corporate
                                        identity of Postal department of Government of India in 1989-90. In fourth
                                        semester there was demand to design the complete family of IDC Rajeev. </p>
                                </div>
                                <div class="col-sm ">
                                    <img src={artdirector} class="imgaesaas imagesradius mt-3" alt="..." />
                                    <h6>Rajeev Prakash Khare</h6>
                                    <p>(Co-Chairperson)</p>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <Slide right duration={2000}>
                        <div className="container">
                            <div class="row mt-5 border imagesradius1 bg-light shadow-lg ">
                                <div class="col-sm ">
                                    <img src={prhead} class="imgaesaas imagesradius mt-3" alt="..." />
                                    <h6>Abhishek Vardhan Singh</h6>
                                    <p>(Organising Secretary)</p>
                                </div>
                                <div class="col-sm paddd ">
                                    <p className='mt-4 text-start textsize'>
                                        P.R. Head of ‘The Calligraphy Foundation’. He has a vision to connect various artists
                                        across India through calligraphy and believes in learning and working together as one.
                                        <br />
                                        Abhishek’s father introduced him to the skill of handwriting at a young age, which
                                        shaped his personality . His journey in the art of calligraphy began in 2016. Broadedge
                                        scripts, notably Black Letter, are his main calligraphy interests, he enjoys experimenting
                                        and making calligrams. He incorporates calligraphy with interiors, architecture and landscapes
                                        in an effort to demonstrate how widely its is used in daily life.
                                        <br />
                                        Apart from Calligraphy, he loves Ancient history. His initial curiosity in history
                                        became into a passion and now he has a master’s degree in Ancient History.
                                        <br />
                                        He believes that Sapiens have utilised art as a storytelling tool since the beginning
                                        of time. He is currently researching the genesis of art through Rock Art.
                                        <br />
                                        Also, He is a founding member of Renaissance, Swami Shraddhanand College’s fine arts
                                        organisation. He has collaborated with various colleges, institutions, and non-governmental
                                        organisations to promote calligraphy and art.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </>
    )
}
