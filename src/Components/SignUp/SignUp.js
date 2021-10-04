import React, { useState } from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const SignIn = () => {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className="d-flex justify-content-center">
            <div className="form-floating mb-3 container">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" />
                </div>
                <div>

                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary my-3">Sign In</button>
                </div>
            </div>
        </div >
    )
}

const SignUp = () => {
    const [signIn, setSignIn] = useState(false);
    return (
        <div>
            <Header />
            <h1 style={{ fontSize: "5rem" }} className="text-center my-5">Sign Up</h1>
            {signIn == true ?
                <div className="d-flex justify-content-center">
                    <form className="row g-3 w-100 container">
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4">
                            <label for="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label for="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
                :
                <SignIn />
            }
            <p style={{ cursor: 'pointer' }} className="m-3 text-info" onClick={() => setSignIn(!signIn)}>{signIn === true ? "Have an account? Please Sign In" : "Don't have an account yet?Please Sign In"}</p>
            <Footer />
        </div>
    );
};

export default SignUp;