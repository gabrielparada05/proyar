import "@fontsource/josefin-sans";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import doctorfinding from '../../../Images/doctorfinding.c2532ac3.png';
import heroTeeth from '../../../Images/home_img.png';
import cleaners from '../../../Images/cleaning1.png';
import './Banner.css';



const Banner = () => {
    return (
            <section className="single-hero-slide text-white d-flex justify-content-center align-items-center">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} sm={12} lg={6}>
                            <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
                                <h2>Elevate your Workspace</h2>
                                <h1>Exceeding Cleanliness Standards</h1>
                                <p className="mb-xs-5 text-l ">Thank you for choosing Proyar Maintenance Services! We're your trusted partner for top-notch cleaning services. Explore our range of services for a healthier, happier space. Our dedicated team is here to exceed your expectations. Schedule your next cleaning session with us - we're just a call or message away!</p>
                                <div className="banner-btn m-sm-auto">
                                    {/* <Link to="/login"><button className="theme-btn btn-fill">Appoinment</button></Link> */}
                                    <button className='theme-btn bth-blank'>Learn More</button>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} sm={12} lg={6} className="">
                            <div className="hero-slide-right text-center text-lg-start ">
                                {/* <div className="animate-img">
                                    <img src={cleaners} alt="" className="img-fluid aimg1" />
                                    <img src={doctorfinding} alt="" className="img-fluid aimg2" />
                                </div> */}
                                <img src={heroTeeth} alt="" className="heroTeeth"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    );
};

export default Banner;