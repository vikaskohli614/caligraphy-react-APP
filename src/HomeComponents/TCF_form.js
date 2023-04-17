import React, { useState } from 'react'
import { Fade } from 'react-reveal'
// import { FiPlus } from "react-icons/fi";
import '../static/css/Tcf_form.css'
import image from '../static/image/IMG_46677.jpg'
export default function Mentorform() {
    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");
    const [Gender, setGender] = useState("");
    const [Membership_no, setMembership_no] = useState("");
    const [PAN_Card, setPAN_Card] = useState("");
    const [Phone_no, setPhone_no] = useState("");
    const [Email, setEmail] = useState("");
    const [Social_media, setSocial_media] = useState("");
    const [Educational_qualification, setEducational_qualification] = useState("");
    const [Prefered_way_of_workshop, setPrefered_way_of_workshop] = useState("");
    const [Preferred_location, setPreferred_location] = useState("");
    const [Scripts_you_teach, setScripts_you_teach] = useState("");
    // const [Upload_exemplar, setUpload_exemplar] = useState("");
    const [Teaching_experience, setTeaching_experience] = useState("");
    const [Certified_calligrapher, setCertified_calligrapher] = useState("");
    // const [Certificate_of_calligraphy, setCertificate_of_calligraphy] = useState("");
    const [associated_other, setassociated_other] = useState("");
    var selectedFile = null
    var selectedFiles = null

    const postUser = () => {
        const formData = new FormData();

        // formData.append("Your_portfolio", selectedFile);
        formData.append("Name", Name);
        formData.append("Age", Age);
        formData.append("Gender", Gender);
        formData.append("Membership_no", Membership_no);
        formData.append("PAN_Card", PAN_Card);
        formData.append("Phone_no", Phone_no);
        formData.append("Email", Email);
        formData.append("Social_media", Social_media);
        formData.append("Educational_qualification", Educational_qualification);
        formData.append("Prefered_way_of_workshop", Prefered_way_of_workshop);
        formData.append("Preferred_location", Preferred_location);
        formData.append("Scripts_you_teach", Scripts_you_teach);
        formData.append("Teaching_experience", Teaching_experience);
        formData.append("Certified_calligrapher", Certified_calligrapher);
        formData.append("associated_other", associated_other);
        formData.append("Upload_exemplar", selectedFile);
        formData.append("Certificate_of_calligraphy", selectedFiles);
        console.log(formData);

        const requestOptions = {
            method: 'POST',
            body: formData
        };
        fetch(
            'http://127.0.0.1:8000/Mentorform/',
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

      var onFileChanges = (e) => {

        selectedFiles= e.target.files[0];
        console.log(selectedFiles);
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
        setScripts_you_teach('');
        setPrefered_way_of_workshop('');
        setMembership_no('');
        setCertified_calligrapher('');
        setEducational_qualification('');
        setPreferred_location('');
        setSocial_media('');
        setTeaching_experience('');
        setassociated_other('');
        alert("Thanks, For Submitting The Form we will get back to you shortly")
    };

    return (
        <>
            <div className='container-fluid mt-4 background'>
                <div className='row'>
                <Fade left duration={2000} >
                    <div className='col-sm-6'>
                        <img className='imgs' src={image} alt="" />
                    </div>
                    </Fade>
                    <Fade right duration={2000} >
                    <div className='col-sm-6 marrrtop'>
                        <div className=" row align-items-stretch justify-content-center ">
                            <div className="col-sm-12">
                                <div className="form h-100 contact-wrap p-5">
                                    <h3 className="text-center maintext">Mentor Form</h3>
                                    <form className="mb-2 text-start needs-validation" onSubmit={handleSubmit} id="contactForm" name="contactForm" noValidate="novalidate" >
                                        <div className="row text-start">
                                            <div className="col-md-6 form-group mb-3">
                                                <label htmlFor="" className="col-form-label">
                                                    Full Name *
                                                </label>
                                                <input type="text" value={Name} onChange={(e) => setName(e.target.value)} className="form-control" name="Name" id="name" placeholder="Your name"  />
                                            </div>
                                            <div className="col-md-6 form-group mb-3">
                                                <label htmlFor="" className="col-form-label">
                                                    Age *
                                                </label>
                                                <input type="text" value={Age} onChange={(e) => setAge(e.target.value)} className="form-control" name="Age" id="age" placeholder="Your age" />
                                            </div >
                                            <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="exampleDataList" className="col-form-label">
                                                Gender *
                                            </label>
                                            <input className="form-control" value={Gender} onChange={(e)=>setGender(e.target.value)} aria-label="Default select example" placeholder='Male/Female'/>
                                        </div>
                                            <div className="col-md-6 form-group mb-3">
                                                <label htmlFor="" className="col-form-label">
                                                    Membership number *
                                                </label>
                                                <input type="text" value={Membership_no} onChange={(e) => setMembership_no(e.target.value)} className="form-control" name="Membership_no" id="number" placeholder="Your Membership number" />
                                            </div>
                                            <div className="col-md-6 form-group mb-3">
                                                <label htmlFor="" className="col-form-label">
                                                    PANcard number *
                                                </label>
                                                <input type="text" value={PAN_Card} onChange={(e) => setPAN_Card(e.target.value)} className="form-control" name="PAN_Card" id="number" placeholder="Your PANcard number" />
                                            </div>
                                            <div className="col-md-6 form-group mb-3">
                                                <label htmlFor="" className="col-form-label">
                                                    Number *
                                                </label>
                                                <input type="text" value={Phone_no} onChange={(e) => setPhone_no(e.target.value)} className="form-control" name="Phone_no" id="number" placeholder="Your number"  />
                                            </div>
                                            <div className="col-md-6 form-group mb-3">
                                                <label htmlFor="" className="col-form-label">
                                                    Email *
                                                </label>
                                                <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} className="form-control" name="Email" id="email" placeholder="Your email" />
                                            </div>
                                            <div className="col-md-6 form-group mb-3">
                                                <label htmlFor="" className="col-form-label">
                                                    Social media link *
                                                </label>
                                                <input type="email" value={Social_media} onChange={(e) => setSocial_media(e.target.value)} className="form-control" name="Social_media" id="email" placeholder="Social media link" />
                                            </div>
                                            <div className="col-md-6 form-group mb-3">
                                                <label htmlFor="" className="col-form-label">
                                                    Educational qualification
                                                </label>
                                                <input type="text" value={Educational_qualification} onChange={(e) => setEducational_qualification(e.target.value)} className="form-control" name="Educational_qualification" id="name" placeholder="Education" />
                                            </div>
                                            <div className="col-md-6 form-group mb-3">
                                                <label htmlFor="exampleDataList" className="col-form-label">
                                                    Prefered way of workshop? *
                                                </label>
                                                <input type="text" value={Prefered_way_of_workshop} onChange={(e) => setPrefered_way_of_workshop(e.target.value)} className="form-control" name="Preferred_location" id="name" placeholder="Online/Offline" />
                                            </div>
                                            <div className="col-md-6 form-group mb-3">
                                                <label htmlFor="" className="col-form-label">
                                                    Script You Teach *
                                                </label>
                                                <input value={Scripts_you_teach} onChange={(e) => setScripts_you_teach(e.target.value)} type="text" className="form-control" name="Scripts_you_teach" id="name" placeholder="Script You Teach" />
                                            </div>
                                            <div className="col-md-6 form-group mb-3">
                                                <label htmlFor="exampleDataList" className="col-form-label">
                                                Are you a certified calligrapher ? 
                                                </label>
                                                <input value={Certified_calligrapher} onChange={(e) => setCertified_calligrapher(e.target.value)} type="text" className="form-control" name="Certified_calligrapher" id="name" placeholder="Yes/No" />
                                                {/* <select className="form-control" aria-label="Default select example">
                                                <option selected="">Select</option>
                                                <option value={1}>Yes</option>
                                                <option value={2}>No</option>
                                            </select> */}
                                            </div>
                                            <div className="col-md-6 form-group mb-3">
                                                <label htmlFor="" className="col-form-label">
                                                Teaching experience in calligraphy  *
                                                </label>
                                                <input type="text" value={Teaching_experience} onChange={(e) => setTeaching_experience(e.target.value)} className="form-control" name="Teaching_experience" id="number" placeholder="Your experience in years" />
                                            </div>
                                            <div className="col-md-6 form-group mb-3">
                                                <label htmlFor="" className="col-form-label">
                                                Are you associated with any other org ?
                                                </label>
                                                <input type="text" value={associated_other} onChange={(e) => setassociated_other(e.target.value)} className="form-control" name="associated_other" id="name" placeholder="Are you associated with any other org ?" />
                                            </div>
                                            <div className="col-md-12 form-group mb-3">
                                                <div className="mb-3">
                                                    <label htmlFor="formFileSm" className="col-form-label">
                                                    Upload your certificate of calligraphy -
                                                    </label>
                                                    <input onChange={onFileChange} className="form-control form-control-sm" name="Certificate_of_calligraphy"  id="formFileSm" type="file" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 form-group mb-3">
                                                <div className="mb-3">
                                                    <label htmlFor="formFileSm" className="col-form-label">
                                                    Upload exemplar of the script - pdf format
                                                    </label>
                                                    <input onChange={onFileChanges} className="form-control form-control-sm" name='Upload_exemplar' id="formFileSm" type="file" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="col-md-12 form-group mb-3 text-start">
                                                <label htmlFor="message" className="col-form-label">
                                                    What is your preferred location for offline workshop ? -
                                                </label>
                                                <textarea className="form-control" value={Preferred_location} onChange={(e) => setPreferred_location(e.target.value)} name="Preferred_location" id="message" cols={30} rows={4} placeholder="Address With Pincode " />
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-md-5 form-group text-center">
                                                <button type="submit" onClick={postUser} defaultValue="Send Message" className="btn btn-block btn btn-info rounded-0 py-2 px-4" >Send</button>
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
                    </Fade>
                </div>
            </div>
        </>
    )
}
