import React, { useState } from 'react';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Appoinment.css';


const validate = (values) => {
    const errors = {}
  
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
  
    return errors
  }
  

const Appoinment = () => {

    const [showModal, setShowModal] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (!formik.isValid) {
          formik.setTouched({
            name: true,
            email: true,
            phone:true,
            message: true
          });
          return;
        }
    
    
    
        // Get the form values
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const message = event.target.message.value;
    
        // Create the email parameters
        const params = {
          from_name: name,
          from_email: email,
          from_phone: phone,
          message: message
        };
    
        // Send the email
        emailjs.send('service_4bz76nx', 'template_antjpxu', params, 'm-q4iPuK6x4vj7Zo2')
          .then((response) => {
            console.log('Email sent successfully!', response.status, response.text, params);
            setShowModal(true);
          })
          .catch((error) => {
            console.error('Error sending email:', error);
          });
      };
    
      const closeModal = () => {
        setShowModal(false);
        window.location.href = 'http://localhost:3000/ '
      };
    
      // validate email
      const formik = useFormik({
        initialValues: {
          email: '',
        },
        validate,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2))
        },
      })

   
    return (
        <section className="appoinment-wrapper">
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <div className="section-title">
                            <h1 className="mt-5">Request a Free Estimation</h1>
                        </div>
                        <div className="appoinment-form">
                            <form action="#" className="row" onSubmit={handleSubmit}>
                                <Col md={6} lg={6}>
                                <label htmlFor="name" className="leading-7 text-lg text-gray-800"> Name </label>
                                <input type="text" id="name" name="name" minLength={2} maxLength={20} className="w-full bg-sky-300 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-slate-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:brightness-50" required/>
                                </Col>
                                <Col md={6} lg={6}>
                                <label htmlFor="email" className="leading-7 text-lg text-gray-800"> Email </label>
                                <input type="email" id="email" name="email" className="w-full bg-sky-300 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-slate-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:brightness-50"
                                 onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                                {formik.touched.email && formik.errors.email && (
                                <span>{formik.errors.email}</span>)}
                                </Col>
                                <Col md={6} lg={6}>
                                <label htmlFor="phone" className="leading-7 text-lg text-gray-800"> Phone Number </label>
                                <input type="text" id="phone" name="phone" minLength={2} maxLength={20} className="w-full bg-sky-300 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-slate-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:brightness-50" required/>
                                </Col>
                                <Col md={12} lg={12}>
                                <label htmlFor="message" className="leading-7 text-lg text-gray-800" name="message"> Message </label>
                                <textarea id="message" name="message" minLength={5} maxLength={100} className="w-full bg-sky-300 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-slate-600 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out hover:brightness-50" required/>
                                </Col>
                                {(!formik.dirty || !formik.isValid) && ( <div className="text-red-500 text-center">Please fill out all the fields</div>)}
                                <button type="submit"className={`theme-btn btn-fill form-btn mt-5`} disabled={!formik.dirty || !formik.isValid} title="Please fill out all the fields"> Submit </button>

                            </form>
                        </div>
                    </Col>
                </Row>
                {showModal && (
        <div className="modal1" >
          <div className="modal2">
            <h3>Email Sent Successfully!</h3>
            <button  onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
            </Container>
        </section>
    );
};

export default Appoinment;