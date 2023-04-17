import React from 'react';
import { Link } from "react-router-dom";
import '../static/css/header.css'
import logo from '../static/logo/Asset_1tcf207.png'
export default function Header(props) {
    return (<>

        <nav className="navbar navbar-expand-lg navbar-light bg-light background ">
            <div className="container-fluid ">
                <img className='navlogo' src={logo} alt="" />
                {/* <a className="navbar-brand px-2 " to="/"><h2>{props.title}</h2></a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navfont" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navpadd ">
                        <li className="nav-item px-2">
                            <Link to='/'><a className="nav-link px-3 active " aria-current="page" to="/">Home</a></Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link px-3" to="/">Features</a>
                        </li> */}
                        <li class="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                Contact us
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link to='/Become_a_member'> <a className="dropdown-item" href="#">Become a member</a></Link>
                                <Link to='/hireform'> <a className="dropdown-item" href="#">Hire a calligrapher</a></Link>
                                <Link to='/calli-chapters'> <a className="dropdown-item" href="#">Join-callichapter</a></Link>
                                <Link to="/TCF_form"> <a className="dropdown-item" href="#">Mentor Form</a></Link>
                                <Link to='/connectwithfun'> <a className="dropdown-item" href="#">Connect with Foundation</a></Link>
                                <Link to='/FAQ'> <a className="dropdown-item" href="#">FAQ & TCF Instructor</a></Link>
                            </div>
                        </li>
                        <li className="nav-item">
                        <Link to='/Workshop'> <a className="nav-link px-3" to="/about">Workshop</a></Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                Event
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link to='/akshar-mahotsav'> <a className="dropdown-item" href="#">Akshar Mahotsav</a></Link>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                            Honorary_member
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link to='/honorary_member'> <a className="dropdown-item" href="#">Member </a></Link>
                            </div>
                        </li>
                    </ul>
                    {props.searchbar ? <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-info" type="submit">Search</button>
                    </form> : ""}
                </div>
            </div>
        </nav>

    </>
    )
}
Header.defaultProps = {
    title: "Your title",
    searchbar: true
}
