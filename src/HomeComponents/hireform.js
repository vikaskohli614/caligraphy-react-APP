import React from 'react';
import { useState } from 'react';
// import { Fade } from 'react-reveal'
import '../static/css/Tcf_form.css'
export default function Hireform() {
    const [Name, setName] = useState("");
    const [Gender, setGender] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone_no, setPhone_no] = useState("");
    const [Location, setLocation] = useState("");
    const [PAN_Card, setPAN_Card] = useState("");
    const [About_the_event, setAbout_the_event] = useState("");
    const [Date, setDate] = useState("");
    const [To_date, setTo_date] = useState("");
    const [hours_per_day, sethours_per_day] = useState("");
    const postUser = () => {
        let item = { Name, Email, Phone_no, Location, PAN_Card, About_the_event, Date, To_date, hours_per_day }
        console.log(item)
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(
                (item)
            ),
        };

        fetch(
            'http://127.0.0.1:8000/Hire_calligrapherform/',
            requestOptions,
        )
            .then(detail => detail.json())
            .then(resp => {
                if (resp) {
                    console.log('item post ', resp)
                }
            })
            .catch(error => {
                console.error(error);
            });
    };
    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault(); // 👈️ prevent page refresh

        // 👇️ clear all input values in the form
        setName('');
        setEmail('');
        setPhone_no('');
        setGender('');
        setLocation('');
        setPAN_Card('');
        setAbout_the_event('');
        setDate('');
        setTo_date('');
        sethours_per_day('');
    };

    return (
        <>
            <div className='container-fluid  background bg-dark '>
                <div className="row align-items-stretch justify-content-center ">
                    <div className="col-sm-10">
                        <div className="">
                            <div className="form h-100 contact-wrap formpadd">
                                <h3 className="text-center maintext">Hire a calligrapher</h3>
                                <form className="mb-2 needs-validation" onSubmit={handleSubmit} id="contactForm" name="contactForm" noValidate="novalidate" novalidate>
                                    <div className="row">
                                        <div className="col-md-10 form-group mb-3 ">
                                            <label htmlFor="validationCustom01" className="col-form-label ">
                                                Full Name *
                                            </label>
                                            <input type="text" value={Name} onChange={(e) => { setName(e.target.value) }} className="form-control" name="Name" id="name" placeholder="Your name" required />
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-10 form-group mb-3">
                                            <label htmlFor="exampleDataList" className="col-form-label">
                                                Gender *
                                            </label>
                                            <select value={Gender} onChange={(e) => { setGender(e.target.value) }} name='Gender' className="form-control" aria-label="Default select example">
                                                <option selected="">Gender</option>
                                                <option value='Male' >Male</option>
                                                <option value='Female'>Female</option>
                                                <option value='Other' >Other</option>
                                            </select>
                                        </div>
                                        <div className="col-md-10 form-group mb-3">
                                            <label htmlFor="" className="col-form-label">
                                                Email *
                                            </label>
                                            <input type="email" value={Email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" name="Email" id="email" placeholder="Your email" required />
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-10 form-group mb-3">
                                            <label htmlFor="" className="col-form-label">
                                                Number *
                                            </label>
                                            <input type="text" value={Phone_no} onChange={(e) => { setPhone_no(e.target.value) }} className="form-control" name="Phone_no" id="number" placeholder="Your number" required />
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-10 form-group mb-3">
                                            <label htmlFor="message" className="col-form-label">
                                                Location
                                            </label>
                                            <input type="text" value={Location} onChange={(e) => { setLocation(e.target.value) }} className="form-control" name="name" id="name" placeholder="city, state, country & pin code" required />
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-10 form-group mb-3">
                                            <label htmlFor="" className="col-form-label">
                                                PANcard number *
                                            </label>
                                            <input type="text" value={PAN_Card} onChange={(e) => { setPAN_Card(e.target.value) }} className="form-control" name="PAN_Card" id="number" placeholder="Your PANcard number" required />
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-10 form-group mb-3 text-start">
                                            <label htmlFor="" className="col-form-label">
                                                Services
                                            </label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Certificate writing
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Envelope addressing
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Wedding calligraphy
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    On site engraving/ calligraphy
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Place cards
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Other
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-10 form-group mb-3">
                                            <label htmlFor="message" className="col-form-label">
                                                Tell us about the event
                                            </label>
                                            <input type="text" value={About_the_event} onChange={(e) => { setAbout_the_event(e.target.value) }} className="form-control" name="About_the_event" id="name" placeholder="Tell us about the event" required />
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="" className="col-form-label">
                                                Duration -
                                            </label>
                                            <label for="startDate">Start</label>
                                            <input id="startDate" value={Date} onChange={(e) => { setDate(e.target.value) }} name='Date' class="form-control" type="date" required />
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="" className="col-form-label">
                                                to -
                                            </label>
                                            <label for="startDate">Start</label>
                                            <input value={To_date} onChange={(e) => { setTo_date(e.target.value) }} name='To_date' id="startDate" class="form-control" type="date" required />
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-10 form-group mb-3">
                                            <label htmlFor="" className="col-form-label">
                                                No. Of hours per day.
                                            </label>
                                            <input type="text" value={hours_per_day} onChange={(e) => { sethours_per_day(e.target.value) }} className="form-control" name="hours_per_day" id="number" placeholder=" No. Of hours per day." required />
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-5 form-group text-center">
                                            <button onClick={postUser} type="submit" defaultValue="Send Message" className="btn btn-block btn btn-info rounded-0 py-2 px-4">Send</button>
                                            <span className="submitting" />
                                        </div>
                                    </div>
                                </form>
                                <div id="form-message-warning mt-4" />
                                <div id="form-message-success">Your message was sent, thank you!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
