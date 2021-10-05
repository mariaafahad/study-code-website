import React from 'react';
import Footer from '../shared/Footer';
import Home from '../Home/Home';
import Service from '../Service/Service';
import Carasol from '../Carasol/Carasol';
import Flush from '../Flush/Flush';

// for full page

const Page = () => {
    return (
        <div>
            <Home />
            <br />
            <Flush></Flush>
            <br />
            <Service />
            <br />
            <Carasol></Carasol>
            <br />
            <Footer />
        </div>
    );
};

export default Page;