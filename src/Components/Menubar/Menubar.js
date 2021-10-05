import React from 'react';
import { Link } from 'react-router-dom';
import '../Menubar/Menubar.css'
import img4 from '../images/logo1.png'

const Menubar = () => {
    return (
        <div>
            <div className="MenuBar-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="logo-img bg-secondary d-flex justify-content-center align-items-center">
                                <img className="w-75" src={img4} alt="" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="menu-container ">
                                <ul className="d-flex align-items-center justify-content-end">
                                    <Link to="/home" className="items">
                                        <li>Home</li>
                                    </Link>
                                    <Link to="/viewAll" className="items">
                                        <li>Services</li>
                                    </Link>
                                    <Link to="/about" className="items">
                                        <li>About us</li>
                                    </Link>
                                    <Link to="contact" className="items">
                                        <li>Contact us</li>
                                    </Link>
                                    <Link to="/login">
                                        <button className="btn about-btn mt-2">Signup</button>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;