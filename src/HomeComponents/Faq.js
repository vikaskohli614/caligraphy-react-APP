import React, { useState } from 'react';
import '../static/css/Tcf_form.css';

// import { useState } from 'react';
import Faq from "react-faq-component";
const data = {
    title: "Frequently Asked Questions",
    rows: [
        {
            title: "What is 'The Calligraphy Foundation'?",
            content: 'The Calligraphy Foundation is a National Trust which works towards the cause of Calligraphy.',
        },
        {
            title: "Is 'The Calligraphy Foundation' registered?",
            content: "Yes, the foundation is registered as a National Trust under INDIAN TRUST ACT 1882.",
        },
        {
            title: "What are Callichapter?",
            content: "Calli-chapter is an initiative to create region wise  groups to connect with the community.",
        },
        {
            title: "Who all can learn Calligraphy?",
            content: "Anyone who has an inclination towards this art form can learn it.",
        },
        {
            title: "How 'The Calligraphy Foundation' works?",
            content: "The Calligraphy Foundation organizes Events, Workshops, Meet-ups awareness programmes and talks about different topics of Calligraphy.",
        },
        {
            title: " What benefits will calligraphers get from the foundation?",
            content: 'Calligraphers will get an opportunity to connect with the community and share and gain knowledge from like-minded people. ',
        },
        {
            title: " What are the benefits of Callichapter?",
            content: 'Smaller Calligraphy communities in our own region can help us connect in a better way as we can reach pan India and spread a word about Calligraphy.',
        },
    ],
};

const styles = {
    bgColor: '#6c757d',
    titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: 'white',
    arrowColor: "white",
};

const config = {
    animate: true,
    // arrowIcon: "",
    tabFocus: true

};
export default function Faqs() {
    const [Name, setName] = useState("");
    const [number, setnumber] = useState("");
    const [Email, setEmail] = useState("");
    const [Scripts_you_teach, setScripts_you_teach] = useState("");
    const [Scripts_you_know, setScripts_you_know] = useState("");
    const [Address, setAddress] = useState("");


    const postUser = () => {
        let item = { Name, number, Email, Scripts_you_teach, Scripts_you_know, Address }
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
            'http://127.0.0.1:8000/Tcf_instructor/',
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
        setnumber('');
        setEmail('');
        setScripts_you_teach('');
        setScripts_you_know('');
        setAddress('');
        alert("Thanks, For Submitting The Form we will get back to you shortly")
    };
    return (
        <>
            <div class="container-fluid mt-5">
                <div className="row ">
                    <div className="col-sm-6 ">
                        <div className='container bg-secondary p-4 rounded'>
                            <Faq
                                data={data}
                                styles={styles}
                                config={config}
                            />
                        </div>
                        {/* <h3>Frequently Asked Questions</h3>
                        <div className="text-start p-5">
                            <br />
                            <h5>+ What is "The Calligraphy Foundation"?</h5>
                            <br />
                            <h5>+ Is “The Calligraphy Foundation" registered?</h5>
                            <br />
                            <h5>+ What are Callichapter?</h5>
                            <br />
                            <h5>+ Who all can learn Calligraphy?</h5>
                            <br />
                            <h5>+ How "The Calligraphy Foundation" works?</h5>
                            <br />
                            <h5>+ What benefits will calligraphers get from the foundation?</h5>
                            <br />
                            <h5>+ What are the benefits of Callichapter?</h5>
                        </div> */}
                    </div>
                    <div className="col-sm-6 maddamform ">
                        <div className="">
                            <div className="form h-100 contact-wrap1 p-5">
                                <h4 className='text-light '>Register as TCF Instructor</h4>
                                <form className="mb-2 faq needs-validation" onSubmit={handleSubmit} id="contactForm" name="contactForm" noValidate="novalidate" novalidate>
                                    <div className="row ">
                                        <div className="col-md-6 form-group mb-5  text-start">
                                            <label htmlFor="validationCustom01" className="col-form-label text-light">
                                                Full Name *
                                            </label>
                                            <input type="text" value={Name} onChange={(e) => { setName(e.target.value) }} className="form-control " name="Name" id="validationCustom01" placeholder="Your name" required />
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-6 form-group mb-5 text-start">
                                            <label htmlFor="" className="col-form-label text-light">
                                                Number *
                                            </label>
                                            <input type="text" value={number} onChange={(e) => { setnumber(e.target.value) }} className="form-control" name="number" id="number" placeholder="Your number"  required />
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div>                                        
                                        </div>
                                        <div className="col-md-6 form-group mb-5 text-start">
                                            <label htmlFor="" className="col-form-label text-light">
                                                Email *
                                            </label>
                                            <input type="email" value={Email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" name="Email" id="email" placeholder="Your email"  required/>
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div> 
                                        </div>
                                        <div className="col-md-6 form-group mb-5 text-start">
                                            <label htmlFor="" className="col-form-label text-light">
                                                Script You know *
                                            </label>
                                            <input type="text" value={Scripts_you_know} onChange={(e) => { setScripts_you_know(e.target.value) }} className="form-control" name="Scripts_you_know" id="name" placeholder="Script You know"  required />
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div> 
                                        </div>
                                        <div className="col-md-6 form-group mb-5 text-start">
                                            <label htmlFor="" className="col-form-label text-light">
                                                Script You Teach *
                                            </label>
                                            <input type="text" value={Scripts_you_teach} onChange={(e) => { setScripts_you_teach(e.target.value) }} className="form-control" name="Scripts_you_teach" id="name" placeholder="Script You Teach" required />
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div> 
                                        </div>
                                        <div className="col-md-6 form-group mb-5 text-start">
                                            <label htmlFor="" className="col-form-label text-light">
                                                Address With Pincode *
                                            </label>
                                            <input type="text" value={Address} onChange={(e) => { setAddress(e.target.value) }} className="form-control" name="Address" id="number" placeholder="Address With Pincode "  required />
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div> 
                                        </div>
                                        <div className="pt-4">
                                            <div className="col-md-5 form-group text-start">
                                                <button type="submit" onClick={postUser} defaultValue="Send Message" className="btn btn-block btn btn-info rounded-0 py-2 px-4 text-light" >Send</button>
                                                <span className="submitting" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
