
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import serviceDetailImg from "../../../Images/serviceDetailImg.png";
import serviceDetailImg2 from "../../../Images/serviceDetailImg2.png";
import { DetailServices } from "../../../Data/DetailsServices.js";


import "./Detail.css";

const Detail = () => {
  return (
    <>
      <section className="healing p-5">
        <Container>
          {DetailServices.map((Detail) => (
              <div key={Detail.id} style={{ backgroundColor: Detail.id % 2 === 0 ? 'white' : 'blue' }}>
              <h2 className="fw-bold text-center">{Detail.service}</h2>
              <p>{Detail.overview}</p>
              <Row>
              {Detail.steps.map((step)=> 
               <Col md={6} lg={6} xl={4} xs={12}>
               <div key={step.id} className="service-step-box" data-aos="flip-left">
                 <div className="service-icon">
                   <img src={step.img} alt="" />
                 </div>
                 <h4>
                   {step.title}
                 </h4>
                 <p className="text-black">
                 {step.description}
                 </p>
               </div>
             </Col>
              
              ) }
              </Row>
                 
            </div>
          ))}

        </Container>
      </section>
    </>
  );
};

export default Detail;
