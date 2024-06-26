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


  // const publicUrl = process.env.PUBLIC_URL;

  
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
                <Link to='/about' className="footer-link">About Us</Link>
                <Link to='/service'  className="footer-link">Our Services</Link>
                <Link to='/contact'  className="footer-link">Contact Us</Link>
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
                  <address className="footer-link address-link">
                    <FontAwesomeIcon icon={faLocationDot} /> 48 Sundragon Trail,
                    Bradford, ON
                  </address>
                </div>
                <div>
                  <a className="footer-link" href="tel:(647) 524-8817">
                    <FontAwesomeIcon icon={faPhone} /> (647) 524-8817
                  </a>
                </div>
                <div>
                  <a className="footer-link" href="mailto: proyar@proyarservices.ca">
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
          &copy; 2023 - <span className="developer">GPM</span> | All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
