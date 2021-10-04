import React from 'react';
import { Link } from 'react-router-dom';

const ServiceSite = ({ course }) => {
    return (
        <div className="w-100">
            <div className="card m-5" style={{ width: "22rem" }}>
                <img src={course.img} className="card-img-top img-fluid" style={{ maxHeight: "25vh", minHeight: "25vh" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title my-5">{course.name}</h5>
                    <p className="card-text">{course.description_short}</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <strong>Course Fee: ${course.fee}</strong>



                    </div>
                    <p className="card-text my-3"><small >Course Time: {course.time} Hours</small></p>
                    <p className="card-text"><small >Course Duration: {course.duration} Months</small></p>
                    <Link to={`/course/${course.id}`} className="btn btn-success"><strong>View Details</strong></Link>
                </div>
            </div>
        </div >
    );
};

export default ServiceSite;