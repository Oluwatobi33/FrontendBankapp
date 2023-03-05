import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <hr style={{ borderTop: "3px solid rgba(0,0,0,.1)" }} />
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-lg-6 ">
                        <img className='ms-4 pt-2 float-start' src='https://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg' style={{ width: "100px" }} />
                    </div>
                    <div className="col-lg-6 pb-4">
                        <p  className='float-end' style={{ fontSize: "14px", color: "color: #353f50" }}>© 2002 - 2020 Interswitch Group.</p>
                    </div>
                </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 text-center">
                            <ul style={{ listStyleType: "none", display: "flex" }} className='px-5 icon'>

                                <li><a href='https://twitter.com/InterswitchGRP'></a><FaInstagram /></li>
                                <li><a href='https://www.facebook.com/InterswitchGroup'><FaTwitter /></a></li>
                                <li><a href='https://www.instagram.com/interswitchgroup/?hl=en'> <FaFacebook /> </a></li>
                                <li><a href='https://www.youtube.com/user/Interswitch'><FaLinkedinIn /></a></li>
                            </ul>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Footer