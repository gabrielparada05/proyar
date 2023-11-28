import React from 'react';
import Appointment from '../../../Pages/Home/Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import Detail from '../Detail/Detail';
import Safety from '../Safety/Safety';

const Service = () => {
    return (
        <>
          <Banner /> 
          <Detail />
          <Safety />
          <Appointment /> 
        </>
    );
};

export default Service;