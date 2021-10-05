import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import ServiceSite from '../ServiceSite/ServiceSite';
import "./Service.css"




const Service = () => {
    const [allCourse, setAllCourse] = useContext(UserContext);
    useEffect(() => {
        fetch("./fake.JSON")
            .then((res) => res.json())
            .then(data => setAllCourse(data))
    }, [])
    return (
        <div className="px-5">
            <h1 className="text-center my-5 text-warning" style={{ fontSize: "4rem", borderBottom: "4px solid red", margin: "0 35vw" }}>Our Specilities</h1>
            <Row className="w-100">

                <Col md={12} sm={12} xs={12}>
                    <Row className="w-100">
                        {
                            allCourse.slice(0, 4).map(course => <React.Fragment key={course.id}>

                                <Col md={3} sm={6} xs={12}>
                                    <ServiceSite className="service" course={course} />
                                </Col>
                            </React.Fragment>)
                        }

                    </Row>
                    <div className="btn btn-success mb-3"><Link to="/viewAll" style={{ textDecoration: "none", color: "white" }} >View all</Link></div>
                </Col>
            </Row>
            <div className=" container mt-5 mb-5">
                <h1 style={{ fontSize: "5rem", borderBottom: "4px solid gray" }} className="text-center my-10">About Us</h1>
                <h6>Coding is important to learn because computer programming teaches children to experiment and gives them the confidence to be creative. They will have the chance to design something that is entirely their own. Children thrive off of the feedback they get from creating something they love. Just like learning a language, or to play a musical instrument, children need motivation. Usually seeing results along the way is enough to cultivate this, and this is what happens when children learn to code.

                    Because coding is easy to pick up, for children especially, confidence comes easily. When children learn how to code it gives them the opportunity to be confident and create something in a fun and exciting way.

                    Why is learning to code so important? For us, creativity tops the list! We love the creative games and activities our kids can create with coding. Coding doesn’t have to be boring, in fact, coding can be fun! We show you how to make coding fun for your kids in this post.</h6>
            </div>
        </div>
    );
};

export default Service;