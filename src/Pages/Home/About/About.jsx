import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../../Images/about.jpg';
import './About.css';

const About = () => {

    useEffect(() => {
        AOS.init({
                duration: 2000,
            });
        AOS.refresh();
      }, []);
    return (
        <section className="about-wrapper">
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <div className="about-left">
                            <img src={about} alt="donto" className="img-fluid donto" />
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="about-right mt-5 mt-lg-0">
                            <div className="about-content " data-aos="zoom-in">
                                <h1 className="text-center">Welcome to our Family</h1>
                                <p className="about-p">"Welcome, where cleanliness meets family dedication. As a proud family-operated business, we have been tirelessly perfecting the art of cleaning for over 5 years. Our commitment to excellence and personalized service sets us apart. We don't just clean spaces; we create environments that resonate with warmth and care. Join our extended family of satisfied clients who have experienced the difference of a cleaning service that goes beyond the ordinary. Let us bring our expertise, reliability, and a touch of familial charm to your workplace. Discover the comfort of a clean space with Proyar Maintenance Services – where family values and years of experience converge for your utmost satisfaction"</p>
                                <div className="text-center">
                                <a href='/about'>About Us</a>
                                </div>
                            </div>
                            {/* <div className="fun-fact-sec" data-aos="fade-right">
                                <div className="single-fun">
                                    <span>100</span>
                                    <span>+</span>
                                    <p>Happy Clients</p>
                                </div>
                                <div className="single-fun sp-fun" data-aos="fade-right">
                                    <span>30</span>
                                    <span>+</span>
                                    <p>Qualified Cleaners</p>
                                </div>
                                <div className="single-fun" data-aos="fade-left">
                                    <span>25</span>
                                    <span>+</span>
                                    <p>Years Experience</p>
                                </div>
                                <div className="single-fun sp-fun" data-aos="fade-left">
                                    <span>50</span>
                                    <span>+</span>
                                    <p>xxxxx</p>
                                </div>
                                <span className="line"></span>
                            </div> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;