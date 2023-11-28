import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Content.css';

const Content = () => {
    return (
        <section className="about-content-sec">
            <Container>
                <Row>
                    <Col md={12}  lg={{ order: 2 }}>
                        <div className="section-title">
                            <h2>Our Practice</h2>
                        </div>
                        <p className="m-auto content-inner">Welcome to Proyar Maintenance Services, where our commitment to cleanliness is driven by a powerful mission and core values. Our mission is to exceed client expectations through exceptional cleaning services, fostering a healthier and more comfortable environment.</p>
                        
                        <h3>Our Values:</h3>
                        <ul>
                        <li><span className='fw-bold'>Excellence:</span> We strive for excellence in every cleaning task, ensuring meticulous attention to detail and consistently high standards.</li>
                        <li><span className='fw-bold'>Integrity:</span> Honesty and transparency are the foundations of our business. We operate with integrity, earning the trust of our clients and team.
                        </li>
                        <li><span className='fw-bold'>Safety:</span> The well-being of our team and clients is our top priority. We adhere to the highest safety standards, creating a secure environment in every space we clean.</li>

                        <li><span className='fw-bold'>Customer Satisfaction: </span> Your satisfaction is our driving force. We tailor our services to meet your unique needs, providing a seamless and enjoyable experience.</li>

                        </ul>

<h3>Our Promise:</h3>

<p>At Proyar Maintenance Services, we promise more than just cleanliness – we promise an unwavering commitment to your well-being and satisfaction. Join us on a journey where professionalism meets passion, and every space becomes a testament to our dedication to excellence."

Our vision is to be the leading force in transforming spaces into immaculate havens, creating environments that inspire well-being and elevate the quality of life. We envision a future where our innovative cleaning solutions set the industry standard, and our commitment to excellence becomes synonymous with a cleaner, healthier, and happier world. With a focus on sustainability, continuous improvement, and client satisfaction, we aim to redefine the cleaning experience and leave a lasting, positive impact on every space we touch."</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Content;