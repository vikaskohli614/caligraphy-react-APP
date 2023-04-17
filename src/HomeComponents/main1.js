import React from 'react'
import Middle from './middle';
import '../static/css/main1.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
// import landing_logo from '../static/images/landing_logo.png';
import landing_logo from '../static/logo/Asset 2tcf.png';
// import landing from '../static/images/landing-1.png';
import landing from '../static/image/IMG_4573.jpg';
// import landing2 from '../static/images/landing-2.png';
import landing2 from '../static/image/IMG_4574.png';
// import landing3 from '../static/image/IMG_4588.png';
import landing3 from '../static/image/IMG_4588.png';
// import landing4 from '../static/images/landing-4.png';
import landing4 from '../static/image/IMG_4588.png';
// import landing5 from '../static/images/landing-5.png';
import landing5 from '../static/image/IMG_4622.png';
// import landing6 from '../static/images/landing-6.png';
// import landing7 from '../static/images/landing-7.png';
import landing7 from '../static/image/IMG_4642.png';
import landing8 from '../static/image/IMG_4607.png'
// import landing9 from '../static/images/landing-9.png';
import landing9 from '../static/image/IMG_4611.png';
// import landing10 from '../static/images/landing-10.png';
import landing10 from '../static/image/IMG_4627.png';
// import landing11 from '../static/images/landing-11.png';
import landing11 from '../static/image/IMG_4635.png';
// import landing12 from '../static/images/landing-12.png';
import landing12 from '../static/image/IMG_4605.png';
import Person from './Person';
import Upcoming_event from './Upcoming_event'





export default function Main(props) {
    return (
        <>
            {/* <Header title="The Calligraphy Foundation" searchbar={true} /> */}
            <div className='pagebackground container-fluid'>
                <div className="parent">
                    {/* <Zoom>
                        <div className="logo_name">
                            <p className='landing0'>The Calligraphy Foundation</p>
                        </div>
                    </Zoom> */}
                    <Bounce top duration={1000}>
                        <div className='red'>
                            <img className='landing' src={landing_logo} alt=''></img>
                        </div>
                    </Bounce>
                    <Fade left duration={2500} >
                        <div className="green ">
                            <img className='landing1' src={landing} alt=''></img>
                        </div>
                    </Fade>
                    <Fade left duration={2500} >
                        <div className='blue'>
                            <img className='landing2' src={landing2} alt=''></img>
                        </div>
                    </Fade>
                    <Fade left duration={2500}>
                        <div className='yello'>
                            <img className='landing3' src={landing3} alt=''></img>
                        </div>
                    </Fade>
                    <Zoom duration={2500}>
                        <div className='orange'>
                            <img className='landing2' src={landing4} alt=''></img>
                        </div>
                    </Zoom>
                    <Zoom duration={2500}>
                        <div className='pink'>
                            <img className='landing5' src={landing5} alt=''></img>
                        </div>
                    </Zoom>
                    {/* <Zoom duration={2500}>
                        <div className='white'>
                            <img className='landing6' src={landing6} alt=''></img>
                        </div>
                    </Zoom> */}
                    <Zoom duration={2500}>
                        <div className='grey'>
                            <img className='landing7' src={landing7} alt=''></img>
                        </div>
                    </Zoom>
                    <Zoom duration={2500}>
                        <div className='skyblue'>
                            <img className='landing8' src={landing8} alt=''></img>
                        </div>
                    </Zoom>
                    <Zoom duration={2500}>
                        <div className='purple'>
                            <img className='landing1' src={landing9} alt=''></img>
                        </div>
                    </Zoom>
                    <Zoom duration={2500}>
                        <div className='brown'>
                            <img className='landing5' src={landing10} alt=''></img>
                        </div>
                    </Zoom>
                    <Fade right duration={2500}>
                        <div className='black'>
                            <img className='landing11' src={landing11} alt=''></img>
                        </div>
                    </Fade>
                    <Fade right duration={2500}>
                        <div className='puce'>
                            <img className=' landing5 landing12 ' src={landing12} alt=''></img>
                        </div>
                    </Fade>
                </div>
            </div>
            <Middle />
            <Person/>
            <Upcoming_event/>
        </>
    )
}
