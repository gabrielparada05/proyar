import React from 'react';
import Appointment from '../../Home/Appoinment/Appoinment';
import Content from '../AboutContent/Content';
import Banner from '../Banner/Banner';

import ScrollButton from '../../../components/ScrollBtn/ScrollBtn';

const About = () => {
    return (
        <>
          <Banner />
          <ScrollButton/>
          <Content /> 
              {/* <AboutService />
         
            <Achivement /> */}
          <Appointment />
        </>
      );
};

export default About;