import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import seo from '../../../Images/seo.png';
import promise from '../../../Images/promise.png';
import partners from '../../../Images/partners.png';
import excellence from '../../../Images/excellence.png';
import safety from '../../../Images/safety.png';
import client from '../../../Images/client.png';
import "./Content.css";

const aboutText = `
  Welcome to Proyar Maintenance Services, where our commitment to
  cleanliness is driven by a mission to exceed client expectations
  through exceptional services, fostering a healthier environment.
`;

const valuesList = [
  {
    title: "Excellence:",
    content:
      "Striving for excellence in every task with meticulous attention to detail.",
    img: excellence,
  },
  {
    title: "Integrity:",
    content:
      "Operating with honesty and transparency, earning trust from clients and our team.",
      img: seo,
  },
  {
    title: "Safety:",
    content:
      "Prioritizing the well-being of our team and clients with adherence to the highest safety standards.",
      img: safety,
  },
  {
    title: "Customer Satisfaction:",
    content:
      "Dedicated to your satisfaction by tailoring services to meet unique needs.",
      img: client,
  },
];

const promiseText = `
  We go beyond mere cleanliness, dedicated to your well-being. Join us where professionalism meets passion, creating spaces reflecting our commitment to excellence. Our vision is to lead in transforming spaces into havens, inspiring well-being, and setting industry standards with innovative cleaning solutions.
`;

const Content = () => {
  return (
    <section className="about-content-sec">
      <Container className="mb-5">
  <Row className="justify-content-between promise-content-box">
  <Col  md={6} lg={6} xl={4} xs={12} className="w-50 promise-col">
      <div className="section-title text-center promise-specific-box">
        <img src={partners} alt="" />
        <h3>Our Practice</h3>
        <p className="fs-5 text-justify">{aboutText}</p>
      </div>
    </Col>

    <Col  md={6} lg={6} xl={4} xs={12} className="w-50 promise-col">

      <div className="section-title text-center promise-specific-box">
      <img src={promise} alt="" />
        <h3 > Our Promise:</h3>
        <p className="fs-5 text-justify">{promiseText}</p>
      </div>
    </Col>
  </Row>
</Container>


      <div className="service-wrapper fs-5">
        <h3 className="text-center text-white">Our Values:</h3>
        <Container>
          <Row className="justify-content-center">
            {valuesList.map((value, index) => (
              <Col key={index} md={6} lg={6} xl={4} xs={12}>
                <div className="single-service-box p-3">
                  <div className="service-icon">
                    <img src={value.img} alt="" />
                  </div>
                  <h3 className="fw-bolder text-decoration-underline">
                    {value.title}
                  </h3>
                  <p className="text-white">{value.content}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Content;
