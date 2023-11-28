import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-bg">
            <Container>
                <Row className="text-white">
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>General</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">FAQ's</NavLink>
                                <NavLink className="footer-link">About Us</NavLink>
                                <NavLink className="footer-link">Our Services</NavLink>
                                <NavLink className="footer-link">Contact Us</NavLink>
                            </div>
                        </div>
                    </Col>

                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                          
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                          
                        </div>
                    </Col>

            
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Our Address</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Bradford, ON</NavLink>
                                
                                <NavLink className="footer-link">Phone:+1 3500 5867 340</NavLink>
                                <NavLink className="footer-link">Email:yourdomain@gmail.com</NavLink>
                                <NavLink className="footer-link">Fax:+1 675 5867 340</NavLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copy-right text-center text-white">
                <p className='mb-0'>&copy; 2023 - <span className="developer">Gabriel Parada</span> | All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;