import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Content.css';

const Content = () => {
    return (
        <section className="about-content-sec">
            <Container>
                <Row>
                    <Col md={12}  lg={{ order: 2 }} className="text-center">
                        <div className="section-title">
                            <h1>Our Practice</h1>
                        </div>
                        <p className="w-50 m-auto content-inner">lOREP IPSUM.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Content;