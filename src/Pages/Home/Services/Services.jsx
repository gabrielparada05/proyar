import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Col } from "react-bootstrap";
import "./Services.css";

const Services = (props) => {
  const { id, title, description, short_title, img } = props.treatment;
  // const { scrollToService } = props;
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Col
        className="container-service-general"
        key={id}
        md={6}
        lg={6}
        xl={4}
        xs={12}
      >
        <div className="single-service-box-general" data-aos="flip-left">
          <div className="service-icon">
            <img className="img-service-general" src={img} alt="" />
        </div>
        <div className="mb-2">
            <h3 className="screen-big justify-content-center">{title}</h3>
            <h3 className="screen-mobile fw-bold justify-content-center">
              {short_title}
            </h3>
            <p className="screen-big">{description}</p>
            {/* <a href="/service" onClick={() => scrollToService(`${link}`)}>Read More</a> */}
            <Link className="link-services" to="/service">
              View Details
            </Link>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Services;
