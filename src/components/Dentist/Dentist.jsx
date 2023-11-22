import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Staff } from '../../Data/Staff';
import Doctors from '../../Pages/Home/Doctors/Doctors';

const Team = () => {
    return (
        <section className="doctor-wrapper">
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="section-title">
                            <h1 className="mb-5 mb-sm-dent">Our Team</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        Staff.map(team => (
                            <Doctors key={team.id} team={team} />
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Team;