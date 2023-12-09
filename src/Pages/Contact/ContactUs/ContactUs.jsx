import React from 'react';
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
    return (
        // <section className="contact-wrapper">
            <Container className="contact-wrapper mt-5 mb-5" >
                <Row className='row-contact'>
                    <Col md={6} lg={6} xl={4} className='col-contact'>
                        <div className=" single-contact icon1">
                            <div className="c-icon">
                                <FontAwesomeIcon icon={faHome} />
                            </div>
                            <div className="c-info text-start">
                                <h4>Address</h4>
                                {/* <p>48 Sundragron Trail,</p> */}
                                <p>Bradford, ON</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6} xl={4}>
                        <div className="single-contact icon2">
                            <div className="c-icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className="c-info text-start">
                                <h4>Email</h4>
                                <a href="mailto: proyar@proyarservices.ca"> proyar@proyarservices.ca</a>
                            
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6} xl={4}>
                        <div className="single-contact icon3">
                            <div className="c-icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className="c-info text-start">
                                <h4>Phone</h4>
                                <div>
                                <a href="tel:647-236-0196">(647) 236-0196</a>
                                </div>
                                <div>
                                <a href="tel:289-264-3058">(289) 264-3058</a> 
                                </div>
                                
                              
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        // </section>
    );
};

export default ContactUs;