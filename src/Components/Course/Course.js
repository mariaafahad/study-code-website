import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Course = () => {
    let { courseId } = useParams();
    const [allCourse] = useContext(UserContext);
    const [newCourse, setNewCourse] = useState([]);
    useEffect(() => {
        const allNewCourse = allCourse?.filter(c => c.id == courseId);
        setNewCourse(allNewCourse);


    }, [])
    console.log("Hello form course.js", allCourse);
    console.log("Hello form course.js", newCourse);
    return (
        <div>
            <Header />

            <div className="card mb-3 container" style={{ maxWidth: "100rem" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={newCourse[0]?.img} style={{ height: '50vh' }} alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{newCourse[0]?.name}</h5>
                            <p className="card-text">{newCourse[0]?.description_long}</p>
                            <p className="card-text"><small className="text-muted">Course Duration: {newCourse[0]?.duration}</small></p>
                            <p className="card-text"><small className="text-muted">Course Time: {newCourse[0]?.time}</small></p>
                            <p className="card-text"><small className="text-muted">Course Price: ${newCourse[0]?.price}</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    );
};

export default Course;