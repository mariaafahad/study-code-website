import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServiceSite from '../ServiceSite/ServiceSite';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const ViewAll = () => {
    const [allCourse] = useContext(UserContext)
    return (
        <div>
            <Header />
            <Row className="w-100 px-5">

                <Col md={12} sm={12} xs={12}>
                    <Row className="w-100">
                        {
                            allCourse.map(course => <React.Fragment key={course.id}>

                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <ServiceSite course={course} />
                                </Col>
                            </React.Fragment>)
                        }

                    </Row>
                </Col>
            </Row>
            <Footer />
        </div>
    );
};

export default ViewAll;