
import React, { useRef } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import serviceDetailImg from "../../../Images/serviceDetailImg.png";
import serviceDetailImg2 from "../../../Images/serviceDetailImg2.png";
import { DetailServices } from "../../../Data/DetailsServices.js";


import "./Detail.css";

const Detail = () => {

  const serviceRefs = {
    'residential-cleaning': useRef(null),
    'commercial-cleaning': useRef(null),
    'industrial-cleaning': useRef(null),
    'carpet-cleaning': useRef(null),
    'window-cleaning': useRef(null),
    'post-construction-cleaning': useRef(null),
    'parking-cleaning': useRef(null),
    'walk-in-dental-premises-cleaning': useRef(null),
    'building-cleaning': useRef(null),
  };

  const scrollToService = (serviceName) => {
    const selectedRef = serviceRefs[serviceName];
    if (selectedRef && selectedRef.current) {
      selectedRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>


    <div className='d-flex flex-wrap justify-content-center'>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('residential-cleaning')}>Go to Residential Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('commercial-cleaning')}>Go to Commercial Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('industrial-cleaning')}>Go to Industrial Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('window-cleaning')}>Go to Window Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('post-construction-cleaning')}>Go to Post-Construction Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('parking-cleaning')}>Go to Parking Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('walk-in-dental-premises-cleaning')}>Go to Walk-in Clinic and Dental Premises Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('building-cleaning')}>Go to Building Cleaning</button>
   </div>

    {DetailServices.map((Detail) => (
      <section key={Detail.id} ref={serviceRefs[Detail.service.toLowerCase().replace(/\s+/g, '-')]} className={`service-section ${Detail.id % 2 === 0 ? 'even-section' : 'odd-section'}`}>        <Container>
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
