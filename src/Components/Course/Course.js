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
                <div className="row g-0 w-100">
                    <div className="col-md-4 p-5">
                        <img src={newCourse[0]?.img} style={{ height: '40vh' }} alt="" />
                    </div>
                    <div className="col-md-8 p-5 ms-5">
                        <div className="card-body">
                            <h5 className="card-title">{newCourse[0]?.name}</h5>
                            <p className="card-text">{newCourse[0]?.description_long}</p>
                            <strong>

                                <p className="card-text"><small >Course Duration: {newCourse[0]?.duration} Months</small></p>
                                <p className="card-text"><small >Course Time: {newCourse[0]?.time} Hours</small></p>
                                <p className="card-text"><small >Course Price: $ {newCourse[0]?.fee}</small></p>
                            </strong>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    );
};

export default Course;