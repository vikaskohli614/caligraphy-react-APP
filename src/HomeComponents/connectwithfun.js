import React from 'react';
import { useState } from 'react';

export default function Connectwithfun() {
    const [Name, setName] = useState("");
    const [Gender, setGender] = useState("");
    const [Teaching_experience, setTeaching_experience] = useState("");
    const [Phone_no, setPhone_no] = useState();
    const [Age, setAge] = useState("");
    const [Email, setEmail] = useState("");
    const [PAN_Card, setPAN_Card] = useState("");
    const [Membership_no, setMembership_no] = useState("")
    const [Social_media, setSocial_media] = useState("");
    // const [Your_portfolio, setYour_portfolio] = useState("");
    const [Per_hour_rate, setPer_hour_rate] = useState("");
    var selectedFile = null
    

    const postUser = () => {
        const formData = new FormData();

        formData.append("Your_portfolio", selectedFile);
        formData.append("Name", Name);
        formData.append("Gender", Gender);
        formData.append("Teaching_experience", Teaching_experience);
        formData.append("Phone_no", Phone_no);
        formData.append("Age", Age);
        formData.append("Email", Email);
        formData.append("PAN_Card", PAN_Card);
        formData.append("Membership_no", Membership_no);
        formData.append("Social_media", Social_media);
        formData.append("Per_hour_rate", Per_hour_rate);
        console.log(formData);

        const requestOptions = {
            method: 'POST',
            body: formData
        };
        fetch(
            'http://127.0.0.1:8000/Connect_with_Foundationform/',
            requestOptions,
        )
            .then(detail => detail.json())
            .then(resp => {
                if (resp) {
                    console.log('item post', resp);
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    var onFileChange = (e) => {

        selectedFile= e.target.files[0];
        console.log(selectedFile);
      };
      const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault(); // 👈️ prevent page refresh

        // 👇️ clear all input values in the form
        setName('');
        setAge('');
        setEmail('');
        setPhone_no('');
        setPAN_Card('');
        setMembership_no('');
        setSocial_media('');
        setTeaching_experience('');
        setGender('');
        setPer_hour_rate('');
        alert("Thanks, For Submitting The Form we will get back to you shortly")
    };
    return (
        <>
            <div className='container-fluid background bg-dark '>
                <div className="row align-items-stretch justify-content-center ">
                    <div className="col-sm-10">
                        <div className="">
                            <div className="form h-100 contact-wrap formpadd">
                                <h3 className="text-center maintext">Connect with Foundation</h3>
                                <form onSubmit={handleSubmit} className="mb-2" method="" id="contactForm" name="contactForm" noValidate="novalidate" >
                                    <div className="row">
                                        <div className="col-md-10 form-group mb-3">
                                            <label htmlFor="" className="col-form-label">
                                                Full Name *
                                            </label>
                                            <input type="text" className="form-control" name="Name" id="name" placeholder="Your name" value={Name} onChange={(e) => setName(e.target.value)}/>
                                        </div>
                                        <div className="col-md-10 form-group mb-3">
                                            <label htmlFor="" className="col-form-label">
                                                Age *
                                            </label>
                                            <input type="text" className="form-control" name="Age" id="age" placeholder="Your age" value={Age} onChange={(e) => setAge(e.target.value)} />
                                        </div >
                                        <div className="col-md-10 form-group mb-3">
                                            <label htmlFor="exampleDataList" className="col-form-label">
                                                Gender *
                                            </label>
                                            <input value={Gender} onChange={(e) => setGender(e.target.value)} className="form-control" aria-label="Default select example" placeholder='Male/Female'/>
                                        </div>
                                        <div className="col-md-10 form-group mb-3">
                                            <label htmlFor="" className="col-form-label">
                                                Email *
                                            </label>
                                            <input type="email" className="form-control" name="Email" id="email" placeholder="Your email" value={Email} onChange={(e) => setEmail(e.target.value)}/>
                                        </div>
                                        <div className="col-md-10 form-group mb-3">
                                            <label htmlFor="" className="col-form-label">
                                                Number *
                                            </label>
                                            <input type="text" className="form-control" name="Phone_no" id="number" placeholder="Your number" value={Phone_no} onChange={(e) => setPhone_no(e.target.value)}/>
                                        </div>
                                        <div className="col-md-10 form-group mb-3">
                                            <label htmlFor="message" className="col-form-label">
                                                Membership Number
                                            </label>
                                            <input type="text" className="form-control" name="Membership_no" id="name" placeholder="Membership Number" value={Membership_no} onChange={(e) => setMembership_no(e.target.value)}/>
                                        </div>
                                        <div className="col-md-10 form-group mb-3">
                                            <label htmlFor="" className="col-form-label">
                                                PANcard number *
                                            </label>
                                            <input type="text" className="form-control" name="PAN_Card" id="number" placeholder="Your PAN card number" value={PAN_Card} onChange={(e) => setPAN_Card(e.target.value)}/>
                                        </div>
                                        <div className="col-md-10 form-group mb-3">
                                            <label htmlFor="" className="col-form-label">
                                                Social media link *
                                            </label>
                                            <input type="email" className="form-control" name="Social_media" id="email" placeholder="Social media link" value={Social_media} onChange={(e) => setSocial_media(e.target.value)}/>
                                        </div>
                                        <div className="col-md-10 form-group mb-3 text-start">
                                            <label htmlFor="" className="col-form-label">
                                                Scripts you do
                                            </label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Pointed pen calligraphy - copperplate, engrossers, modern, Spencerian
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Broadedge calligraphy - Blackletter, uncial, fraktur, French round hand, roman capital
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Regional scripts - Devanagari, Gurumukhi, Gujarati, Kannada, Marathi
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Brush pen calligraphy
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Handlettering
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Engraving
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-10 form-group mb-3">
                                            <label htmlFor="" className="col-form-label">
                                                Experience *
                                            </label>
                                            <input type="text" className="form-control" name="Teaching_experience" id="number" placeholder="Your experience" value={Teaching_experience} onChange={(e) => setTeaching_experience(e.target.value)}/>
                                        </div>
                                        <div className="col-md-12 form-group mb-3">
                                            <div className="mb-3">
                                                <label htmlFor="formFileSm" className="col-form-label">
                                                    Upload your portfolio ( latest commission work)
                                                </label>
                                                <input onChange={onFileChange}  name='Your_portfolio' className="browse form-control form-control-sm" id="formFileSm" type="file"/>
                                            </div>
                                        </div>
                                        <div className="col-md-10 form-group mb-3">
                                            <label htmlFor="" className="col-form-label">
                                                Per hour rate -
                                            </label>
                                            <input type="text" className="form-control" name="Per_hour_rate" id="number" placeholder=" Per hour rate -" value={Per_hour_rate} onChange={(e) => setPer_hour_rate(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-5 form-group text-center">
                                            <button onClick={postUser} type="submit" defaultValue="Send Message" className="btn btn-block btn btn-info rounded-0 py-2 px-4" >Send</button>
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
