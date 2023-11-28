import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./Content.css";

const aboutText = `
  Welcome to Proyar Maintenance Services, where our commitment to
  cleanliness is driven by a powerful mission and core values. Our
  mission is to exceed client expectations through exceptional
  cleaning services, fostering a healthier and more comfortable
  environment.
`;

const valuesList = [
  {
    title: "Excellence:",
    content:
      "We strive for excellence in every cleaning task, ensuring meticulous attention to detail and consistently high standards.",
  },
  {
    title: "Integrity:",
    content:
      "Honesty and transparency are the foundations of our business. We operate with integrity, earning the trust of our clients and team.",
  },
  {
    title: "Safety:",
    content:
      "The well-being of our team and clients is our top priority. We adhere to the highest safety standards, creating a secure environment in every space we clean.",
  },
  {
    title: "Customer Satisfaction: ",
    content:
      "Your satisfaction is our driving force. We tailor our services to meet your unique needs, providing a seamless and enjoyable experience.",
  },
];

const promiseText = `
  At Proyar Maintenance Services, we promise more than just
  cleanliness – we promise an unwavering commitment to your
  well-being and satisfaction. Join us on a journey where
  professionalism meets passion, and every space becomes a testament
  to our dedication to excellence. Our vision is to be the leading
  force in transforming spaces into immaculate havens, creating
  environments that inspire well-being and elevate the quality of
  life. We envision a future where our innovative cleaning solutions
  set the industry standard, and our commitment to excellence
  becomes synonymous with a cleaner, healthier, and happier world.
  With a focus on sustainability, continuous improvement, and client
  satisfaction, we aim to redefine the cleaning experience and leave
  a lasting, positive impact on every space we touch.
`;

const Content = () => {
  return (
    <section className="about-content-sec">
      <Container className="mb-5">
        <Row>
          <Col md={12} lg={{ order: 2 }}>
            <div className="section-title text-center">
              <h1>Our Practice</h1>
            </div>
            <p className="fs-3 text-center">{aboutText}</p>

            <h3 className="text-center fs-2 p-5">Our Promise:</h3>
            <p className="fs-5 text-justify">{promiseText}</p>
          </Col>
        </Row>
      </Container>

      
      <div className="service-wrapper fs-5">
      <h2 className="text-center text-white fs-2">Our Values:</h2>
        <Container>
          <Row className="justify-content-center">
          {valuesList.map((value, index) => (
          
               <Col key={index} md={6} lg={6} xl={4} xs={12}>
              <div className="single-service-box p-3">
                <div className="service-icon">
                  {/* <img src={img} alt="" /> */}
                </div>
                <h3 className="fw-bolder text-decoration-underline">{value.title}</h3>
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
