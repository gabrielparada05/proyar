
import React, { useRef, useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { DetailServices } from "../../../Data/DetailsServices.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHouseLaptop, faIndustry,faPersonThroughWindow,faPersonDigging,faSquareParking,faHouseChimneyMedical,faBuilding,faAngleUp, faRug } from '@fortawesome/free-solid-svg-icons';
import "./Detail.css";
import Services from '../Service/Service.jsx';




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
    window.addEventListener("scroll", onPageScroll, { passive: true });

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

  <Services scrollToService={scrollToService} />
  

  return (
    <>
  
  
    <div className='screen-big d-flex flex-wrap justify-content-center ms-4 me-4'>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('residential-cleaning')}><FontAwesomeIcon icon={faHome} /> Residential Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('commercial-cleaning')}><FontAwesomeIcon icon={faHouseLaptop} />Commercial Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('industrial-cleaning')}><FontAwesomeIcon icon={faIndustry} /> Industrial Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('carpet-cleaning')}><FontAwesomeIcon icon={faRug} /> Carpet Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('window-cleaning')}><FontAwesomeIcon icon={faPersonThroughWindow} /> Window Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('post-construction-cleaning')}><FontAwesomeIcon icon={faPersonDigging} />Post-Construction Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('parking-cleaning')}><FontAwesomeIcon icon={faSquareParking} /> Parking Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('walk-in-and-dental-premises-cleaning')}><FontAwesomeIcon icon={faHouseChimneyMedical} /> Walk-in Clinic and Dental Premises Cleaning</button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('building-cleaning-and-maintenance')}><FontAwesomeIcon icon={faBuilding} /> Building Cleaning</button>
   </div>

   <div className='screen-mobile d-flex flex-wrap justify-content-center ms-4 me-4'>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('residential-cleaning')}><FontAwesomeIcon icon={faHome} /> Residential </button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('commercial-cleaning')}><FontAwesomeIcon icon={faHouseLaptop} />Commercial </button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('industrial-cleaning')}><FontAwesomeIcon icon={faIndustry} /> Industrial </button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('carpet-cleaning')}><FontAwesomeIcon icon={faRug} /> Carpet </button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('window-cleaning')}><FontAwesomeIcon icon={faPersonThroughWindow} /> Window </button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('post-construction-cleaning')}><FontAwesomeIcon icon={faPersonDigging} />Post-Construction </button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('parking-cleaning')}><FontAwesomeIcon icon={faSquareParking} /> Parking </button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('walk-in-and-dental-premises-cleaning')}><FontAwesomeIcon icon={faHouseChimneyMedical} /> Walk-in Clinic and Dental Premises </button>
   <button className="btn btn-primary m-4" onClick={() => scrollToService('building-cleaning-and-maintenance')}><FontAwesomeIcon icon={faBuilding} /> Building </button>
   </div>



    {DetailServices.map((Detail) => (
      <section key={Detail.id} ref={serviceRefs[Detail.service.toLowerCase().replace(/\s+/g, '-')]} className={`service-section ${Detail.id % 2 === 0 ? 'even-section' : 'odd-section'}`}>        <Container>
             <div >
              <h2 className= {`fw-bold fw-bold text-center mt-5 mb-3  ${Detail.id % 2 === 0 ? 'text-white pt-4 pb-3' : 'text-black'}`}
              >{Detail.service}</h2>
              <p className= {`screen-big text-center p-3 fs-5 ${Detail.id % 2 === 0 ? 'text-white' : 'text-black'}`}>{Detail.overview}</p>
              <p className= {`screen-mobile text-center p-3 fs-5 ${Detail.id % 2 === 0 ? 'text-white' : 'text-black'}`}>{Detail.short_description}</p>
              <Row className='parent-service-detail'>
              {Detail.steps.map((step)=> 
               <Col className='container-service-detail' key={step.title} md={6} lg={6} xl={4} xs={12}>
               <div  className="service-step-box" data-aos="flip-left">
                 <div className="service-icon">
                   <img className="img-service-detail" src={step.img} alt="" />
                 </div>
                 <h4 className= {`h4-service-detail text-center ${Detail.id % 2 === 0 ? 'text-white' : 'text-black'}`}>
                   {step.title}
                 </h4>
                 <p className= {`screen-big p-service-detail text-center ${Detail.id % 2 === 0 ? 'text-white' : 'text-black'}`}>
                 {step.description}
                 </p>
                 <p className= {`screen-mobile p-service-detail text-center ${Detail.id % 2 === 0 ? 'text-white' : 'text-black'}`}>
                 {step.short_description}
                 </p>
               </div>
             </Col>
              
              ) }
              </Row>
                 
            </div>
           

        </Container>
        </section>
       ))}

        
       
        <div
  onClick={scrollToTop}
  className={`scroll-up ${goUp ? "show-scroll" : ""}`}
>
  <FontAwesomeIcon icon={faAngleUp} />
</div>
    
    

     

    </>
  );

  
};

export default Detail;
