import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import './Safety.css';
import '../../Home/Slick/Slick.css';
import ppe from '../../../Images/ppe.png';
import bio from '../../../Images/bio.png';
import whmis from '../../../Images/WHMIS.png';
import wsib from '../../../Images/wsib.png';


const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 280,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        }
      ]
};


const Safety = () => {
    return (
        <section className="about-content-sec">
            <Container>
                <Row>
                <h2 className='fw-bold fw-bold text-center mt-5 mb-3'> Safety is our top priority </h2>
              <p className='p-safety text-center p-3 fs-4'>We ensure the well-being of our team, environment and clients through rigorous training, compliance with industry regulations, and a commitment to minimizing risks in every cleaning task </p>
                <Col md={12}>
                        <Slider {...settings} className='slider'>
                           
                                <img className="logo-safety " src={wsib} alt="" />
                          
                           
                                <img className="logo-safety " src={bio} alt="" />
                          
                           
                                <img className="logo-safety " src={ppe} alt="" />
                          
                           
                                <img className="logo-safety " src={whmis} alt="" />
                          
                
                        </Slider>
                    </Col>
                </Row>
                
            </Container>
        </section>
    );
};

export default Safety;