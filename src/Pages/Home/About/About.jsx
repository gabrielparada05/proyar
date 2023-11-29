import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import about from "../../../Images/about.jpg";
import "./About.css";

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
                <p className="about-p">
                  Welcome to Proyar Maintenance Services – where family
                  dedication meets exceptional cleanliness. With over 5 years of
                  perfecting the art of cleaning, we're a proud family-operated
                  business committed to personalized service and excellence.
                  Experience the difference with our expertise, reliability, and
                  familial charm. Join our satisfied client family and discover
                  the comfort of a clean space. Choose Proyar for a cleaning
                  service beyond the ordinary, bringing warmth and care to your
                  workplace.
                </p>
                <div className="text-center">
                  <a href="/about">About Us</a>
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
