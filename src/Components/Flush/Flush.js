import React from 'react';
import { ListGroup } from 'react-bootstrap';
import "./Flush.css"

const Flush = () => {
    return (
        <div className="container">
            <h3>Other Specilities</h3>
            <ListGroup variant="flush">
                <ListGroup.Item>Mobile App Development</ListGroup.Item>
                <ListGroup.Item>Microsoft Technologies</ListGroup.Item>
                <ListGroup.Item>Computer Science</ListGroup.Item>
                <ListGroup.Item> Latest Technologies</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Flush;