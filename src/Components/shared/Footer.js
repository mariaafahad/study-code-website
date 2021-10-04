import React from 'react';
import ReactDOM from "react-dom";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {

    faPhoneVolume,
    faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1>Study coding</h1>
                                <div className="icons-container d-flex text-center ">

                                    <FontAwesomeIcon icon={faInstagramSquare} className="icon" />


                                    <FontAwesomeIcon icon={faTwitterSquare} className="icon" />


                                    <FontAwesomeIcon icon={faYoutube} className="icon" />

                                    <FontAwesomeIcon icon={faFacebookSquare} className="icon" />

                                </div>


                                <p className="mt-5">
                                    <small>Study coding © . All rights reserved.</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <strong>
                                        <Link to="/home"><li className="footer-menu">Home</li></Link>
                                        <Link to="/viewAll"> <li className="footer-menu">Services</li></Link>
                                        <Link to="/about"><li className="footer-menu">About us</li></Link>
                                        <Link to="/contact"> <li className="footer-menu">Contact us</li></Link>
                                        <Link to="/login"><li className="footer-menu"> Sign up</li></Link>
                                    </strong>
                                </ul>

                            </div>
                        </div>
                        <div className="col-md-5 aligin-items-center">
                            <div className="right-footer-container">
                                <h3 style={{ fontSize: "2.5rem" }}>Sign up for the newsletter</h3>
                                <input
                                    className="footer-input"
                                    type="text"
                                    placeholder="Enter Email"
                                />
                                <div className="phone d-flex align-items-center  mt-4">
                                    <div className="foter-phone-icon me-3">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <div>
                                        <h5>+1 8 800 555 35 35</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center ">
                                    <div className="foter-phone-icon  me-3">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                                    </div>
                                    <div>
                                        <p>
                                            160 Broadway, New York, NY 10038,
                                            <br /> 102 1st Avenue, New York, NY 100
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;