import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import '../static/css/Join_callichapter.js.css';
export default function Join_callichapter() {
  return (
    <>
    <>
      <div className='container-fluid mb-1 shadow mt-1'>
        <div className='col-sm-12'>
          <div className='container vault'>
            {/* <p className='vault1'>Inner Pages</p> */}
            <p className='vault2'>An Initiative To Create Region Wise Groups</p>
            <p className='vault3'>Smaller Calligraphy communities in our own region can help us connect in a better way as we can penetrate pan India and spread a word about<br />
            Calligraphy. Each Calli – Chapter has it’s own Community manager who will help the members in connecting with each other and the Foundation.<br />
            Community Manager will work on organising meet-up, talks and workshops in their own region.</p>

            <div className='vcard'>
              <Slide duration={3000} left><div className='vcard1'><p>Bengluru</p><img src='bengluru.jpeg'></img></div> </Slide>
              <Slide duration={2500} left><div className='vcard1'><p>Chennai</p><img src='chennai.jpeg'></img></div></Slide>
              <Slide duration={2500} right><div className='vcard1'><p>Delhi NCR</p><img src='delhi.jpeg'></img></div></Slide>
              <Slide duration={3000} right><div className='vcard1'><p>Estern India</p><img src='esternindia.jpeg'></img></div></Slide>
            </div>

            <div className='vcard'>
            <Slide duration={3000} left><div className='vcard1'><p>Gujrat</p><img src='gujrat.jpeg'></img></div></Slide>
            <Slide duration={2500} left><div className='vcard1'><p>Hyderabad</p><img src='htderabad.jpeg'></img></div></Slide>
            <Slide duration={2500} right><div className='vcard1'><p>Jammu&Kashmir</p><img src='jammu.jpeg'></img></div></Slide>
            <Slide duration={3000} right><div className='vcard1'><p>kerela</p><img src='kerela.jpeg'></img></div></Slide>
            </div>

            <div className='vcard'>
            <Slide duration={3000} left><div className='vcard1'><p>Kolkata</p><img src='kolkata.jpeg'></img></div></Slide>
            <Slide duration={2500} left><div className='vcard1'><p>Maharastra</p><img src='maharastra.jpeg'></img></div></Slide>
            <Slide duration={2500} right><div className='vcard1'><p>Manipal</p><img src='manipal.jpeg'></img></div></Slide>
            <Slide duration={3000} right><div className='vcard1'><p>Mumbai</p><img src='mumbai.jpeg'></img></div></Slide>
            </div>

            <div className='vcard'>
            <Slide duration={3000} left><div className='vcard1'><p>Odisha</p><img src='odisha.jpeg'></img></div></Slide>
            <Slide duration={2500} left><div className='vcard1'><p>Punjab</p><img src='punjab.jpeg'></img></div></Slide>
            <Slide duration={2500} right><div className='vcard1'><p>Rajasthan</p><img src='rajasthan.jpeg'></img></div></Slide>
            <Slide duration={3000} right><div className='vcard1'><p>Uttar Pradesh</p><img src='up.jpeg'></img></div></Slide>
            </div>

          </div>
        </div>
      </div>
    </>
    </>
  )
}
