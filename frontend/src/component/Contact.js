import { emailjs } from 'emailjs-com';
import React from 'react'
import NavBar from './NavBar'
import { useRef } from 'react';
const Contact = () => {
    // const form = useRef();
    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     e.preventDefault();
    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // }
    return (
        <>
            <NavBar />
            <form ref={form} onSubmit={sendEmail}>
                <div className="container">
                    <div className="form-horizontal">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-6">
                                <input type="text" name="name" className="form-control mt-3 mb-3" id="fname" placeholder="Your Name" />
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" />
                            </div>
                        </div>
                        <div className="row justify-content-center my-2">
                            <div className="col-md-12 col-lg-12 text-center">
                                <input type="text" className="form-control mb-3" name="subject" id="subject" placeholder="Subject" />
                                <textarea className="form-control" name="area" rows="5" id="area" placeholder="Message"></textarea>
                                <button type="submit" className="btn btn-danger  mt-3">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Contact
