
import { Col, Container, Row } from 'react-bootstrap';
import g1 from '../../../Images/g1.jpg';
import g2 from '../../../Images/g2.jpg';
import g3 from '../../../Images/g3.jpg';
import g4 from '../../../Images/g4.jpg';
import g5 from '../../../Images/g5.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import './Gallery.css';


const Gallery = () => {

    var settings = {
        dots: true,
      

        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
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
          }
        ]

    }

    return (

        <section className="gallery-wrapper text-white">
            <Container>
                <Row>
                    <Col sm={12} className="text-center">
                        <div className="section-title">
                            <h1>Our Gallery</h1>
                        </div>
                    </Col>
                </Row>
             
                <Slider {...settings}>
              
                    <img src={g1} alt="" />
                    {/* <p className="legend">Legend 1</p> */}
               
               
              
                <img src={g2} alt="" />
                    {/* <p className="legend">Legend 2</p> */}
               
               
                <img src={g3} alt="" />
                    {/* <p className="legend">Legend 3</p> */}
                <img src={g4} alt="" />
                
                <img src={g5} alt="" />
            </Slider>
                    
                
            </Container>
        </section>
    );
};


export default Gallery;