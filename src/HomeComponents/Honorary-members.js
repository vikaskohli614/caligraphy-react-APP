import React from 'react';
import '../static/css/Honorary_members.css'
import Zoom from 'react-reveal/Zoom';

export default function Honorary_members() {
  return (
    <>
      <div className='container-fluid' style={{ backgroundColor: "#1c202b" }}>
        <div className='row'>
        <Zoom left><div className='col-sm-4  hono'><img className='honotv' src='tv.jpg' /><img className='hono1' src='1.jpeg' /></div></Zoom>
          <Zoom top><div className='col-sm-4  hono'><img className='honotv' src='tv.jpg' /><img className='hono1' src='2.jpeg' /></div></Zoom>
          <Zoom right><div className='col-sm-4  hono'><img className='honotv' src='tv.jpg' /><img className='hono1' src='3.jpeg' /></div></Zoom>
          <Zoom left><div className='col-sm-4  hono'><img className='honotv' src='tv.jpg' /><img className='hono1' src='4.jpeg' /></div></Zoom>
          <Zoom top><div className='col-sm-4  hono'><img className='honotv' src='tv.jpg' /><img className='hono1' src='5.jpeg' /></div></Zoom>
          <Zoom right><div className='col-sm-4  hono'><img className='honotv' src='tv.jpg' /><img className='hono1' src='6.jpeg' /></div></Zoom>
          <Zoom left><div className='col-sm-4  hono'><img className='honotv' src='tv.jpg' /><img className='hono1' src='7.jpeg' /></div></Zoom>
        </div>
      </div>
    </>
  )
}
