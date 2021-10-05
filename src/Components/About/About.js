import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const About = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <h1 style={{ fontSize: "5rem", borderBottom: "4px solid gray" }} className="text-center my-5">About Us</h1>
                <h6>Coding is important to learn because computer programming teaches children to experiment and gives them the confidence to be creative. They will have the chance to design something that is entirely their own. Children thrive off of the feedback they get from creating something they love. Just like learning a language, or to play a musical instrument, children need motivation. Usually seeing results along the way is enough to cultivate this, and this is what happens when children learn to code.

                    Because coding is easy to pick up, for children especially, confidence comes easily. When children learn how to code it gives them the opportunity to be confident and create something in a fun and exciting way.

                    Why is learning to code so important? For us, creativity tops the list! We love the creative games and activities our kids can create with coding. Coding doesn’t have to be boring, in fact, coding can be fun! We show you how to make coding fun for your kids in this post!</h6>
            </div>
            <Footer />
        </div>
    );
};

export default About;