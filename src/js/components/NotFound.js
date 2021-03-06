import React, { Component } from 'react';
const img = '../../images/404_visual.png';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class NotFound extends React.Component {
    render() {
        return (
            <Row className="text-center NotFoundRow">
                <Col sm={12} md={12} xs={24} lg={12}>
                    <img src={img} className="text-center not-found">
                    </img>
                </Col>
            </Row>
        );
    }
}

export default NotFound;
