import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import serviceDetailImg from "../../../Images/service-details-promo1.png";
import serviceDetailImg2 from "../../../Images/service-details-promo2.png";
import "./Detail.css";

const Detail = () => {
  return (
    <>
      <section className="healing p-5">
        <Container>
          <Row className="align-items-center p-5">
            <Col lg={6} sm={12} xs={12}>
              <div className="expertDentist-txt mt-5 mt-lg-0">
                <h2 className="fw-bold">Residential Cleaning</h2>
                <p>
                  Residential cleaning is a thorough and systematic process
                  aimed at maintaining a clean, healthy, and comfortable living
                  environment within homes. This service encompasses a variety
                  of tasks that target different areas and surfaces throughout
                  the residence. Here's an overview of the typical residential
                  cleaning process:
                </p>
                <ul>
                  <li>
                    <h4>Assessment and Planning:</h4>
                    <p>
                      Professional cleaners begin by assessing the scope of work
                      and understanding specific client preferences and
                      requirements. A customized cleaning plan is developed
                      based on the size of the home, the number of rooms, and
                      any specific areas that require special attention.
                    </p>
                  </li>

                  <li>
                    <h4>Surface Dusting and Wiping:</h4>
                    <p>
                      Dusting surfaces, including furniture, shelves, and
                      decorative items. Wiping down surfaces to remove dust,
                      fingerprints, and smudges.
                    </p>
                  </li>

                  <li>
                    <h4>Vacuuming and Sweeping:</h4>
                    <p>
                      Vacuuming carpets, rugs, and upholstery to remove dirt and
                      allergens. Sweeping and/or mopping hard floors to
                      eliminate dust and debris.
                    </p>
                  </li>

                  <li>
                    <h4>Kitchen Cleaning:</h4>
                    <p>
                      Cleaning kitchen countertops, appliances, and sinks.
                      Wiping down cabinet exteriors. Cleaning the interior of
                      the microwave and other appliances as needed.
                    </p>
                  </li>

                  <li>
                    <h4>Bathroom Cleaning:</h4>
                    <p>
                      Cleaning and disinfecting bathroom surfaces, including
                      sinks, countertops, and fixtures. Scrubbing and
                      disinfecting toilets and showers. Cleaning mirrors.
                    </p>
                  </li>

                  <li>
                    <h4>Bedroom Cleaning:</h4>
                    <p>
                      Changing bed linens. Dusting and wiping down bedroom
                      furniture. Vacuuming carpets or cleaning floors.
                    </p>
                  </li>

                  <li>
                    <h4>Trash Removal:</h4>
                    <p>Emptying trash bins and replacing liners.</p>
                  </li>

                  <li>
                    <h4>Specialized Cleaning (as needed):</h4>
                    <p>
                      Addressing specific cleaning needs, such as stain removal
                      or cleaning interior windows.
                    </p>
                  </li>

                  <li>
                    <h4>Quality Check:</h4>
                    <p>
                      A final inspection to ensure all areas have been properly
                      cleaned and meet the client's expectations.
                    </p>
                  </li>

                  <li>
                    <h4>Client Feedback:</h4>
                    <p>
                      Gathering feedback from the client to ensure satisfaction
                      and identify any areas that may need special attention in
                      future cleanings.
                    </p>
                  </li>
                </ul>

                <p>
                  Residential cleaning services can be tailored to meet
                  individual needs, whether it's a one-time deep clean, regular
                  maintenance cleaning, or addressing specific areas of concern.
                  Professional cleaning services often use eco-friendly products
                  and equipment to create a healthy and environmentally
                  conscious home environment.
                </p>
              </div>
            </Col>
            <Col lg={6} sm={12} xs={12}>
              <img
                src={serviceDetailImg}
                alt="expertDentist"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="healing p-5 footer-bg">
        <Container>
          <Row className="align-items-center p-5">
            <Col lg={6} sm={12} xs={12}>
              <img
                src={serviceDetailImg2}
                alt="expertDentist"
                className="img-fluid pt-xs-5"
              />
            </Col>
            <Col lg={6} sm={12} xs={12}>
              <div className="expertDentist-txt mt-5 mt-lg-0">
                <h2 className="fw-bold text-white">Comercial Cleaning</h2>
                <p className="text-white">
                  Commercial cleaning involves a systematic and comprehensive
                  process tailored to maintain a clean, safe, and organized
                  environment within business and commercial spaces. Here's an
                  overview of the typical commercial cleaning process:
                </p>

                <ul className="text-white">
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
                </ul>

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
