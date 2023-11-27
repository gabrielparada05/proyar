
import React, { useRef, useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { DetailServices } from "../../../Data/DetailsServices.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHouseLaptop, faIndustry,faPersonThroughWindow,faPersonDigging,faSquareParking,faHouseChimneyMedical,faBuilding,faAngleUp } from '@fortawesome/free-solid-svg-icons';
import "./Detail.css";




const Detail = () => {

  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 500) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  


  const serviceRefs = {
    'residential-cleaning': useRef(null),
    'commercial-cleaning': useRef(null),
    'industrial-cleaning': useRef(null),
    'carpet-cleaning': useRef(null),
    'window-cleaning': useRef(null),
    'post-construction-cleaning': useRef(null),
    'parking-cleaning': useRef(null),
    'walk-in-and-dental-premises-cleaning': useRef(null),
    'building-cleaning-and-maintenance': useRef(null),
  };

  const scrollToService = (serviceName) => {
    const selectedRef = serviceRefs[serviceName];
    if (selectedRef && selectedRef.current) {
      selectedRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>


    <div className='d-flex flex-wrap justify-content-center ms-4 me-4'>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('residential-cleaning')}><FontAwesomeIcon icon={faHome} /> Go to Residential Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('commercial-cleaning')}><FontAwesomeIcon icon={faHouseLaptop} />Go to Commercial Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('industrial-cleaning')}><FontAwesomeIcon icon={faIndustry} /> Go to Industrial Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('window-cleaning')}><FontAwesomeIcon icon={faPersonThroughWindow} /> Go to Window Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('post-construction-cleaning')}><FontAwesomeIcon icon={faPersonDigging} />Go to Post-Construction Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('parking-cleaning')}><FontAwesomeIcon icon={faSquareParking} /> Go to Parking Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('walk-in-and-dental-premises-cleaning')}><FontAwesomeIcon icon={faHouseChimneyMedical} /> Go to Walk-in Clinic and Dental Premises Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('building-cleaning-and-maintenance')}><FontAwesomeIcon icon={faBuilding} /> Go to Building Cleaning</button>
   </div>

    {DetailServices.map((Detail) => (
      <section key={Detail.id} ref={serviceRefs[Detail.service.toLowerCase().replace(/\s+/g, '-')]} className={`service-section ${Detail.id % 2 === 0 ? 'even-section' : 'odd-section'}`}>        <Container>
             <div >
              <h2 className= {`fw-bold fw-bold text-center mt-5 mb-3  ${Detail.id % 2 === 0 ? 'text-white pt-4 pb-3' : 'text-black'}`}
              >{Detail.service}</h2>
              <p className= {`text-center p-3 ${Detail.id % 2 === 0 ? 'text-white' : 'text-black'}`}>{Detail.overview}</p>
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
       
        <div
  onClick={scrollToTop}
  className={`scroll-up ${goUp ? "show-scroll" : ""}`}
>
  <FontAwesomeIcon icon={faAngleUp} />
</div>
    
      </section>
     
))}

    </>
  );

  
};

export default Detail;
