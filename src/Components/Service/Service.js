import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import ServiceSite from '../ServiceSite/ServiceSite';
import SignUp from '../SignUp/SignUp';



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
                                    <ServiceSite course={course} />
                                </Col>
                            </React.Fragment>)
                        }

                    </Row>
                    <div className="btn btn-success mb-3"><Link to="/viewAll" style={{ textDecoration: "none", color: "white" }} >View all</Link></div>
                </Col>
            </Row>
            <div>
                <h1 style={{ fontSize: "5rem" }} className="text-center my-5">About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi architecto adipisci accusantium possimus eos, consequuntur neque repudiandae non tenetur provident. Explicabo, neque debitis quos adipisci harum dolore. Recusandae iste voluptatibus exercitationem sit, labore doloribus fugit laudantium tempore esse ex, perspiciatis reprehenderit delectus. Adipisci perspiciatis necessitatibus suscipit, doloremque, provident eveniet voluptates recusandae magni sed sunt laborum. Aperiam laudantium quo nulla aliquid eum. Dolorem quo nam pariatur neque. Ratione debitis necessitatibus nemo quia provident. Hic, vel ipsum. Libero dolore eaque hic sequi aspernatur nobis fugit accusantium a porro voluptate impedit, numquam ad earum! Eaque itaque quod nemo corporis deserunt debitis, voluptatibus dolore atque tempora illum inventore quas repudiandae aliquam obcaecati eos veritatis quasi doloribus tempore molestiae repellendus, excepturi perferendis omnis explicabo ipsa. Ad, deleniti possimus. Perferendis, facere. Tempore, praesentium debitis quasi magni ad quidem numquam facilis architecto ab voluptates quae eos cumque neque iste temporibus consequatur quos nihil culpa cum in quia officiis sed soluta! Ipsum ea, beatae velit doloribus tenetur amet fugit rerum eum nulla nostrum, harum eveniet quae quaerat, ipsam similique quasi aliquid veniam maiores id soluta fuga. Dolor itaque qui porro, odit minima praesentium, ullam ut, reiciendis iure unde cumque perspiciatis quod voluptatem amet provident quia eos ab pariatur dicta alias sapiente? Enim earum perferendis laborum quaerat. Odit laborum quia vero asperiores id eaque rem omnis illum atque expedita, quo, assumenda veniam hic facilis voluptatem ratione perspiciatis iusto dicta ad, quos recusandae pariatur nostrum. Placeat facere accusantium vel quo, fugit quam adipisci accusamus, unde nihil aperiam consequatur voluptate nobis fugiat maiores sapiente commodi dolores, rerum sint explicabo et iure veritatis possimus suscipit deleniti? Porro qui ab aspernatur nulla quod necessitatibus sequi nemo! Odit minus nostrum consequatur soluta voluptatem impedit molestiae molestias iure corrupti qui dignissimos, ducimus veritatis facilis libero? Ipsam adipisci necessitatibus, repellendus vitae magni esse voluptatibus aliquid corporis sed eaque enim iste unde excepturi cumque mollitia, officiis velit, aperiam quas culpa. Assumenda, accusantium quas iusto quo placeat beatae illum provident sapiente quia! Quia voluptatem sunt alias pariatur nesciunt, reprehenderit excepturi dignissimos ipsam quis repellendus ratione vitae repudiandae eveniet nam culpa! Quis voluptas hic cupiditate recusandae accusantium saepe dolorem distinctio at officiis sequi? Nesciunt, accusantium ratione voluptatum deserunt consequatur esse nisi excepturi minus eius totam animi aspernatur, voluptates ad. Ex vel inventore, modi dicta aliquid earum neque, veniam quo adipisci, unde est qui. Vel nam maxime, error iusto ipsum itaque tenetur minima beatae voluptatum praesentium voluptas, sit ea nisi, et reiciendis amet excepturi iste eos. Mollitia placeat, vitae sit porro debitis expedita delectus ipsam soluta eaque, quis velit commodi? Quod, itaque quo delectus sint commodi sapiente obcaecati tenetur, illo molestias, voluptatibus harum similique velit eaque error dicta. Est quisquam id possimus nobis cupiditate pariatur! Laudantium corporis dolores non adipisci doloremque! Consequatur unde reiciendis doloribus exercitationem laudantium. Aut sapiente quasi minus voluptatem molestias, vitae fuga saepe optio earum voluptates, et eum dicta dolor placeat fugit harum aspernatur sed mollitia est veniam! Dolores dolorum labore exercitationem sunt soluta, eaque sit nam alias amet ratione, atque provident voluptate a dolorem adipisci iure!</p>
            </div>
        </div>
    );
};

export default Service;