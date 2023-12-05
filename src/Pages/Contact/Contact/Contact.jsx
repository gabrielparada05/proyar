import React, {useEffect} from 'react';
import Appointment from '../../../Pages/Home/Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';

const Contact = () => {

    useEffect(() => {
        window.scrollTo({top:0, behavior:'instant'});
      }, [])
    
    return (
        <>
            <Banner />
            <ContactUs />
            <Appointment />   
        </>
    );
};

export default Contact;