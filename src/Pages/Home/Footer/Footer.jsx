import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  
  return (
    <div className="footer-bg">
      <Container>
        <Row className="text-white justify-content-around">
          <Col xs={6} md={3}>
            <div className="single-footer-widget">
              <div className="widget-title">
                <h2>General</h2>
              </div>
              <div className="widget-content">
                <Link to="/about" onClick={scrollToTop} className="footer-link">About Us</Link>
                <Link to="/service" onClick={scrollToTop}  className="footer-link">Our Services</Link>
                <Link to="/contact" onClick={scrollToTop}  className="footer-link">Contact Us</Link>
              </div>
            </div>
          </Col>

          <Col xs={6} md={3}>
            <div className="single-footer-widget">
              <div className="widget-title">
                <h2>Our Address</h2>
              </div>
              <div className="widget-content">
                <div>
                  <address className="footer-link">
                    <FontAwesomeIcon icon={faLocationDot} /> 48 Sundragon Trail,
                    Bradford, ON
                  </address>
                </div>
                <div>
                  <a className="footer-link" href="tel:289-264-3058">
                    <FontAwesomeIcon icon={faPhone} /> 289-264-3058
                  </a>
                </div>
                <div>
                  <a className="footer-link" href="mailto: abc@example.com">
                    <FontAwesomeIcon icon={faEnvelope} /> Send Email
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-copy-right text-center text-white">
        <p className="mb-0 text-center">
          &copy; 2023 - <span className="developer">Gabriel Parada</span> | All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
