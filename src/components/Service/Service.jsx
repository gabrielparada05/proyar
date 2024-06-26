import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CleaningService } from '../../Data/Services';
import Services from '../../Pages/Home/Services/Services';

const Service = () => {
    return (
        <section className="service-wrapper">
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="section-title text-center">
                            <h1>Services</h1>
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    {
                        CleaningService.map(treatment => (
                            <Services key={treatment.id} treatment={treatment} />
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Service;