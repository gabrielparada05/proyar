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
                <Col md={12}>
                        <Slider {...settings} className='slider'>
                            <div className="single-brand-logo">
                                <img src={wsib} alt="" />
                            </div>
                            <div className="single-brand-logo">
                                <img src={bio} alt="" />
                            </div>
                            <div className="single-brand-logo">
                                <img src={ppe} alt="" />
                            </div>
                            <div className="single-brand-logo">
                                <img src={whmis} alt="" />
                            </div>
                
                        </Slider>
                    </Col>
                </Row>
                
            </Container>
        </section>
    );
};

export default Safety;