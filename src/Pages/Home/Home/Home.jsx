import React from 'react';
import Team from '../../../components/Team/Team';
import Feature from '../../../components/Feature/Feature';
// import LatestBlog from '../../../components/LatestBlog/LatestBlog';
import Service from '../../../components/Service/Service';
import About from '../About/About';
// import Promo from '../Appoinment-promo/Promo';
import Appointment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Slick from '../Slick/Slick';
import MyMap from '../../../components/Maps/Maps'
// import Testimonial from '../Testimonial/Testimonial';
import ScrollButton from '../../../components/ScrollBtn/ScrollBtn';

const Home = () => {

    return (
        <>
           <Banner />
           <ScrollButton/>
           {/* <MyMap></MyMap> */}
           <Feature />
           <About />
           <Service />
           {/* <Team /> */}
           <Appointment />
           <Gallery />
           {/* <Testimonial />
           <LatestBlog />
           <Promo /> */}
           <Slick />
        </>
    );
};

export default Home;