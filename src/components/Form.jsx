import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from './Navbar';
import Footer from './Footer';
import '../components/carousel.css';
import axios from 'axios';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import LoadingModal from './LoadingModal';

const isValidPhoneNumber = (value) => {
  const phoneNumberIN = parsePhoneNumberFromString(value, 'IN');
  const phoneNumberAE = parsePhoneNumberFromString(value, 'AE');

  return phoneNumberIN?.isValid() || phoneNumberAE?.isValid();
};

const validationSchema = Yup.object({
  username: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  // phoneNo: Yup.string()
  //   .matches(/^[0-9]{10}$/, 'Invalid mobile number')
  //   .required('Mobile number is required'),  
  // phoneNo: Yup.string()
  //   .test('is-phone-number', 'Invalid phone number', function (value) {
  //     const phoneNumber = parsePhoneNumberFromString(value, 'ZZ');
  //     return phoneNumber ? phoneNumber.isValid() : false;
  //   })
  //   .required('Mobile number is required'),
  phoneNo: Yup.string()
  .test('is-valid-phone-number', 'Invalid phone number', function (value) {
    return isValidPhoneNumber(value);
  })
  .required('Mobile number is required'),
  location: Yup.string().required('Location is required'),
  enquiryType: Yup.string().required('Please select an enquiry type'),
 
  // hardwareType: Yup.string().transform((value, originalValue, originalObject) => {
  //   if (originalObject.enquiryType === 'hardwareService') {
  //     return Yup.string().required('Please select a hardware type').validate(value);
  //   }
  //   return value;
  // }),
  
  message: Yup.string(),
});

const Form = () => { 
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [showThankYou, setShowThankYou] = useState(false); // State to track successful form submission
  const [showLoadingModal, setShowLoadingModal] = useState(false);

    // useEffect to handle redirection when showThankYou changes
    useEffect(() => {
      if (showThankYou) {
        // Redirect to the homepage after a brief delay
        const redirectTimer = setTimeout(() => {
          navigate('/');
        }, 2000);
  
        // Clear the timer when the component is unmounted
        return () => clearTimeout(redirectTimer);
      }
    }, [showThankYou, navigate]);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      phoneNo: '',
      location: '',
      enquiryType: '',
      hardwareType: '',
      message: '',
    },
    validationSchema,
   
    onSubmit: async (values) => {
      try {
        setShowLoadingModal(true);  // Show loading modal before form submission

        // Simulate an asynchronous operation (replace with your actual async code)
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Send form data to the backend using Axios
        const response = await axios.post('https://fiveway-backend.onrender.com/api/userDetail', values);
        console.log('Axios call complete. Response:', response.data);

        // Handle the response from the backend (if needed)
        console.log(response.data);

            // Update state to show thank you message
            setShowThankYou(true);
             // Update state to hide loading modal after form submission
      setShowLoadingModal(false);
      } catch (error) {
        // Handle errors
        console.error('Form submission error:', error);
        setShowLoadingModal(false);  // Hide loading modal in case of an error

      }
    },
  });
    


  return (
    <>
    <Navbar />
 {/* Show Thank You Message */}
 {showThankYou && (
                  <div className="alert alert-info mt-3 h-25 fw-bold fs-2 w-75 p-3 mx-auto" role="alert">
                  Thank you for choosing us! You will be redirected to the homepage shortly.
          </div>
        )}
    <div className="container mb-5 ">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-10 col-sm-10 mt-5 ">
          <div className="card w-75 h-100 mx-auto mx-5 p-4 formstyle fw-bold ">
    <form onSubmit={formik.handleSubmit}>
      <h2 className='text-dark text-center'> Enquiry Form</h2>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Name
        </label>
        <input
          type="text"
          className={`form-control ${formik.touched.username && formik.errors.username ? 'is-invalid' : ''}`}
          id="username"
          {...formik.getFieldProps('username')}
        />
      {formik.touched.username && formik.errors.username ? (
  <div className="invalid-feedback">{formik.errors.username}</div>
) : null}

      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
          id="email"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="invalid-feedback">{formik.errors.email}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="phoneNo" className="form-label">
          Mobile
        </label>
        <input
          type="text"
          className={`form-control ${formik.touched.phoneNo && formik.errors.phoneNo ? 'is-invalid' : ''}`}
          id="phoneNo"
          {...formik.getFieldProps('phoneNo')}
        />
        {formik.touched.phoneNo && formik.errors.phoneNo && (
          <div className="invalid-feedback">{formik.errors.phoneNo}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="location" className="form-label">
          Location
        </label>
        <input
          type="text"
          className={`form-control ${formik.touched.location && formik.errors.location ? 'is-invalid' : ''}`}
          id="location"
          {...formik.getFieldProps('location')}
        />
        {formik.touched.location && formik.errors.location && (
          <div className="invalid-feedback">{formik.errors.location}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Choose what you need to enquire:</label>
        {/* ... your radio buttons ... */}
         {/* dm */}
         <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="digitalMarketing"
            name="enquiryType"
            value="digitalMarketing"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label className="form-check-label" htmlFor="digitalMarketing">
            Digital Marketing
          </label>
        </div>
        {/* web development */}
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="webDevelopment"
            name="enquiryType"
            value="webDevelopment"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label className="form-check-label" htmlFor="webDevelopment">
            Web Development
          </label>
        </div>
       
        {/* graphics designing */}
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="graphicsDesigning"
            name="enquiryType"
            value="graphicsDesigning"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label className="form-check-label" htmlFor="graphicsDesigning">
Graphics Designing          </label>
        </div>
        {/* ecommerce */}
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="ecommerce"
            name="enquiryType"
            value="ecommerce"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label className="form-check-label" htmlFor="ecommerce">
        Ecommerce        </label>
        </div>
        {/* laptop */}
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="hardwareSalesandService"
            name="enquiryType"
            value="hardwareSalesandService"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label className="form-check-label" htmlFor="hardwareSalesandService">Hardware Sales & Service     </label>
        </div>
        
            </div>
        

      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          className={`form-control ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''}`}
          id="message"
          rows="2"
          {...formik.getFieldProps('message')}
        ></textarea>
        {formik.touched.message && formik.errors.message && (
          <div className="invalid-feedback">{formik.errors.message}</div>
        )}
      </div>
      <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>
  Submit
</button>
{showLoadingModal && <LoadingModal />}


    </form>
    </div>
    </div>
    </div>
    </div>
      {/* Show Thank You Message */}
      {/* {showThankYou && (
                  <div className="alert alert-success mt-3" role="alert">
                  Thank you for choosing us! You will be redirected to the homepage shortly.
          </div>
        )} */}
    <Footer />
    </>
  );
};

export default Form;
