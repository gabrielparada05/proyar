import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


import { Col } from 'react-bootstrap';
import './Services.css';

const Services = (props) => {

    const {id, title, description, link, img} = props.treatment;
    // const { scrollToService } = props;
    useEffect(() => {
        AOS.init({
                duration: 2000,
            });
        AOS.refresh();
      }, []);
    return (
        <>
       
            <Col  key={id} md={6} lg={6} xl={4} xs={12}>
                <div className="single-service-box" data-aos="flip-left">
                    <div className="service-icon">
                        <img src={img} alt="" />
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    {/* <a href="/service" onClick={() => scrollToService(`${link}`)}>Read More</a> */}
                    <Link to="/service">
                    View Details
                </Link>
                </div>
            </Col>
        </>
        
    );
};

export default Services;