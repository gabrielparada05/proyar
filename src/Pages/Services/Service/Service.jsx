import React, {useEffect} from 'react';
import Appointment from '../../../Pages/Home/Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import Detail from '../Detail/Detail';
import Safety from '../Safety/Safety';

const Service = () => {

  useEffect(() => {
    window.scrollTo({top:0, behavior:'instant'});
  }, [])

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