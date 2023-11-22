import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import serviceDetailImg from "../../../Images/serviceDetailImg.png";
import serviceDetailImg2 from "../../../Images/serviceDetailImg2.png";
import assessment from "../../../Images/assessment.png";
import dusting from "../../../Images/dust.png";
import client from "../../../Images/client.png";
import vacuum from "../../../Images/vaccum.png";
import kitchen from "../../../Images/kitchen.png";
import toilet from "../../../Images/toilet.png";
import trash from "../../../Images/trash.png";
import bedroom from "../../../Images/bedroom.png";
import special from "../../../Images/special.png";
import qc from "../../../Images/quality-control.png";
import touching from "../../../Images/touching.png";
import schedule from "../../../Images/schedule.png";
import window from "../../../Images/window.png";
import floor from "../../../Images/floor.png";

import "./Detail.css";

const Detail = () => {
  return (
    <>
      <section className="healing p-5">
        <Container>
          <Row className="align-items-center p-5">
              <div className="mt-5 mt-lg-0">
                <div className="box-services"> 
                <h2 className="fw-bold text-center">Residential Cleaning</h2>
                <p>
                  Residential cleaning is a thorough and systematic process
                  aimed at maintaining a clean, healthy, and comfortable living
                  environment within homes. This service encompasses a variety
                  of tasks that target different areas and surfaces throughout
                  the residence. Here's an overview of the typical residential
                  cleaning process:
                </p>
                
             
                <Row> 

                <Col md={6} lg={6} xl={4} xs={12}>
                <div className="service-step-box" data-aos="flip-left">
                    <div className="service-icon">
                        <img src={assessment} alt="" />
                    </div>
                    <h4><span>1. </span>Assessment and Planning:</h4>
                    <p  className="text-black">
                      Professional cleaners begin by assessing the scope of work
                      and understanding specific client preferences and
                      requirements. A customized cleaning plan is developed
                      based on the size of the home, the number of rooms, and
                      any specific areas that require special attention.
                    </p>
                </div>
                  </Col>

                  <Col md={6} lg={6} xl={4} xs={12}>
                <div className="service-step-box" data-aos="flip-left">
                    <div className="service-icon">
                        <img src={dusting} alt="" />
                    </div>
                    <h4><span>2. </span>Surface Dusting and Wiping:</h4>
                    <p className="text-black">
                      Dusting surfaces, including furniture, shelves, and
                      decorative items. Wiping down surfaces to remove dust,
                      fingerprints, and smudges.
                    </p>
                </div>
                  </Col>

                  <Col md={6} lg={6} xl={4} xs={12}>
                <div className="service-step-box" data-aos="flip-left">
                    <div className="service-icon">
                        <img src={vacuum} alt="" />
                    </div>
                    <h4><span>3. </span>Vacuuming and Sweeping:</h4>
                    <p className="text-black">
                    Vacuuming carpets, rugs, and upholstery to remove dirt and
                      allergens. Sweeping and/or mopping hard floors to
                      eliminate dust and debris.
                    </p>
                </div>
                  </Col>
                
                  <Col md={6} lg={6} xl={4} xs={12}>
                <div className="service-step-box" data-aos="flip-left">
                    <div className="service-icon">
                        <img src={kitchen} alt="" />
                    </div>
                    <h4><span>4. </span>Kitchen Cleaning:</h4>
                    <p className="text-black">
                    Cleaning kitchen countertops, appliances, and sinks.
                      Wiping down cabinet exteriors. Cleaning the interior of
                      the microwave and other appliances as needed.
                    </p>
                </div>
                  </Col>
                
                  <Col md={6} lg={6} xl={4} xs={12}>
                <div className="service-step-box" data-aos="flip-left">
                    <div className="service-icon">
                        <img src={toilet} alt="" />
                    </div>
                    <h4><span>5. </span>Bathroom Cleaning:</h4>
                    <p className="text-black">
                    Cleaning and disinfecting bathroom surfaces, including
                      sinks, countertops, and fixtures. Scrubbing and
                      disinfecting toilets and showers. Cleaning mirrors.
                    </p>
                </div>
                  </Col>

                  <Col md={6} lg={6} xl={4} xs={12}>
                <div className="service-step-box" data-aos="flip-left">
                    <div className="service-icon">
                        <img src={bedroom} alt="" />
                    </div>
                    <h4><span>6. </span>Bedroom Cleaning:</h4>
                    <p className="text-black">
                    Changing bed linens. Dusting and wiping down bedroom
                      furniture. Vacuuming carpets or cleaning floors.
                    </p>
                </div>
                  </Col>

                  <Col md={6} lg={6} xl={4} xs={12}>
                <div className="service-step-box" data-aos="flip-left">
                    <div className="service-icon">
                        <img src={trash} alt="" />
                    </div>
                    <h4><span>7. </span>Trash Removal:</h4>
                    <p className="text-black">
                    Emptying trash bins and replacing liners.
                    </p>
                </div>
                  </Col>

                  <Col md={6} lg={6} xl={4} xs={12}>
                <div className="service-step-box" data-aos="flip-left">
                    <div className="service-icon">
                        <img src={special} alt="" />
                    </div>
                    <h4><span>8. </span>Specialized Cleaning (as needed):</h4>
                    <p className="text-black">
                    Addressing specific cleaning needs, such as stain removal
                      or cleaning interior windows.
                    </p>
                </div>
                  </Col>
               
                  <Col md={6} lg={6} xl={4} xs={12}>
                <div className="service-step-box" data-aos="flip-left">
                    <div className="service-icon">
                        <img src={qc} alt="" />
                    </div>
                    <h4><span>9. </span>Quality Check:</h4>
                    <p className="text-black">
                    A final inspection to ensure all areas have been properly
                      cleaned and meet the client's expectations.
                    </p>
                </div>
                  </Col>

                  <Col md={6} lg={6} xl={4} xs={12}>
                <div className="service-step-box" data-aos="flip-left">
                    <div className="service-icon">
                        <img src={client} alt="" />
                    </div>
                    <h4><span>9. </span>Client Feedback:</h4>
                    <p className="text-black">
                    Gathering feedback from the client to ensure satisfaction
                      and identify any areas that may need special attention in
                      future cleanings.
                    </p>
                </div>
                  </Col>
            
        
                  </Row>
            
                
                <p className="fw-bold mt-5 text-center">
                  Residential cleaning services can be tailored to meet
                  individual needs, whether it's a one-time deep clean, regular
                  maintenance cleaning, or addressing specific areas of concern.
                  Professional cleaning services often use eco-friendly products
                  and equipment to create a healthy and environmentally
                  conscious home environment.
                </p>
                </div>
              </div>
          
           
          </Row>
        </Container>
      </section>

      <section className="healing p-5 footer-bg">
        <Container>
          <Row className="align-items-center p-5">
            <Col lg={6} sm={12} xs={12}>
              <ol>
                <li>
                  <img
                    src={serviceDetailImg2}
                    alt="expert"
                    className="img-fluid pt-xs-5"
                  />
                </li>
              </ol>
            </Col>
            <Col lg={6} sm={12} xs={12}>
              <div className="mt-5 mt-lg-0">
                <h2 className="fw-bold text-white">Commercial Cleaning</h2>
                <p className="text-white">
                  Commercial cleaning involves a systematic and comprehensive
                  process tailored to maintain a clean, safe, and organized
                  environment within business and commercial spaces. Here's an
                  overview of the typical commercial cleaning process:
                </p>

                <ol className="text-white">
                  <li>
                    <h4 className="text-white">
                      Initial Assessment and Customization:
                    </h4>
                    <p className="text-white">
                      Conducting an initial assessment of the commercial space
                      to understand its layout, size, and specific cleaning
                      requirements. Customizing a cleaning plan based on the
                      nature of the business, high-traffic areas, and any
                      specialized cleaning needs.
                    </p>
                  </li>

                  <li>
                    <h4 className="text-white">
                      High-Touch Surface Disinfection:
                    </h4>
                    <p className="text-white">
                      Focusing on disinfecting high-touch surfaces such as
                      doorknobs, light switches, elevator buttons, and shared
                      equipment to minimize the spread of germs.
                    </p>
                  </li>

                  <li>
                    <h4 className="text-white">Surface Dusting and Wiping:</h4>
                    <p className="text-white">
                      Dusting and wiping down surfaces in common areas, offices,
                      and workstations. Cleaning and polishing furniture and
                      fixtures.
                    </p>
                  </li>

                  <li>
                    <h4 className="text-white">Floor Cleaning:</h4>
                    <p className="text-white">
                      Vacuuming carpets and mats, and mopping hard floors.
                      Paying attention to entrance areas and high-traffic zones.
                    </p>
                  </li>

                  <li>
                    <h4 className="text-white">Restroom Sanitization:</h4>
                    <p className="text-white">
                      Thorough cleaning and disinfection of restroom fixtures,
                      surfaces, and floors. Refilling and restocking paper
                      products and soap dispensers.
                    </p>
                  </li>

                  <li>
                    <h4 className="text-white">
                      Kitchen or Break Room Cleaning:
                    </h4>
                    <p className="text-white">
                      Cleaning and sanitizing kitchen surfaces, including
                      countertops, sinks, and appliances. Wiping down tables and
                      chairs in break areas.
                    </p>
                  </li>

                  <li>
                    <h4 className="text-white">Trash Removal and Recycling:</h4>
                    <p className="text-white">
                      Emptying trash bins and recycling containers. Disposing of
                      waste in accordance with local regulations.
                    </p>
                  </li>

                  <li>
                    <h4 className="text-white">Window and Glass Cleaning:</h4>
                    <p className="text-white">
                      Cleaning interior windows and glass surfaces to maintain a
                      clear and professional appearance.
                    </p>
                  </li>

                  <li>
                    <h4 className="text-white">
                      Specialized Cleaning Services:
                    </h4>
                    <p className="text-white">
                      Providing additional services as needed, such as carpet
                      cleaning, upholstery cleaning, or floor polishing.
                    </p>
                  </li>

                  <li>
                    <h4 className="text-white">Quality Control:</h4>
                    <p className="text-white">
                      Conducting regular inspections to ensure the quality and
                      thoroughness of the cleaning process. Addressing any
                      specific concerns or areas that may require additional
                      attention.
                    </p>
                  </li>

                  <li>
                    <h4 className="text-white">Flexible Scheduling:</h4>
                    <p className="text-white">
                      Offering flexible scheduling options to minimize
                      disruption to business operations, including after-hours
                      or weekend cleaning.
                    </p>
                  </li>
                 

                </ol>

                <p className="text-white">
                  Commercial cleaning services often employ professional-grade, eco-friendly cleaning products and equipment to create a clean and healthy workspace. Regular commercial cleaning contributes to a positive and professional image, promotes employee well-being, and ensures compliance with hygiene and safety standards.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Detail;


