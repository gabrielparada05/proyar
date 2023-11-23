
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import serviceDetailImg from "../../../Images/serviceDetailImg.png";
import serviceDetailImg2 from "../../../Images/serviceDetailImg2.png";
import { DetailServices } from "../../../Data/DetailsServices.js";


import "./Detail.css";

const Detail = () => {
  return (
    <>
    {DetailServices.map((Detail) => (
      <section key={Detail.id} className={`service-section ${Detail.id % 2 === 0 ? 'even-section' : 'odd-section'}`}>
        <Container>
             <div >
              <h2 className= {`fw-bold fw-bold text-center mt-5 mb-3  ${Detail.id % 2 === 0 ? 'text-white pt-4 pb-3' : 'text-black'}`}
              >{Detail.service}</h2>
              <p className= {`text-center ${Detail.id % 2 === 0 ? 'text-white' : 'text-black'}`}>{Detail.overview}</p>
              <Row>
              {Detail.steps.map((step)=> 
               <Col md={6} lg={6} xl={4} xs={12}>
               <div key={step.id} className="service-step-box" data-aos="flip-left">
                 <div className="service-icon">
                   <img src={step.img} alt="" />
                 </div>
                 <h4 className= {`text-center ${Detail.id % 2 === 0 ? 'text-white' : 'text-black'}`}>
                   {step.title}
                 </h4>
                 <p className= {`text-center ${Detail.id % 2 === 0 ? 'text-white' : 'text-black'}`}>
                 {step.description}
                 </p>
               </div>
             </Col>
              
              ) }
              </Row>
                 
            </div>
         

        </Container>
      </section>

))}
    </>
  );
};

export default Detail;
