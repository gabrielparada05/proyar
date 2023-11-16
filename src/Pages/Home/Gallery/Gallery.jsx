import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import g1 from '../../../Images/g1.jpg';
import g2 from '../../../Images/g2.jpg';
import g3 from '../../../Images/g3.jpg';
import g4 from '../../../Images/g4.jpg';
import g5 from '../../../Images/g5.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Gallery.css';


const Gallery = () => {
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
             
                <Carousel>
                <div>
                    <img src={g1} alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src={g2} alt="" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src={g3} alt="" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
                    
                
            </Container>
        </section>
    );
};

export default Gallery;