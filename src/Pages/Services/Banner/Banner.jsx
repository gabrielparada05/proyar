import React from 'react';
import { Col, Container} from 'react-bootstrap';
// import HeroMainbg from '../../../Images/services.png';

const Banner = () => {
    return (
        <section className="banner-all text-white">
            <Container className='d-flex justify-content-center align-items-center'>
                <Col md={6} lg={6} sm={12} className="align-items-center">
                   
                        <div className="section-title text-center">
                            <h1>Service Details</h1>
                        </div>
                       
                    
                    {/* <Col md={6} lg={6} sm={12}>
                        <div className="hero-slide-right text-start">
                            <div className="banner-animate">
                                <img src={HeroMainbg} alt="" className="img-fluid" />
                               
                            </div>
                        </div>
                    </Col> */}
                </Col>
            </Container>
        </section>
    );
};

export default Banner;