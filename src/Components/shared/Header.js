import React from 'react';
import Menubar from '../Menubar/Menubar';

const Header = () => {
    return (
        <div>
            <div className="row banner  w-100">
                <Menubar />
                <div className="col-md-6 container ">
                    <h1 className="title text-center text-warning">
                        Coding From <br /> Zero!
                    </h1>
                    <h3 className="text-white text-center mt-3">
                        An example of how anyone can learn to code
                    </h3>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    );
};

export default Header;