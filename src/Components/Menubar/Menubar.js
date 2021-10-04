import React from 'react';
import { Link } from 'react-router-dom';
import '../Menubar/Menubar.css'

const Menubar = () => {
    return (
        <div>
            <div className="MenuBar-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="logo-img">
                                {/* <img className="w-75" src="https://cdn4.vectorstock.com/i/1000x1000/43/98/student-education-logo-vector-14724398.jpg" alt="" /> */}
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